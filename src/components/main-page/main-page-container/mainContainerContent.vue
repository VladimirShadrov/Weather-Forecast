<template>
  <div class="main-content">
    <div class="main-content__headline">
      <div class="main-content__headline-temperature">
        По ощущениям

        <span class="headline__temperature-value">897 &deg;</span>
      </div>

      <div class="main-content__headline-min-max">
        <div class="main-content__headline-min">
          Мин.
          <span class="main-content__headline-min-value">-89.9 &deg;</span>
        </div>
        <div class="main-content__headline-max">
          Макс.
          <span class="main-content__headline-max-value">+98.6 &deg;</span>
        </div>
      </div>
    </div>

    <div class="main-content__time">
      <span class="main-content__time-hour">69</span>
      <span
        class="main-content__time-separator main-content__time-separator-active"
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
export default {
  name: 'MainPageContainerContent',
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
</style>
