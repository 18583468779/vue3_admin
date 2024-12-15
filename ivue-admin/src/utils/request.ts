import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import { ResponseType } from '..';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

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
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);
export default instance;
