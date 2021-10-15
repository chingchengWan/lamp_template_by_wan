<template>
  <div class="right-sider">
    <n-collapse arrow-placement="right">
      <n-collapse-item name="1">
        <template #header>
          <div class="popular-words-block">
            <img class="icon" src="@/assets/trending.svg" />
            <p class="title">熱門關鍵字</p>
          </div>
        </template>
        <div class="popular-words" v-for="word in popularWordsList" :key="word.keyWord">
          <n-button text class="word"> {{ word.keyWord }} </n-button>
        </div>
      </n-collapse-item>
    </n-collapse>
    <n-collapse arrow-placement="right">
      <n-collapse-item name="1">
        <template #header>
          <div class="popular-words-block">
            <img class="icon" src="@/assets/filter.svg" />
            <p class="title">篩選器</p>
          </div>
        </template>
        <n-collapse arrow-placement="right" class="filter">
          <n-collapse-item name="1" title="上傳日期" style="margin-left: 40px">
            <div class="release-date-block">
              <div>
                <n-button text> 今天 </n-button>
              </div>
              <div>
                <n-button text> 本週 </n-button>
              </div>
              <div>
                <n-button text> 本月 </n-button>
              </div>
              <div>
                <n-button text> 今年 </n-button>
              </div>
            </div>
          </n-collapse-item>
          <n-collapse-item name="2" title="類型" style="margin-left: 40px">
            <div class="type-block">
              <n-button text> 影片 </n-button>
              <n-button text> 圖片 </n-button>
              <n-button text> 影片 </n-button>
              <n-button text> 純文字 </n-button>
            </div>
          </n-collapse-item>
        </n-collapse>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<script>
import { ref } from 'vue';
import { NCollapse, NCollapseItem, NButton } from 'naive-ui';

export default {
  components: {
    NCollapse,
    NCollapseItem,
    NButton,
  },
  setup() {
    const showModal = ref(false);
    const popularWordsList = ref();
    popularWordsList.value = [
      { keyWord: '新北加倍券', relatedKeyWord: ['新北市加倍券'] },
      { keyWord: '五倍券抽獎' },
      { keyWord: '地方創生券', relatedKeyWord: ['創生券'] },
      { keyWord: '城中城', relatedKeyWord: ['高雄城中城', '高雄火災', '城中城大樓'] },
      { keyWord: '衛爾康大火' },
    ];
    return {
      popularWordsList,
      showModal,
    };
  },
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
