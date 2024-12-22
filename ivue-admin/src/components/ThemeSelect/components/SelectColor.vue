<template>
  <div>
    <el-dialog :model-value="modelValue" title="提示" width="22%" :before-close="handleClose">
      <div class="center">
        <p class="title">{{ $t('message.theme.themeColorChange') }}</p>
        <el-color-picker v-model="mColor" :predefine="predefineColors"></el-color-picker>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleClose">{{
            $t('message.universal.cancel')
          }}</el-button>
          <el-button type="primary" @click="handleConfirm">
            {{ $t('message.universal.confirm') }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useStore } from 'vuex';

type Props = {
  modelValue: boolean;
};

defineProps<Props>();
const emits = defineEmits(['update:modelValue']);
const store = useStore();
const mColor = ref(store.getters.mainColor);
// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
];
const handleClose = () => {
  emits('update:modelValue', false);
};

const handleConfirm = () => {
  store.commit('theme/setMainColor', mColor.value);
  ElMessage.success('主题色切换成功');
  handleClose();
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;

  .title {
    margin-bottom: 12px;
  }
}
</style>
