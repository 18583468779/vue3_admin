import { createI18n } from 'vue-i18n';

const message = {
  en: {
    msg: {
      hello: 'hello world'
    }
  },
  zh: {
    msg: {
      hello: '你好，世界'
    }
  }
};
const locale = 'zh';
const i18n = createI18n({
  legacy: false,
  locale,
  globalInjection: true,
  message
});

export default i18n;
