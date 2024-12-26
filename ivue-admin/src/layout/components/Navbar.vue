<template>
  <div class="navbar">
    <Hanburger class="h-container" />
    <Breadcrumb />
    <div class="right-menu">
      <HeaderSearch class="right-menu-item hover-effect" />
      <theme-select class="right-menu-item hover-effect" />
      <lang-select class="right-menu-item hover-effect" />
      <Screenfull class="right-menu-item hover-effect" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="userInfo.avatar"></el-avatar>
          <el-icon>
            <UserFilled />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <a target="blank" href="#">
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>

      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { UserFilled } from '@element-plus/icons-vue';
import Hanburger from '@/components/Hanburger/index.vue';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import LangSelect from '@/components/LangSelect/index.vue';
import ThemeSelect from '@/components/ThemeSelect/index.vue';
import Screenfull from '@/components/Screenfull/index.vue';
import HeaderSearch from '@/components/HeaderSearch/index.vue';

const store = useStore();
const userInfo = store.getters.userInfo;
console.log(userInfo);

const handleLogout = () => {
  // 退出登录
  store.dispatch('user/logout');
};
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .h-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    //hover动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    gap: 20px;

    .right-menu {
      display: flex;
      align-items: center;
      float: right;
      padding-right: 16px;

      ::v-deep .right-menu-item {
        display: inline-block;
        padding: 0 18px 0 0;
        font-size: 24px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: rgba(0, 0, 0, 0.025);
          }
        }
      }

      ::v-deep .avatar-container {
        cursor: pointer;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .el-avatar {
            --el-avatar-background-color: none;
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
