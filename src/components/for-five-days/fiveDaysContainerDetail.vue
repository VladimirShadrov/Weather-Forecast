<template>
  <div
    class="five-days__detail-container"
    :class="{ 'block-transparent': IS_BLOCK_VISIBLE }"
  >
    <div class="five-days__detail-left-bar">
      <div class="five-days__detail-date">
        {{
          WEATHER_FOR_FIVE_DAYS.length
            ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].date
            : '00.00.0000г.'
        }}
      </div>
      <div class="five-days__detail-temperature">
        {{
          WEATHER_FOR_FIVE_DAYS.length
            ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].temperature
            : 0
        }}&deg;C
      </div>
      <div class="five-days__detail-weather">
        {{
          WEATHER_FOR_FIVE_DAYS.length
            ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].weather
            : 0
        }}
      </div>
      <div class="five-days__detail-feels-like">
        Ощущается как:
        {{
          WEATHER_FOR_FIVE_DAYS.length
            ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].fellsLike
            : 0
        }}&deg;
      </div>
    </div>

    <div class="five-days__detail-right-bar">
      <div class="five-days__detail-wrapper">
        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Ветер</div>
          <div class="five-days__detail-item-value">
            {{
              WEATHER_FOR_FIVE_DAYS.length
                ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].wind
                : 0
            }}
            м/с
          </div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Влажность</div>
          <div class="five-days__detail-item-value">
            {{
              WEATHER_FOR_FIVE_DAYS.length
                ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].humidity
                : 0
            }}%
          </div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Видимость</div>
          <div class="five-days__detail-item-value">
            {{
              WEATHER_FOR_FIVE_DAYS.length
                ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].visibility
                : 0
            }}
            км
          </div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Давление</div>
          <div class="five-days__detail-item-value">
            {{
              WEATHER_FOR_FIVE_DAYS.length
                ? WEATHER_FOR_FIVE_DAYS[SELECTED_DAY].pressure
                : 0
            }}
            мм
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
    ...mapGetters([
      'WEATHER_FOR_FIVE_DAYS',
      'SELECTED_DAY',
      'IS_BLOCK_VISIBLE',
    ]),
  },
};
</script>

<style lang="scss">
.five-days__detail-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  transition: 0.3s;
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

@media (max-width: 550px) {
  .five-days__detail-left-bar,
  .five-days__detail-right-bar {
    width: 100%;
  }

  .five-days__detail-left-bar {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
