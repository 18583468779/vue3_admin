/**
 *  缓存函数
 */

/**
 *  @description 设置缓存
 *  @param {缓存的名称} key
 *  @param {缓存的值} val
 */
const setItem = (key: string, val: any) => {
  if (typeof val === 'object') {
    val = JSON.stringify(val);
  }
  window.localStorage.setItem(key, val);
};
/**
 *  @description 获取缓存
 *  @param {缓存的名称} key
 */
const getItem = (key: string) => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.parse(data!);
  } catch (error) {
    return data;
  }
};
/**
 *  @description 删除缓存
 *  @param {缓存的名称} key
 */
const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

/**
 *  @description 清除所有缓存
 */
const removeAllItem = () => {
  window.localStorage.clear();
};

export { setItem, getItem, removeItem, removeAllItem };
