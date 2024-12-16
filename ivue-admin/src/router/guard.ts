/**
 *  @description 路由守卫
 * */
import { RouteLocationNormalized, Router } from 'vue-router';
import store from '@/store';
/**
 *  路由前置守卫
 *
 */

// 白名单
const whiteList = ['/login'];
export const setUpRouterGuard = (router: Router) => {
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: (path?: string) => void
    ) => {
      // 1. 用户已登录，不允许进入login
      if (store.getters.token) {
        if (to.path === '/login') {
          next('/');
        } else {
          // 判断用户信息是否存在，不存在则获取用户信息
          if (!store.getters.hasUserInfo) {
            await store.dispatch('user/getUserInfo');
          }
          next();
        }
      } else {
        // 2.用户未登录，只允许进入login
        if (whiteList.includes(to.path)) {
          next();
        } else {
          next('/login');
        }
      }
    }
  );
};
