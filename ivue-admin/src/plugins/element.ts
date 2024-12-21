import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { App } from 'vue';
import store from '@/store';

export default (app: App) => {
  app.use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn // 国际化处理
  });
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
};
