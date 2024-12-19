<template>
  <el-sub-menu v-if="route.children!.length > 0" :index="route.path">
    <template #title>
      <menu-item :is-sub-item="false" :title="route.meta!.title" :icon="route.meta!.icon"></menu-item>
    </template>
    <SidebarItem v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-item :is-sub-item="true" :title="route.meta!.title" :icon="route.meta!.icon"></menu-item>
  </el-menu-item>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import { defineProps } from 'vue';
import { RouteRecordRaw } from 'vue-router';
type Props = {
  route: RouteRecordRaw
}
defineProps<Props>();
</script>

<style scoped></style>
