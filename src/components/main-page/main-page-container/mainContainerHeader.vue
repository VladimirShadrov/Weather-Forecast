<template>
  <div class="main-header">
    <div class="main-header__temperature">
      <div class="main-header__temperature-value">
        {{ WEATHER_DATA.temperature }}
      </div>
      <div class="main-header__degrees-icon"></div>
      <div class="main-header__temperature-celsius">C</div>
    </div>

    <div class="main-header__weather-value">
      {{ WEATHER_DATA.weatherDescription }}
    </div>

    <div class="main-header__weather-icon-container"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainPageContainerHeader',

  computed: {
    ...mapGetters(['WEATHER_DATA']),
  },
};
</script>

<style lang="scss">
.main-header {
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.main-header__temperature {
  display: flex;
  align-items: flex-start;
  width: 100px;
}

.main-header__temperature-value {
  font-size: 35px;
  line-height: 40px;
  margin-right: 6px;
}

.main-header__degrees-icon {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  margin-top: 4px;
  margin-right: 3px;
}

.main-header__temperature-celsius {
  font-size: 25px;
  line-height: 30px;
}

.main-header__weather-value {
  width: 120px;
  text-align: right;
}

.main-header__weather-icon-container {
  position: absolute;
  top: calc(-50% - 40px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
}

@media (max-width: 450px) {
  .main-header {
    flex-wrap: wrap;
  }

  .main-header__temperature {
    width: 100%;
    margin-bottom: 10px;
  }

  .main-header__weather-value {
    width: 100%;
    text-align: left;
  }

  .main-header__weather-icon-container {
    top: calc(-25% - 40px);
    left: calc(75% - 50px);
  }
}
</style>
