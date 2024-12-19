import { RootState } from '.';
import variables from '@/styles/variables.module.scss';
// getters的作用是快捷方式，快速获取state的方法(计算属性)

const getters = {
  token: (state: RootState) => state.user.token,

  /**
   * @returns true 表示判断用户信息是存在的
   */
  hasUserInfo: (state: RootState) =>
    Object.keys(state.user.userInfo).length > 0,
  userInfo: (state: RootState) => state.user.userInfo, // 用户信息
  cssVar: () => variables, // css变量
  open: (state: RootState) => state.app.open // 左侧sidebar伸缩
};
export default getters;
