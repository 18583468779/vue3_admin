<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <SideBar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 -->
        <Navbar />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/layout/components/Sidebar/index.vue';
import AppMain from '@/layout/components/AppMain.vue';
import Navbar from '@/layout/components/Navbar.vue';
import variables from '@/styles/variables.module.scss'; // 在js里使用scss变量
console.log(1111, variables);

</script>

<style scoped lang="scss">
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;

  width: calc(100% - #{$sideBarWidth});
}
</style>
