<template>
  <n-grid class="navigation" style="width: auto">
    <n-gi :span="6" class="left">
      <router-link to="/" class="logo-wrap">
        <img class="lamp-logo" src="@/assets/lamp-2.svg" />
        <span class="text">Lamp</span>
      </router-link>
      <div class="search-block">
        <n-input round clearable placeholder="搜尋">
          <template #prefix>
            <n-icon>
              <search />
            </n-icon>
          </template>
          搜尋
        </n-input>
      </div>
    </n-gi>
    <n-gi :span="12" class="center">
      <n-button text class="button">
        <n-icon>
          <dynamic-feed-outlined />
        </n-icon>
        動態
      </n-button>
      <n-button text>
        <n-icon>
          <radar-twotone />
        </n-icon>
        雷達
      </n-button>
      <n-button text>
        <n-icon>
          <leaderboardOutlined />
        </n-icon>
        排行
      </n-button>
      <n-button text>
        <n-icon>
          <bookmarksOutlined />
        </n-icon>
        收藏
      </n-button>
    </n-gi>
    <n-gi :span="6" class="right">
      <n-button text class="app-button">
        <n-icon size="25">
          <office-apps-24-filled />
        </n-icon>
      </n-button>
      <div v-if="!islogin">
        <n-button class="login-button" color="#36ad6a" @click="userLogin">登入</n-button>
      </div>
      <div class="profile" v-else>
        <n-popover trigger="click" width="150" :show-arrow="false" style="margin-right: 9rem">
          <template #trigger>
            <img class="avatar" src="https://pbs.twimg.com/media/B3EqrepIEAEVeW2.jpg" />
          </template>
          <n-card :bordered="false">
            <n-button text class="profile-info">
              <img class="avatar" src="https://pbs.twimg.com/media/B3EqrepIEAEVeW2.jpg" />
              <div class="info-block">
                <p>簡到槍</p>
                <p class="detail-text">查看個人檔案</p>
              </div>
            </n-button>
            <div class="divider" />
            <n-button text class="profile-button">
              <n-icon>
                <settings-sharp />
              </n-icon>
              <p>設定</p>
            </n-button>
            <n-button text class="dark-mode">
              <n-icon>
                <moon />
              </n-icon>
              <p>深色模式</p>
              <n-switch v-model:value="active" @update:value="handleChange" size="small" />
            </n-button>
            <div class="divider" />
            <n-button text class="profile-button" @click="userLogout">
              <n-icon>
                <sign-out-alt />
              </n-icon>
              <p>登出</p>
            </n-button>
          </n-card>
        </n-popover>
      </div>
    </n-gi>
  </n-grid>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { NGrid, NGi, NInput, NIcon, NButton, NPopover, NCard, NSwitch } from 'naive-ui';
import {
  LeaderboardOutlined,
  BookmarksOutlined,
  RadarTwotone,
  DynamicFeedOutlined,
} from '@vicons/material';
import { Search, SettingsSharp } from '@vicons/ionicons5';
import { OfficeApps24Filled } from '@vicons/fluent';
import { SignOutAlt, Moon } from '@vicons/fa';

export default {
  name: 'NavigationBar',
  components: {
    NGrid,
    NGi,
    NInput,
    NIcon,
    NButton,
    NCard,
    NSwitch,
    NPopover,
    Search,
    OfficeApps24Filled,
    LeaderboardOutlined,
    BookmarksOutlined,
    RadarTwotone,
    DynamicFeedOutlined,
    SettingsSharp,
    Moon,
    SignOutAlt,
  },
  setup() {
    const store = useStore();
    const islogin = ref(false);
    const active = ref(false);
    const userLogin = () => {
      islogin.value = !islogin.value;
    };
    const userLogout = () => {
      islogin.value = !islogin.value;
    };
    const handleChange = (value) => {
      store.dispatch('user/setDarkMode', value);
    };

    return {
      islogin,
      active,
      userLogin,
      userLogout,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
