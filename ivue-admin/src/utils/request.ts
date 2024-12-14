import axios from 'axios';

console.log(
  'import.meta.env.VUE_APP_BASE_API',
  import.meta.env.VUE_APP_BASE_API
);

const service = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  timeout: 5000
});

export default service;
