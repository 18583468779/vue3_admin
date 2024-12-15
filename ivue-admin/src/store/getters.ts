import { UserState } from './modules/user';

// getters的作用是快捷方式，快速获取state的方法(计算属性)
interface RootState {
  user: UserState;
  // 其他模块的状态
}
const getters = {
  token: (state: RootState) => state.user.token
};
export default getters;
