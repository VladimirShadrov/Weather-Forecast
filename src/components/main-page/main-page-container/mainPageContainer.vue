<template>
  <div class="main-container">
    <MainPageContainerHeader />
    <MainPageContainerContent />
    <MainPageContainerFooter />
  </div>
</template>

<script>
import MainPageContainerHeader from './mainContainerHeader.vue';
import MainPageContainerContent from './mainContainerContent.vue';
import MainPageContainerFooter from './mainContainerFooter.vue';

export default {
  name: 'MainPageContainer',
  components: {
    MainPageContainerHeader,
    MainPageContainerContent,
    MainPageContainerFooter,
  },
};
</script>

<style lang="scss">
.main-container {
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  padding-bottom: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
}
</style>
