<template>
  <div class="main">
    <MainPageHedline />
    <MainPageContainer />
  </div>
</template>

<script>
import MainPageHedline from './mainPageHedline.vue';
import MainPageContainer from './main-page-container/mainPageContainer.vue';

export default {
  name: 'MainPage',
  components: {
    MainPageHedline,
    MainPageContainer,
  },
};
</script>
