// 语言切换

import { createI18n } from 'vue-i18n';
import mZhLocale from './lang/zh';
import mEnLocale from './lang/en';

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en',
  fallbackLocale: 'zh',
  messages: {
    en: {
      message: {
        ...mEnLocale
      }
    },
    zh: {
      message: {
        ...mZhLocale
      }
    }
  }
});
export default i18n;
// ...
