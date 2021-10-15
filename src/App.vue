<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :locale="zhTW"
    :date-locale="dateZhTW"
    :theme="theme"
  >
    <RootLayout />
  </n-config-provider>
</template>

<script>
import { computed, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { NConfigProvider, NIcon, darkTheme } from 'naive-ui';
import RootLayout from '@/components/Layout/RootLayout';
import zhTW from '@/components/Locales/common/zhTW';
import dateZhTW from '@/components/Locales/date/zhTW';

const themeOverrides = {
  common: {
    baseColor: '#FFF',
    primaryColor: '#18a058',
    primaryColorHover: '#36ad6a',
    primaryColorPressed: '#0c7a43',
    primaryColorSuppl: '#36ad6a',
  },
};

export default {
  name: 'app',
  components: {
    NConfigProvider,
    RootLayout,
  },
  setup() {
    const store = useStore();
    const theme = ref(null);
    const darkMode = computed(() => store.state.user.darkMode);
    watch(
      () => darkMode.value,
      (value) => {
        if (value === true) {
          theme.value = darkTheme;
        } else {
          theme.value = null;
        }
      }
    );
    return {
      themeOverrides,
      zhTW,
      dateZhTW,
      NIcon,
      darkMode,
      darkTheme,
      theme,
    };
  },
};
</script>
<style lang="scss">
:root {
  --layout-header-height: 64px;
  --layout-footer-height: 64px;
  --layout-content-height: calc(100vh - var(--layout-header-height) - var(--layout-footer-height));

  --primary-color: #18a058;
  --primary-color-hover: #36ad6a;
  --primary-text-color: #262626;
  --bezier: cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  font-size: 12px !important;
}

body {
  font-size: 1.2rem;
  // background: #f8f9f9;
}

#app {
  // eslint-disable-next-line max-len
  font-family: 'PingFang TC', 'Noto Sans TC', 'Heiti TC', '黑體-繁', 'Droid Sans', 'Roboto',
    'Microsoft JhengHei', '微軟正黑體';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s var(--bezier), text-decoration-color 0.3s var(--bezier);
  text-decoration-color: var(--text-color);
  color: var(--text-color);

  &:hover {
    color: var(--primary-color-hover);
  }
}
::selection {
  color: #fff;
  background: rgb(128, 128, 128, 0.5);
}
</style>
