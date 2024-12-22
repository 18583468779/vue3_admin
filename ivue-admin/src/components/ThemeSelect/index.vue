<template>
  <div>
    <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSelectTheme">
      <div>
        <el-tooltip :content="$t('message.navBar.themeChange')">
          <svg t="1734833584322" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4070" width="32" height="32">
            <path
              d="M367.445333 232.234667h-3.221333c-8.981333 0-17.578667 3.584-23.893333 9.984L156.586667 428.416a33.557333 33.557333 0 0 0-0.32 46.805333l72.597333 75.690667a33.557333 33.557333 0 0 0 45.802667 2.474667l11.178666-9.386667a21.44 21.44 0 0 1 35.2 16.426667v214.250666c0 18.517333 15.04 33.557333 33.557334 33.557334h322.218666c18.538667 0 33.557333-15.04 33.557334-33.557334V560a21.034667 21.034667 0 0 1 34.688-16l9.28 7.893333a33.557333 33.557333 0 0 0 47.210666-3.626666l62.613334-72.704a33.557333 33.557333 0 0 0-2.026667-45.952l-193.109333-187.904a33.557333 33.557333 0 0 0-23.402667-9.493334h-6.528c-21.333333 55.893333-74.090667 95.424-135.829333 95.424-61.717333 0-114.496-39.552-135.808-95.424z m425.813334 542.442666a116.458667 116.458667 0 0 1-116.458667 116.437334H354.581333a116.458667 116.458667 0 0 1-116.437333-116.437334v-131.498666a116.053333 116.053333 0 0 1-69.12-34.88L96.426667 532.608a116.458667 116.458667 0 0 1 1.173333-162.432l183.765333-186.197333A116.458667 116.458667 0 0 1 364.224 149.333333H424.533333l20.352 53.333334c9.728 25.536 32.853333 42.090667 58.346667 42.090666 25.493333 0 48.64-16.554667 58.368-42.069333L581.973333 149.333333h63.637334c30.336 0 59.477333 11.84 81.216 33.002667l193.088 187.882667a116.458667 116.458667 0 0 1 7.04 159.466666l-62.613334 72.682667a116.010667 116.010667 0 0 1-71.082666 39.210667v133.098666z"
              fill="#454545" p-id="4071"></path>
          </svg>
        </el-tooltip>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="color">
            {{ $t('message.theme.themeColorChange') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <!-- 展示弹出层 -->
    <div>
      <select-color v-model="selectColorVisible"></select-color>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectColor from './components/SelectColor.vue';
import { ref } from 'vue';

const selectColorVisible = ref(false);
const handleSelectTheme = () => {
  selectColorVisible.value = true;
};
</script>

<style scoped></style>
