import { login } from '@/api/sys';
import { FormDataType } from '@/index';
import md5 from 'md5';
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context: any, userInfo: FormDataType) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data: any) => {
            resolve(data);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    }
  }
};
