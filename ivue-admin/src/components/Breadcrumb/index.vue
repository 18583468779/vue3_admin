<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in dataList" :key="item.path">
        <!-- 不可点击 -->
        <span class="no-redirect" v-if="index === dataList.length - 1">{{ item.meta.title }}</span>
        <!-- 可点击 -->
        <span class="redirect" v-else @click="handelLink(item)">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();
const dataList = ref<Array<RouteLocationMatched>>([]);
const linkHoverColor = ref(store.getters.cssVar.menuBg);

watch(route, () => {
  dataList.value = route.matched.filter(item => item.meta && item.meta.title);
}, { immediate: true });

const handelLink = (item: RouteLocationMatched) => {
  router.push(item.path);
};

</script>
<style scoped lang="scss">
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .redirect {
    color: #666;
    font-weight: 600;

    &:hover {
      color: v-bind(linkHoverColor);
      cursor: pointer;
    }
  }

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
