<template>
  <div class="login-container">
    <el-form class="login-form" :model="formModel" :rules="formRules" ref="loginFormRef">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <Avatar />
          </el-icon>
          <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg" /> -->
        </span>
        <el-input class="input" placeholder="请输入用户名" name="username" type="text" v-model="formModel.username" />
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <Lock />
          </el-icon>
        </span>
        <el-input class="input" placeholder="请输入密码" name="password" :type="passwordType" v-model="formModel.password" />
        <span class="show-pwd" @click="handlePwdType">
          <el-icon>
            <Hide v-if="passwordType == 'password'" />
            <View v-else />
          </el-icon>
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button :loading="loginLoading" type="primary" style="width: 100%; margin-bottom: 30px"
        @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { FormDataType } from '@/index';
import { Avatar, Lock, Hide, View } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
// import SvgIcon from '@/components/SvgIcon/index.vue';

const formModel = ref<FormDataType>({
  username: 'super-admin',
  password: '123456'
});
const passwordType = ref('password');
const loginLoading = ref(false); // 按钮loading
const loginFormRef = ref<FormInstance | null>(null);

const formRules = ref<FormRules<FormDataType>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 25, message: '用户名长度在2-25之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 25, message: '密码长度在6-25之间', trigger: 'blur' }
  ]
});

const handlePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text';
  } else {
    passwordType.value = 'password';
  }
};

const handleLogin = () => {
  // 表单验证
  loginFormRef.value!.validate(async (valid, fields) => {
    if (valid) {
      loginLoading.value = true;
      const data = await store.dispatch('user/login', formModel.value);
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: ▣#454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      div {
        background-color: transparent;
        border: none;
        width: 100%;
        box-shadow: none;
      }

      input {
        height: 47px;
        background: transparent;
        border: none;
        border-radius: Opx;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
