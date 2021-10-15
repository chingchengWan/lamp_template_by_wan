<template>
  <n-card size="huge" hoverable>
    <template #header>
      <div class="src-info">
        <img
          class="facebook-src-info"
          src="https://tvax1.sinaimg.cn/crop.51.57.402.402.1024/8b987560gy1ff6s3lqb86j20dw0dx3zd.jpg?KID=imgbed,tva&Expires=1634239840&ssig=xkWGTQ30lO"
        />
        <p class="facebook-user-name">
          城中城火災大進展！女涉重嫌「三次供詞不一樣」　疑亂丟餘燼燒到瓦斯罐
        </p>
      </div>
    </template>
    <template #header-extra>
      <n-tooltip trigger="hover">
        <template #trigger>
          <img class="popular-article" src="@/assets/fire.svg" />
        </template>
        熱門貼文
      </n-tooltip>
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
        <img class="article-img" src="https://cdn2.ettoday.net/images/5938/d5938489.jpg" />
      </n-gi>
      <n-gi :span="20">
        <div class="src-and-article">
          <div class="src-info">
            <img class="src-img" src="@/assets/news.svg" />
            <p class="article-info">ETtoday・2021年10月14日 22:34</p>
          </div>
          <n-ellipsis class="article" line-clamp="3" :tooltip="false">
            高雄鹽埕區城中城14日凌晨發生大火，目前已累計46死亡41受傷，檢警持續調查起火原因，初判起火點位在1樓一間小套房，一名黃姓女子坦承曾經在現場燒檀香，但否認縱火。由於女子拒絕夜間偵訊，檢警將於明天（15日）進行訊問。
            <br />
            檢警調查，起火點位在城中城一樓某骨董店後方的套房，套房郭姓男住戶與黃女為情侶關係，前一天深夜兩人在套房發生爭吵，郭男負氣騎機車離開，黃女則繼續和友人飲酒，過程中燒檀香驅蚊，黃女14日凌晨離開時，疑似把餘燼隨意亂扔到垃圾桶，進而引發火災，加上現場有數罐卡式瓦斯罐及易燃物，才導致火勢迅速蔓延。
            <br />
          </n-ellipsis>
          <div class="read-more">
            <a target="_blank" href="https://www.ettoday.net/news/20211014/2101560.htm">觀看全文</a>
            <n-icon class="read-more-icon">
              <angle-double-right />
            </n-icon>
          </div>
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
    NTooltip,
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
