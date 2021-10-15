<template>
  <div class="index">
    <NewsCard />
    <FacebookCard />
    <YoutubeCard />
  </div>
</template>

<script>
import NewsCard from '@/components/Card/News';
import FacebookCard from '@/components/Card/Facebook';
import YoutubeCard from '@/components/Card/Youtube';

export default {
  components: {
    NewsCard,
    FacebookCard,
    YoutubeCard,
  },
};
</script>
