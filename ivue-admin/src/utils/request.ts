import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
import { ElMessage } from 'element-plus';
import { ResponseType } from '..';
import store from '@/store';
import { isCheckTimeout } from './auth';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});
// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (store.getters.token) {
      if (isCheckTimeout()) {
        // 登录超时退出登录
        store.dispatch('user/logout');
        return Promise.reject(new Error('token 失效'));
      }
      // 给请求都带上token
      config.headers!.Authorization = `Bearer ${store.getters.token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (response: AxiosResponse<ResponseType<any>, any>) => {
    const { data, code, message } = response.data;
    if (code === 0) {
      return data;
    } else {
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  // 请求失败
  (error: AxiosError) => {
    // 被动退出登录，如果要实现单点登录，那么这里还需要加一个对状态码的判断
    if (
      error.response &&
      error.response.data &&
      (error.response.data as any).code === 401
    ) {
      // token 超时
      store.dispatch('user/logout');
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);
export default instance;
