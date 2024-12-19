<template>
  <div>
    <el-icon>
      <component :is="icon"></component>
    </el-icon>
    <span>{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
type Props = {
  title: any
  icon: any
}
defineProps<Props>();
</script>

<style scoped></style>
