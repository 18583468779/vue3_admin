import { getUserInfo, login } from '@/api/sys';
import { EToken } from '@/enum';
import { FormDataType, UserInfoType } from '@/index';
import router from '@/router';
import { setTimeStamp } from '@/utils/auth';
import { getItem, removeAllItem, setItem } from '@/utils/storage';
import { ElMessage } from 'element-plus';
import md5 from 'md5';
import { ActionContext } from 'vuex';

export type UserState = {
  token: string;
  userInfo: UserInfoType;
};

export default {
  namespaced: true,
  state: () => ({
    token: getItem(EToken.TOKEN) ?? '',
    userInfo: {}
  }),
  mutations: {
    setToken(state: UserState, token: string) {
      state.token = token;
      setItem(EToken.TOKEN, token); // 设置缓存
    },
    setUserInfo(state: UserState, userInfo: UserInfoType) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    // 用户登录
    login(context: ActionContext<UserState, any>, userInfo: FormDataType) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((res: any) => {
            context.commit('setToken', res.token);
            if (res.token) {
              ElMessage.success('恭喜你，登录成功');
              // 保存登录时间
              setTimeStamp();
              router.push('/');
            }
            resolve(res);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
    // 获取用户信息
    async getUserInfo(context: ActionContext<UserInfoType, any>) {
      const res = (await getUserInfo()) as unknown as UserInfoType;
      context.commit('setUserInfo', res);
    },
    /**
     *  退出登录
     */
    logout(context: ActionContext<any, any>) {
      context.commit('setUserInfo', {});
      context.commit('setToken', '');
      removeAllItem();
      router.push('/login');
      ElMessage.success('退出登录成功');
    }
  }
};
