<template>
  <n-card size="huge" hoverable>
    <template #header>
      <div class="src-info">
        <img
          class="facebook-src-info"
          src="https://scontent.ftpe14-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/92794927_3551866721506542_8323961393506156544_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=xUiTQ5u5KXkAX_8ZpKe&_nc_ht=scontent.ftpe14-1.fna&oh=06ccf6d4d50f29a57a388686695d4946&oe=618F6BA7"
        />
        <p class="facebook-user-name">鬼門圖文</p>
      </div>
    </template>
    <template #header-extra>
      <n-dropdown :options="options">
        <n-button text>
          <n-icon size="24">
            <more-horizontal-24-filled />
          </n-icon>
        </n-button>
      </n-dropdown>
    </template>
    <n-grid>
      <n-gi :span="4">
        <img
          class="article-img"
          src="https://scontent.ftpe14-1.fna.fbcdn.net/v/t1.6435-9/s1080x2048/244589973_5239118752781322_1985683045679869671_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=yaBpMNSrHcAAX8Azpo3&_nc_oc=AQl00NFKlwMjyvCVmXqJZDHbYnFqN-W-TwFj4KSGVfTUKqS-iCdjqUytfx8z05kamM8&_nc_ht=scontent.ftpe14-1.fna&oh=569f1e44f3e3630d047b48158ea19a8c&oe=618CE046"
        />
      </n-gi>
      <n-gi :span="20">
        <div class="src-and-article">
          <div class="src-info">
            <img class="src-img" src="@/assets/facebook.svg" />
            <p class="article-info">Facebook・2021年10月14日 20:24</p>
          </div>
          <n-ellipsis class="article" line-clamp="3" :tooltip="false">
            良心過不去的阿姨
            <br />
            ______________________
            <br />
            ig: ghost_door
            <br />
          </n-ellipsis>
        </div>
        <div class="read-more">
          <a
            target="_blank"
            href="https://www.facebook.com/221809941178920/posts/5239119019447962/?d=n"
            >觀看全文</a
          >
          <n-icon class="read-more-icon">
            <angle-double-right />
          </n-icon>
        </div>
      </n-gi>
    </n-grid>
  </n-card>
</template>
<script>
import { h } from 'vue';
import { NCard, NEllipsis, NGrid, NGi, NButton, NIcon, NDropdown } from 'naive-ui';
import { BookmarkRegular, WindowCloseRegular, AngleDoubleRight } from '@vicons/fa';
import { MoreHorizontal24Filled } from '@vicons/fluent';

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

export default {
  components: {
    NCard,
    NEllipsis,
    NGrid,
    NGi,
    NButton,
    NIcon,
    NDropdown,
    AngleDoubleRight,
    MoreHorizontal24Filled,
  },
  setup() {
    return {
      options: [
        {
          label: '收藏',
          key: 'Bookmark',
          icon: renderIcon(BookmarkRegular),
        },
        {
          label: '隱藏貼文',
          key: 'hiddenArticle',
          icon: renderIcon(WindowCloseRegular),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import 'style.scss';
</style>
