import { ActionContext } from 'vuex';

// 展开和收缩左侧sidebar
export type OpenType = {
  open: boolean;
};

export default {
  namespaced: true,
  state: () => ({
    open: true // 默认展开
  }),
  mutations: {
    setOpen(state: OpenType) {
      state.open = !state.open;
    }
  },
  actions: {
    change(context: ActionContext<OpenType, any>) {
      context.commit('setOpen');
    }
  }
};
