<template>
  <div class="main">
    <MainPageHedline />
    <MainPageContainer />
    <router-link class="router" :to="{ name: 'Details' }">
      <button class="main-button">
        Смотреть на несколько дней
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5515 4.39995L8.57574 1.42421L9.42426 0.575684L13.8485 4.99995L9.42426 9.42421L8.57574 8.57568L11.5515 5.59995H0V4.39995H11.5515Z"
            fill="white"
          />
        </svg>
      </button>
    </router-link>
  </div>
</template>

<script>
import MainPageHedline from './mainPageHedline.vue';
import MainPageContainer from './main-page-container/mainPageContainer.vue';

export default {
  name: 'MainPage',
  components: {
    MainPageHedline,
    MainPageContainer,
  },
};
</script>

<style lang="scss">
.main-button {
  width: 270px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  display: block;
  margin: 0 auto;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
}
</style>
