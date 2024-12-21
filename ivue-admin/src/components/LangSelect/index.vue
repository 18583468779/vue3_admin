<!-- <template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <el-tooltip content="12312321" :effect="effect">
        <el-icon>
          <Switch />
        </el-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus';
const { t } = useI18n();

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value) {
      // 这个值必须匹配下列字符串中的一个
      return ['dark', 'light'].indexOf(value) !== -1;
    }
  }
});

const store = useStore();
const language = computed(() => store.getters.language);

// 切换语言的方法
const i18n = useI18n();
const handleSetLanguage = (lang) => {
  console.log(123213, lang);

  i18n.locale.value = lang;
  store.commit('app/setLanguage', lang);
  ElMessage.success(i18n.t('msg.hello'));
};
const aa = t('msg.hello');
console.log('first', aa);
</script> -->
<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
// const { t } = useI18n();
// 切换语言的方法
const i18n = useI18n();
const store = useStore();
const language = computed(() => store.getters.language);

const handleSetLanguage = (lang: string) => {
  i18n.locale.value = lang;
  store.commit('app/setLanguage', lang);
  ElMessage.success(i18n.t('message.login.title'));
};

</script>

<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <el-tooltip content="选择语言" effect="dark">
        <svg t="1734789030934" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="7719" width="32" height="32">
          <path
            d="M536.380952 377.904762a109.714286 109.714286 0 0 1 109.592381 104.545524L646.095238 487.619048v341.333333a109.714286 109.714286 0 0 1-104.545524 109.592381L536.380952 938.666667H195.047619a109.714286 109.714286 0 0 1-109.592381-104.545524L85.333333 828.952381V487.619048a109.714286 109.714286 0 0 1 104.545524-109.592381L195.047619 377.904762h341.333333z m-150.674285 122.294857l-52.004572 3.998476 13.336381 45.348572H207.043048v42.666666h50.663619c15.11619 52.419048 38.66819 95.98781 70.680381 130.633143-30.232381 21.333333-71.558095 39.131429-124.001524 53.345524a425.691429 425.691429 0 0 1 26.672762 41.325714c58.660571-21.333333 103.107048-42.22781 133.315047-62.659047 32.01219 23.113143 76.897524 43.105524 134.680381 59.977143 7.996952-14.189714 17.310476-28.42819 27.989334-42.666667-50.663619-9.752381-92.891429-25.746286-126.659048-47.981714 31.524571-32.353524 54.54019-72.850286 69.022476-121.465905l2.974476-10.532572h52.004572v-42.666666h-126.659048a815.957333 815.957333 0 0 0-7.704381-33.182476l-4.315428-16.140191z m36.010666 91.989333c-8.899048 40.886857-28.013714 75.093333-57.344 102.668191-24.624762-24.624762-43.154286-55.661714-55.661714-93.159619l-2.998857-9.508572h116.004571zM828.952381 85.333333a109.714286 109.714286 0 0 1 109.592381 104.545524L938.666667 195.047619v341.333333a109.714286 109.714286 0 0 1-104.545524 109.592381L828.952381 646.095238h-146.285714v-73.142857h146.285714a36.571429 36.571429 0 0 0 36.400762-33.060571L865.52381 536.380952V195.047619a36.571429 36.571429 0 0 0-33.060572-36.400762L828.952381 158.47619H487.619048a36.571429 36.571429 0 0 0-36.400762 33.060572L451.047619 195.047619v146.285714h-73.142857V195.047619a109.714286 109.714286 0 0 1 104.545524-109.592381L487.619048 85.333333h341.333333zM690.639238 219.428571L804.571429 510.585905h-60.464762l-26.745905-70.314667H674.864762a145.944381 145.944381 0 0 0-22.796191-42.227809h54.076953c-25.33181-70.314667-38.448762-106.398476-39.399619-108.27581a216.210286 216.210286 0 0 1-7.192381-20.723809L658.285714 264.43581h-1.414095l-0.097524 1.365333a64.365714 64.365714 0 0 1-2.706285 9.898667c-1.877333 7.484952-3.291429 12.653714-4.217905 15.457523-0.804571 1.609143-10.044952 27.550476-27.794286 77.872762a146.041905 146.041905 0 0 0-45.958095-22.235428L625.93219 219.428571h64.707048z"
            fill="#515151" p-id="7720"></path>
        </svg>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
.international {
  cursor: pointer;
}
</style>
