// 主题色更换

import { ETheme } from '@/enum';
import { getItem, setItem } from '@/utils/storage';

export type ThemeType = {
  mainColor: string;
};

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(ETheme.MAIN_COLOR) || ETheme.DEFAULT_COLOR
  }),
  mutations: {
    setMainColor(state: ThemeType, newColor: string) {
      state.mainColor = newColor;
      setItem(ETheme.MAIN_COLOR, newColor);
    }
  },
  actions: {}
};
