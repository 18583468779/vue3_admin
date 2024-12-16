import { UserState } from './modules/user';

// getters的作用是快捷方式，快速获取state的方法(计算属性)
interface RootState {
  user: UserState;
  // 其他模块的状态
}
const getters = {
  token: (state: RootState) => state.user.token,

  /**
   * @returns true 表示判断用户信息是存在的
   */
  hasUserInfo: (state: RootState) =>
    Object.keys(state.user.userInfo).length > 0,
  userInfo: (state: RootState) => state.user.userInfo // 用户信息
};
export default getters;
