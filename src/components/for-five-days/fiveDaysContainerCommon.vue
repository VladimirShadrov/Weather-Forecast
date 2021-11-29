<template>
  <div class="five-days__common-container">
    <div class="five-days__list">
      <FiveDaysListItem />
    </div>
  </div>
</template>

<script>
import FiveDaysListItem from './fiveDaysListItem.vue';

export default {
  name: 'FiveDaysCommonData',
  components: {
    FiveDaysListItem,
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
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: -10px;
}
</style>
