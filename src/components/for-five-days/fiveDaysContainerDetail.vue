<template>
  <div class="five-days__detail-container">
    <div class="five-days__detail-left-bar">
      <div class="five-days__detail-date">
        {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].date }}
      </div>
      <div class="five-days__detail-temperature">
        {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].temperature }}&deg;C
      </div>
      <div class="five-days__detail-weather">
        {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].weather }}
      </div>
      <div class="five-days__detail-feels-like">
        Ощущается как: {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].fellsLike }}&deg;
      </div>
    </div>

    <div class="five-days__detail-right-bar">
      <div class="five-days__detail-wrapper">
        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Ветер</div>
          <div class="five-days__detail-item-value">
            {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].wind }} м/с
          </div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Влажность</div>
          <div class="five-days__detail-item-value">
            {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].humidity }}%
          </div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Видимость</div>
          <div class="five-days__detail-item-value">
            {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].visibility }} км
          </div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Давление</div>
          <div class="five-days__detail-item-value">
            {{ WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].pressure }} мм
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FiveDaysDetailsData',

  computed: {
    ...mapGetters(['WEATHER_FOR_FIVE_DAYS', 'SELECTED_DAY']),
  },
};
</script>

<style lang="scss">
.five-days__detail-container {
  display: flex;
  padding-top: 20px;
}

.five-days__detail-left-bar,
.five-days__detail-right-bar {
  width: 50%;
}

.five-days__detail-date {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 8px;
}

.five-days__detail-temperature {
  font-size: 88px;
  line-height: 96px;
  margin-bottom: 8px;
}

.five-days__detail-weather {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 25px;
  font-weight: 700;
}

.five-days__detail-feels-like {
  font-size: 20px;
  line-height: 24px;
}

.five-days__detail-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.five-days__detail-item {
  margin: 10px;
  width: calc(50% - 20px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 7px;
}

.five-days__detail-item-text {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
}

.five-days__detail-item-value {
  font-weight: 700;
}
</style>
