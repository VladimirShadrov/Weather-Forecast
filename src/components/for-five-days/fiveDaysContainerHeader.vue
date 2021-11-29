<template>
  <div class="five-days__header">
    <div class="five-days__header-city">{{ WEATHER_DATA.city }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FiveDaysHeader',

  computed: {
    ...mapGetters(['WEATHER_DATA']),
  },
};
</script>

<style lang="scss">
.five-days__header {
  padding-bottom: 20px;
  border-bottom: 2px solid #969696;
}

.five-days__header-city {
  font-size: 44px;
  line-height: 48px;
}

@media (max-width: 450px) {
  .five-days__header-city {
    font-size: 32px;
    line-height: 36px;
  }

  .five-days__header {
    padding-bottom: 10px;
  }
}
</style>
