<template>
  <div id="app">
    <div class="container">
      <MainPage />
    </div>
    <ModalError v-if="MODAL_ERROR_DATA.modalExist" />
  </div>
</template>

<script>
import MainPage from './components/main-page/mainPage.vue';
import ModalError from './components/modalError.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
    MainPage,
    ModalError,
  },

  methods: {
    ...mapActions(['GET_WEATHER']),
  },

  computed: {
    ...mapGetters(['WEATHER_DATA', 'MODAL_ERROR_DATA']),
  },

  mounted() {
    this.GET_WEATHER(this.WEATHER_DATA.city);
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
  background: url('./assets/images/winter.jpg') center / cover no-repeat;
  min-height: 100vh;
}
</style>
