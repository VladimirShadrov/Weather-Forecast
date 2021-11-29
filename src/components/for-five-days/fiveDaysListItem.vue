<template>
  <div class="five-days__list-item">
    <div class="five-days__item-date">{{ weatherForDay.date }}</div>
    <div class="five-days__item-icon">
      <img :src="weatherForDay.icon" alt="weather" title="Weather icon" />
    </div>
    <div class="five-days__temperature">
      {{ weatherForDay.temperature }}&deg;C
    </div>
    <div class="five-days__item-weather">{{ weatherForDay.weather }}</div>
    <div class="five-days__item-humidity">
      Влажность: {{ weatherForDay.humidity }}%
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiveDaysListItem',

  props: {
    weatherForDay: {},
  },
};
</script>

<style lang="scss">
.five-days__list-item {
  padding: 10px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 7px;
  margin: 10px;
  width: calc(20% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.five-days__item-date {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
}

.five-days__item-icon {
  & > img {
    display: block;
    width: 100%;
  }
}

.five-days__temperature {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
}

.five-days__item-weather,
.five-days__item-humidity {
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
}

.five-days__item-weather {
  margin-bottom: 10px;
}

.five-days__item-humidity {
  margin-top: auto;
}
</style>
