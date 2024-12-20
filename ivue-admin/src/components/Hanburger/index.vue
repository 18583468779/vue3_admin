<template>
  <div class="h-container" @click="toggleClick">
    <el-icon class="h">
      <component :is="icon" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const icon = computed(() => store.getters.open ? 'Fold' : 'Expand');
const toggleClick = () => {
  store.dispatch('app/change');
};
</script>

<style scoped lang="scss">
.h-container {
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .h {
    width: 20px;
    height: 20px;
  }
}
</style>
