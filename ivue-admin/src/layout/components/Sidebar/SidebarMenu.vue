<template>
  <el-menu unique-opened background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <InfoFilled />
        </el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <InfoFilled />
        </el-icon>
        <span>导航四</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue';
</script>

<style scoped></style>
