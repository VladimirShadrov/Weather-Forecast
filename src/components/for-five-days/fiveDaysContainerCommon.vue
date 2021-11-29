<template>
  <div class="five-days__common-container">
    <div class="five-days__list">
      <FiveDaysListItem
        v-for="(day, index) in WEATHER_FOR_FIVE_DAYS"
        :key="index"
        :weatherForDay="day"
      />
    </div>
  </div>
</template>

<script>
import FiveDaysListItem from './fiveDaysListItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FiveDaysCommonData',
  components: {
    FiveDaysListItem,
  },

  computed: {
    ...mapGetters(['WEATHER_FOR_FIVE_DAYS']),
  },
};
</script>

<style lang="scss">
.five-days__common-container {
  padding: 20px 0;
  border-bottom: 2px solid #969696;
}

.five-days__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: -10px;
}

@media (max-width: 390px) {
  .five-days__list {
    margin: -5px;
  }

  .five-days__common-container {
    padding: 10px 0;
  }
}
</style>
