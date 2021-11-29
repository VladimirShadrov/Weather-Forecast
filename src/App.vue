<template>
  <div id="app" :class="{ 'data-loading': DATA_LOADING }">
    <div class="container">
      <MainPage v-if="isVisible" />
      <FiveDaysPage />
    </div>
    <ModalError v-if="MODAL_ERROR_DATA.modalExist" />
  </div>
</template>

<script>
import MainPage from './components/main-page/mainPage.vue';
import ModalError from './components/modalError.vue';
import FiveDaysPage from './components/for-five-days/forecastFiveDays.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      isVisible: false,
    };
  },

  components: {
    MainPage,
    ModalError,
    FiveDaysPage,
  },

  methods: {
    ...mapActions(['GET_WEATHER', 'GET_WEATHER_FOR_FIVE_DAYS']),
  },

  computed: {
    ...mapGetters(['WEATHER_DATA', 'MODAL_ERROR_DATA', 'DATA_LOADING']),
  },

  mounted() {
    this.GET_WEATHER(this.WEATHER_DATA.city);
    this.GET_WEATHER_FOR_FIVE_DAYS();
  },
};
</script>

<style lang="scss">
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

.data-loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    background: url('./assets/images/preloader.svg');
    z-index: 2;
  }
}
</style>
