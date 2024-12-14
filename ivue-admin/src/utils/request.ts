import axios, { AxiosInstance } from 'axios';

console.log(process.env);

const instance: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 5000
});

export default instance;
