import { login } from '@/api/sys';
import md5 from 'md5';
export default {
  namespace: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context: any, userInfo: any) {
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
