<template>
  <n-layout>
    <n-layout-header class="header">
      <NavigationBar />
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider content-style="min-width: 0;">
        <LeftSider />
      </n-layout-sider>
      <n-layout has-sider sider-placement="right">
        <n-layout-content content-style="padding: 24px;" :style="{ background: modeColor }">
          <router-view />
        </n-layout-content>
        <n-layout-sider content-style="min-width: 0;">
          <RightSider />
        </n-layout-sider>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script>
import { defineComponent, computed, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui';
import NavigationBar from '@/components/NavigationBar';
import LeftSider from '@/components/Sider/LeftSider';
import RightSider from '@/components/Sider/RightSider';

export default defineComponent({
  components: {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider,
    NavigationBar,
    LeftSider,
    RightSider,
  },
  setup() {
    const store = useStore();
    const darkMode = computed(() => store.state.user.darkMode);
    const modeColor = ref();
    watch(
      () => darkMode.value,
      (value) => {
        if (value === true) {
          modeColor.value = '#ffffff1a';
        } else {
          modeColor.value = '#f7f7f7';
        }
      }
    );
    return {
      darkMode,
      modeColor,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
