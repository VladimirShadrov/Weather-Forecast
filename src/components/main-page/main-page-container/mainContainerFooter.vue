<template>
  <div class="main-footer">
    <div class="main-footer__wrapper">
      <div class="main-footer__item">
        <div class="main-footer__item-icon main-footer__item-icon-drops"></div>
        <div class="main-footer__item-parameter">Влажность</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.humidity }} %
        </div>
      </div>

      <div class="main-footer__item">
        <div
          class="main-footer__item-icon main-footer__item-icon-umbrella"
        ></div>
        <div class="main-footer__item-parameter">Облачность</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.cloudy }} %
        </div>
      </div>

      <div class="main-footer__wind-wrapper">
        <div class="main-footer__wind-title">Ветер</div>
        <div class="main-footer__wind">
          <div class="main-footer__wind-container">
            <div class="main-footer__wind-speed">
              {{ WEATHER_DATA.windSpeed }}
            </div>
            <div class="main-footer__wind-speed-text">м/с</div>
            <div class="main-footer__wind-north">N</div>
            <div class="main-footer__wind-east">E</div>
            <div class="main-footer__wind-south">S</div>
            <div class="main-footer__wind-west">W</div>
            <div
              class="main-footer__wind-cursor"
              :style="WEATHER_DATA.windDirection"
            ></div>
          </div>
        </div>
      </div>

      <div class="main-footer__item">
        <div class="main-footer__item-icon"></div>
        <div class="main-footer__item-parameter">Давление</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.pressure }} мм
        </div>
      </div>

      <div class="main-footer__item">
        <div class="main-footer__item-icon main-footer__item-icon-eye"></div>
        <div class="main-footer__item-parameter">Видимость</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.visibility }} км
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainPageContainerFooter',

  computed: {
    ...mapGetters(['WEATHER_DATA']),
  },
};
</script>

<style lang="scss">
.main-footer {
  padding-top: 15px;
}

.main-footer__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-footer__item {
  width: 15%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px 0;

  & > .main-footer__item-icon,
  & > .main-footer__item-parameter,
  & > .main-footer__item-parameter-value {
    text-align: center;
    margin-bottom: 5px;
  }
}

.main-footer__wind {
  width: 150px;
  height: 150px;
  border: 5px solid rgba(139, 0, 255, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-footer__wind-title {
  text-align: center;
  margin-bottom: 8px;
}

.main-footer__wind-container {
  display: block;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  position: relative;
}

.main-footer__wind-speed,
.main-footer__wind-speed-text {
  text-align: center;
}

.main-footer__wind-speed {
  margin-top: 35px;
  font-size: 18px;
  line-height: 18px;
}

.main-footer__wind-north,
.main-footer__wind-east,
.main-footer__wind-south,
.main-footer__wind-west {
  position: absolute;
  line-height: 25px;
  z-index: 1;
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  text-align: center;
}

.main-footer__wind-north {
  top: -12px;
  left: calc(50% - 12.5px);
}

.main-footer__wind-south {
  bottom: -12px;
  left: calc(50% - 12.5px);
}

.main-footer__wind-east {
  right: -12px;
  top: calc(50% - 12.5px);
}

.main-footer__wind-west {
  left: -12px;
  top: calc(50% - 12.5px);
}

.main-footer__wind-cursor {
  width: 110px;
  height: 110px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 2.5s;

  &::before {
    content: '';
    position: absolute;
    top: -13px;
    left: calc(50% - 9px);
    border: 8px solid transparent;
    border-top: 14px solid red;
  }
}

.main-footer__item-icon-drops,
.main-footer__item-icon-umbrella,
.main-footer__item-icon-eye {
  & > svg {
    transform: scale(0.3);
  }
}

@media (max-width: 650px) {
  .main-footer__wrapper {
    flex-wrap: wrap;
    justify-content: center;
    margin: -10px;
  }

  .main-footer__item {
    width: calc(50% - 20px);
    margin: 10px;
  }

  .main-footer__wind-wrapper {
    order: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
