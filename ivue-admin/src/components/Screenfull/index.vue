<template>
  <div style="cursor: pointer;">
    <el-icon @click="handleToggle">
      <FullScreen />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { FullScreen } from '@element-plus/icons-vue';
import screenfull from 'screenfull';

const handleToggle = () => {
  screenfull.toggle();
};

</script>

<style scoped></style>
