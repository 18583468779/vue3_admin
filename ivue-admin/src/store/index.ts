import { createStore, Store } from 'vuex';
import user, { UserState } from './modules/user';
import getters from './getters';

interface RootState {
  user: UserState;
}
// interface Getters {
//   token: string;
//   // hasUserInfo: object;
//   // 其他 getters 的返回类型
// }
export default createStore<RootState>({
  getters,
  modules: {
    user
  }
}) as Store<RootState>;
