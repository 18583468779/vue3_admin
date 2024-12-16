// 用于处理被动登出的方法

import { EConst } from '@/enum';
import { getItem, setItem } from './storage';

/**
 * 获取时间戳
 */
function getTimeStamp() {
  return getItem(EConst.TIME_STAMP);
}

/**
 * 设置时间戳
 */
function setTimeStamp() {
  setItem(EConst.TIME_STAMP, Date.now());
}

/**
 *  是否超时
 */
function isCheckTimeout() {
  const currentTime = Date.now();
  const timeStamp = getTimeStamp();
  return currentTime - timeStamp > EConst.TOKEN_TIMEOUT_VALUE;
}
export { getTimeStamp, setTimeStamp, isCheckTimeout };
