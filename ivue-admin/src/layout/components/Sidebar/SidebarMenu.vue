<template>
  <el-menu :collapse="!store.getters.open" unique-opened :background-color="store.getters.cssVar.menuBg"
    :text-color="store.getters.cssVar.menuText" :active-text-color="store.getters.cssVar.menuActiveText" router
    :default-active="activeMenu">
    <SidebarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup lang="ts">
import { filterRoutes, generateMenus } from '@/utils/route';
import { computed } from 'vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();
const route = useRoute();
const routes = computed(() => {
  const RoutesList = filterRoutes(router.getRoutes());
  return generateMenus(RoutesList) as RouteRecordRaw[];
});

// 默认激活
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>

<style scoped></style>
