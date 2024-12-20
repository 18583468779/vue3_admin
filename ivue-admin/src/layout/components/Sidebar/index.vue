<template>
  <div>
    <div class="logo-container">
      <el-avatar :size="logoHeight" shape="square" :src="circleUrl"></el-avatar>
      <h1 class="logo-title" v-if="store.getters.open">vue3通用后台管理系统</h1>
    </div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import SidebarMenu from './SidebarMenu.vue';
import { useStore } from 'vuex';

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
});
const { circleUrl } = toRefs(state);
const store = useStore();
const logoHeight = 44;
</script>

<style scoped lang="scss">
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 82px;
  box-sizing: border-box;

  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
