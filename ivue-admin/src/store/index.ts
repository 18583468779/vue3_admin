import { createStore, Store } from 'vuex';
import user, { UserState } from './modules/user';
import getters from './getters';
import app, { AppType } from './modules/app';

export interface RootState {
  user: UserState;
  app: AppType;
}
// interface Getters {
//   token: string;
//   // hasUserInfo: object;
//   // 其他 getters 的返回类型
// }
export default createStore<RootState>({
  getters,
  modules: {
    user,
    app
  }
}) as Store<RootState>;
