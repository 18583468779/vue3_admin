import { UserState } from './modules/user';

// getters的作用是快捷方式，快速获取state的方法(计算属性)
interface RootState {
  user: UserState;
  // userInfo: any;
  // 其他模块的状态
}
const getters = {
  token: (state: RootState) => state.user.token,
  /**
   * @returns true 表示判断用户信息是存在的
   */
  hasUserInfo: (state: any) => Object.keys(state.user.userInfo).length > 0
};
export default getters;
