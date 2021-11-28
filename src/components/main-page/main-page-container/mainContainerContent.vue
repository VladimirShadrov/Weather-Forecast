<template>
  <div class="main-content">
    <div class="main-content__headline">
      <div class="main-content__headline-temperature">
        По ощущениям

        <span class="headline__temperature-value"
          >{{ WEATHER_DATA.temperatureFeelsLike }} &deg;</span
        >
      </div>

      <div class="main-content__headline-min-max">
        <div class="main-content__headline-min">
          Мин.
          <span class="main-content__headline-min-value"
            >{{ WEATHER_DATA.temperatureMin }} &deg;</span
          >
        </div>
        <div class="main-content__headline-max">
          Макс.
          <span class="main-content__headline-max-value"
            >{{ WEATHER_DATA.temperatureMax }} &deg;</span
          >
        </div>
      </div>
    </div>

    <div class="main-content__time">
      <span class="main-content__time-hour">{{ CURRENT_TIME.hours }}</span>
      <span
        class="main-content__time-separator"
        :class="{
          'main-content__time-separator-active': isTimerSeparatorVisible,
        }"
        >:</span
      >
      <span class="main-content__time-minutes">{{ CURRENT_TIME.minutes }}</span>
    </div>

    <div class="main-content__date">
      {{ CURRENT_DATE }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MainPageContainerContent',

  data() {
    return {
      timerInterval: '',
      isTimerSeparatorVisible: false,
    };
  },

  methods: {
    ...mapMutations(['SET_CURRENT_DATE', 'SET_CURRENT_TIME']),

    switchTimerSeparator() {
      this.timerInterval = setInterval(() => {
        this.isTimerSeparatorVisible = !this.isTimerSeparatorVisible;
        this.SET_CURRENT_TIME();
        this.SET_CURRENT_DATE();
      }, 1000);
    },
  },

  computed: {
    ...mapGetters(['WEATHER_DATA', 'CURRENT_DATE', 'CURRENT_TIME']),
  },

  mounted() {
    this.switchTimerSeparator();

    this.SET_CURRENT_DATE();
    this.SET_CURRENT_TIME();
  },

  unmounted() {
    clearInterval(this.timerInterval);
  },
};
</script>

<style lang="scss">
.main-content {
  padding: 15px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.main-content__headline {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.main-content__headline-temperature {
  width: 180px;
}

.main-content__headline-min-max {
  display: flex;
  width: 200px;
}

.main-content__headline-min,
.main-content__headline-max {
  width: 50%;
}

.main-content__headline-min {
  border-right: 1px solid #ffffff;
  text-align: left;
}

.main-content__headline-max {
  text-align: right;
}

.headline__temperature-value,
.main-content__headline-min-value,
.main-content__headline-max-value {
  font-size: 18px;
  line-height: 20px;
}

.main-content__time {
  text-align: center;
  margin-bottom: 8px;
}

.main-content__time-hour,
.main-content__time-separator,
.main-content__time-separator-active,
.main-content__time-minutes {
  font-size: 100px;
  line-height: 100px;
  transition: 0.3s;
  display: inline-block;
}

.main-content__time-hour,
.main-content__time-minutes {
  width: 120px;
}

.main-content__time-minutes {
  text-align: left;
}

.main-content__time-hour {
  text-align: right;
}

.main-content__date {
  text-align: center;
  line-height: 24px;
}

.main-content__time-separator {
  opacity: 0;
}

.main-content__time-separator-active {
  opacity: 1;
}

@media (max-width: 450px) {
  .main-content__headline {
    flex-wrap: wrap;
  }

  .main-content__headline-temperature {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }

  .main-content__headline-min-max {
    justify-content: center;
    width: 100%;
  }

  .main-content__headline-max,
  .main-content__headline-min {
    text-align: center;
  }
}
</style>
