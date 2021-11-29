<template>
  <div class="five-days">
    <FiveDaysHeadline />
    <FiveDaysContainer />
  </div>
</template>

<script>
import FiveDaysHeadline from './fiveDaysHedline.vue';
import FiveDaysContainer from './fiveDaysContainer.vue';

export default {
  name: 'FiveDaysPage',

  components: {
    FiveDaysHeadline,
    FiveDaysContainer,
  },
};
</script>

<style lang="scss"></style>
