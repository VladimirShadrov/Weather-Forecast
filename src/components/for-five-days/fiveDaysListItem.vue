<template>
  <div class="five-days__list-item">
    <div class="five-days__item-date">30.11.2021г.</div>
    <div class="five-days__item-icon"></div>
    <div class="five-days__temperature">-15&deg;C</div>
    <div class="five-days__item-weather">Небольшой дождь</div>
    <div class="five-days__item-humidity">Влажность: 98%</div>
  </div>
</template>

<script>
export default {
  name: 'FiveDaysListItem',
};
</script>

<style lang="scss">
.five-days__list-item {
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
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
  margin-bottom: 10px;
}

.five-days__item-icon {
  margin-bottom: 10px;
}

.five-days__temperature {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
}

.five-days__item-weather,
.five-days__item-humidity {
  text-align: center;
}

.five-days__item-weather {
  margin-bottom: 10px;
}
</style>
