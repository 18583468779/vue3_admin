/**
 *  判断为外部资源
 *  @param {icon路径} path
 *
 */

export function isExternal(path: string) {
  return /^(https?:|mailto:tel:)/.test(path);
}
