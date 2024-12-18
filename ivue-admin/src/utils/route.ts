// 对路由数据结构的处理

import { RouteRecordRaw } from 'vue-router';
import path from 'path';
/**
 *  获取所有含有子集路由的数据
 */
const getChildrenRoutes = (routes: Array<RouteRecordRaw>) => {
  const result = [] as Array<RouteRecordRaw>;
  routes.forEach((r) => {
    if (r.children && r.children.length > 0) {
      result.push(...r.children);
    }
  });
  return result;
};
/**
 *  处理脱离层级的路由
 *
 */
const filterRoutes = (routes: Array<RouteRecordRaw>) => {
  // 所有的子集路由
  const childrenRoutes = getChildrenRoutes(routes);
  // 根据子集路由进行查重
  return routes.filter((r) => !childrenRoutes.find((c) => c.path === r.path));
};

/**
 *  判断是否是空值
 */
function isNull(data: any): boolean {
  if (!data) return true;
  if (JSON.stringify(data) === '{}') return true;
  if (JSON.stringify(data) === '[]') return true;
  return false;
}
/**
 *  根据routes的数据，返回对应的menu规则数据
 *
 */
const generateMenus = (routes: Array<RouteRecordRaw>, basePath = '') => {
  const result: Array<any> = [];
  // 不满足条件 mete && meta.title && meta.icon 的数据不应该存在
  routes.forEach((item) => {
    // 不存在children && 不存在meta 直接return
    if (isNull(item.children) && isNull(item.meta)) return;
    // 存在children 不存在meta
    if (!isNull(item.children) && isNull(item.meta)) {
      result.push(...generateMenus(item.children!));
    }
    // 不存在children 存在meta
    // 因为最终的menu需要进行跳转，此时我们需要合并path
    const routePath = path.resolve(basePath, item.path);
    // 路由分离后可能存在同名父路由的情况
    let route = result.find(
      (item) => item.path === routePath
    ) as RouteRecordRaw;

    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      };
      // icon && title
      if (route.meta!.icon && route.meta!.title) {
        result.push(route);
      }
    }

    // 存在children && 存在meta
    if (!isNull(item.children)) {
      route.children?.push(...generateMenus(item.children!, route.path));
    }
  });

  return result;
};

export { filterRoutes, generateMenus };
