import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import installElementPlus from './plugins/element';
import '@/styles/index.scss';
import setupMock from './mock';
import { setUpRouterGuard } from './router/guard';

// 启动Mock服务器
setupMock();

const app = createApp(App);
installElementPlus(app); // 挂载element-plus
setUpRouterGuard(router); // 挂载路由守卫
app.use(store).use(router).mount('#app');
