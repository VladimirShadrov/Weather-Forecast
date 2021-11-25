<template>
  <div id="app">
    <div class="container">
      <MainPage />
    </div>
  </div>
</template>

<script>
import MainPage from './components/main-page/mainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 830px;
  margin: 0 auto;
  padding: 0 15px;
}

#app {
  background: url('./assets/images/cloudy.jpg') center / cover no-repeat;
  min-height: 100vh;
}
</style>
