import { login } from '@/api/sys';
import { EToken } from '@/enum';
import { FormDataType, ResponseType } from '@/index';
import { getItem, setItem } from '@/utils/storage';
import md5 from 'md5';
import { ActionContext } from 'vuex';

type UserState = {
  token: string;
};

export default {
  namespaced: true,
  state: () => ({
    token: getItem(EToken.TOKEN) ?? ''
  }),
  mutations: {
    setToken(state: UserState, token: string) {
      state.token = token;
      setItem(EToken.TOKEN, token); // 设置缓存
    }
  },
  actions: {
    login(context: ActionContext<UserState, any>, userInfo: FormDataType) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((res: any) => {
            context.commit('setToken', res.token);
            resolve(res);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    }
  }
};
