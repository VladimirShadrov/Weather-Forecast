<template>
  <div class="five-days__headline">
    <div class="five-days__bread-crumbs">
      <a href="#" class="five-days__crumb">
        Главная

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
          ></path>
        </svg>
      </a>
      <span class="five-days__crumb"> Прогноз на 5 дней </span>
    </div>

    <button class="five-days__back-button">На главную</button>
  </div>
</template>

<script>
export default {
  name: 'FiveDaysHeadline',
};
</script>

<style lang="scss">
.five-days__headline {
  padding: 20px;
  margin-bottom: 50px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.five-days__crumb {
  text-decoration: none;
  transition: 0.3s;

  &:first-child:hover {
    color: rgba(255, 255, 255, 0.7);
  }
}

.five-days__back-button {
  background: transparent;
  padding: 4px 16px;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
