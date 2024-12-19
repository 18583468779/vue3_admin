<template>
  <el-menu unique-opened background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <SidebarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup lang="ts">
import { filterRoutes, generateMenus } from '@/utils/route';
import { computed } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
const router = useRouter();

const routes = computed(() => {
  const RoutesList = filterRoutes(router.getRoutes());
  return generateMenus(RoutesList) as RouteRecordRaw[];
});

</script>

<style scoped></style>
