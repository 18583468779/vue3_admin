<template>
  <div>
    <el-icon>
      <component :is="icon"></component>
    </el-icon>
    <span style="margin-left: 5px;">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
type Props = {
  title: any
  icon: any
  isSubItem: boolean // 是否是二级item，是的话当收缩时隐藏
}
defineProps<Props>();
</script>

<style scoped></style>
