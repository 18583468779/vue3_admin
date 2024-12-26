<template>
  <div :class="{ show: isShow }" class="header-search">
    <el-icon size="24" @click="onShowClick">
      <Search />
    </el-icon>
    <el-select ref="headerSearchSelectRef" class="header-search-select" v-model="search" filterable default-first-option
      remote placeholder="Search" :remote-method="querySearch" @change="onSelectChange">
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { filterRoutes, handleSearchData } from '@/utils/route';
import { Search } from '@element-plus/icons-vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Fuse from 'fuse.js';

const router = useRouter();

const searchPool = computed(() => {
  const route = filterRoutes(router.getRoutes());
  const handleGetData = handleSearchData();
  return handleGetData(route);
});

const fuse = new Fuse(searchPool.value, {
  shouldSort: true, // 是否按优先级进行排序
  minMatchCharLength: 1, // 匹配长度1
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.3
    }
  ]
});

// 控制search显示
const isShow = ref(false);
// el-select 实例
const headerSearchSelectRef = ref(null);
const onShowClick = () => {
  isShow.value = !isShow.value;
};
// search相关
const search = ref('');

const querySearch = (query: any) => {
  console.log(query, fuse.search(query));
};

const onSelectChange = () => {
  console.log('onSelectChange');
};
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  display: flex;
  align-items: center;
  cursor: pointer;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
