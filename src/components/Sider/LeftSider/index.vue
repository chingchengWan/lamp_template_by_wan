<template>
  <div>
    <n-button text>
      <img class="icon" src="@/assets/star.svg" />
      關注內容
    </n-button>
    <n-button text>
      <img class="community-icon" src="@/assets/facebook.svg" />
      Facebook
    </n-button>
    <n-button text>
      <img class="community-icon" src="@/assets/instagram.svg" />
      Instagram
    </n-button>
    <n-button text>
      <img class="community-icon" src="@/assets/youtube.svg" />
      YouTube
    </n-button>
    <n-button text>
      <img class="community-icon" src="@/assets/news.svg" />
      新聞
    </n-button>
  </div>
</template>
<script>
import { ref } from 'vue';
import { NButton } from 'naive-ui';

export default {
  components: {
    NButton,
  },
  setup() {
    const active = ref(false);
    const handleChange = (value) => {
      console.log(value);
    };
    return {
      active,
      handleChange,
    };
  },
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
