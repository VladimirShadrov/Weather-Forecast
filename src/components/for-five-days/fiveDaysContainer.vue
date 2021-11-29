<template>
  <div class="five-days__container">
    <FiveDaysHeader />
    <FiveDaysCommonData />
    <FiveDaysDetailsData />
  </div>
</template>

<script>
import FiveDaysHeader from './fiveDaysContainerHeader.vue';
import FiveDaysCommonData from './fiveDaysContainerCommon.vue';
import FiveDaysDetailsData from './fiveDaysContainerDetail.vue';

export default {
  name: 'FiveDaysContainer',

  components: {
    FiveDaysHeader,
    FiveDaysCommonData,
    FiveDaysDetailsData,
  },
};
</script>

<style lang="scss">
.five-days__container {
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}
</style>
