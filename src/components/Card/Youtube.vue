<template>
  <n-card size="huge" hoverable>
    <template #header>
      <div class="src-info">
        <p class="facebook-user-name">謝盈萱孕肚超逼真內幕公開！醫生即興台詞「隔壁老王」慘被瞪！</p>
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
        <img class="article-img" src="http://img.youtube.com/vi/4ulPaW56ITw/hqdefault.jpg" />
      </n-gi>
      <n-gi :span="20">
        <div class="src-and-article">
          <div class="src-info">
            <img class="src-img" src="@/assets/youtube.svg" />
            <p class="article-info">YouTube・2021年10月12日</p>
          </div>
          <n-ellipsis class="article" line-clamp="3" :tooltip="false">
            #俗女養成記2 #謝盈萱 #于子育<br />
            加入娛樂百分百成為專屬會員 👉🏻 https://reurl.cc/j70jx2<br />
            ⭐️凹嗚狼人殺周邊商品購買 https://sho.pe/TMK9J<br />
            ⭐️凹嗚狼人殺*夢特胸包(聯名款) https://lihi1.com/rTFje<br />
            <br />
            ⭐️訂閱《娛樂百分百》YouTube頻道 👉🏻 https://bit.ly/2GCrsSd<br />
            ⭐️按讚《娛樂百分百》FaceBook專頁 👉🏻 https://reurl.cc/m4947<br />
            ⭐️追蹤《娛樂百分百》IG 👉🏻 www.instagram.com/gtve100<br />
            ⭐️娛樂百分百官方App正式上線<br />
            Android下載 👉🏻 https://goo.gl/at7vnf<br />
            iOS下載 👉🏻 https://goo.gl/2rDSn6<br />
            <br />
            歡迎各位觀眾分享影片連結:)。<br />
          </n-ellipsis>
        </div>
        <div class="read-more">
          <a target="_blank" href="https://www.youtube.com/watch?v=4ulPaW56ITw">觀看全文</a>
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
import { NCard, NEllipsis, NGrid, NGi, NButton, NIcon, NDropdown, NTooltip } from 'naive-ui';
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
