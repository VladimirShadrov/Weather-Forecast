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
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

.container {
  width: 100%;
  max-width: 830px;
  margin: 0 auto;
  padding: 50px 8px;
}

#app {
  background: url('./assets/images/cloudy.jpg') center / cover no-repeat;
  min-height: 100vh;
}
</style>
