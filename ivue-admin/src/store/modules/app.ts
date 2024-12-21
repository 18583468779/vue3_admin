import { LANG } from '@/enum';
import { getItem, setItem } from '@/utils/storage';
import { ActionContext } from 'vuex';

// 展开和收缩左侧sidebar
export type AppType = {
  open: boolean;
  language: string;
};

export default {
  namespaced: true,
  state: () => ({
    open: true, // 默认展开
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    setOpen(state: AppType) {
      state.open = !state.open;
    },
    /**
     * 设置国际化
     */
    setLanguage(state: AppType, lang: string) {
      setItem(LANG, lang);
      state.language = lang;
    }
  },
  actions: {
    change(context: ActionContext<AppType, any>) {
      context.commit('setOpen');
    }
  }
};
