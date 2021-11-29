<template>
  <div class="five-days__detail-container">
    <div class="five-days__detail-left-bar">
      <div class="five-days__detail-date">30.11.2021г.</div>
      <div class="five-days__detail-temperature">-15&deg;C</div>
      <div class="five-days__detail-weather">Пасмурно</div>
      <div class="five-days__detail-feels-like">Ощущается как: -25&deg;</div>
    </div>

    <div class="five-days__detail-right-bar">
      <div class="five-days__detail-wrapper">
        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Ветер</div>
          <div class="five-days__detail-item-value">5 м/с</div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Влажность</div>
          <div class="five-days__detail-item-value">98%</div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Видимость</div>
          <div class="five-days__detail-item-value">7 км</div>
        </div>

        <div class="five-days__detail-item">
          <div class="five-days__detail-item-text">Давление</div>
          <div class="five-days__detail-item-value">741 мм</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiveDaysDetailsData',
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
  background: rgba(255, 255, 255, 0.2);
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
