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
      <span class="main-content__time-hour">69</span>
      <span
        class="main-content__time-separator"
        :class="{
          'main-content__time-separator-active': isTimerSeparatorVisible,
        }"
        >:</span
      >
      <span class="main-content__time-minutes">96</span>
    </div>

    <div class="main-content__date">
      <span class="main-content__date-day">Воскресенье,</span>
      <span class="main-content__date-date">96</span>
      <span class="main-content__date-month">ноябряяяяя</span>
      <span class="main-content__date-year">2021 г.</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainPageContainerContent',

  data() {
    return {
      timerInterval: '',
      isTimerSeparatorVisible: false,
    };
  },

  methods: {
    switchTimerSeparator() {
      this.timerInterval = setInterval(
        () => (this.isTimerSeparatorVisible = !this.isTimerSeparatorVisible),
        1000
      );
    },
  },

  computed: {
    ...mapGetters(['WEATHER_DATA']),
  },

  mounted() {
    this.switchTimerSeparator();
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
  width: 250px;
}

.main-content__headline-min,
.main-content__headline-max {
  width: 50%;
}

.main-content__headline-min {
  border-right: 1px solid #ffffff;
  text-align: center;
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
}

.main-content__time-separator {
  opacity: 0;
}

.main-content__time-separator-active {
  opacity: 1;
}

.main-content__date-day,
.main-content__date-date,
.main-content__date-month,
.main-content__date-year {
  display: inline-block;
}

.main-content__date-day {
  margin-right: 5px;
}

.main-content__date-date,
.main-content__date-month {
  margin-right: 4px;
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

  .main-content__headline-max {
    text-align: center;
  }

  .main-content__date {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .main-content__date-day {
    width: 100%;
    margin-right: 0;
    margin-bottom: 8px;
  }
}
</style>
