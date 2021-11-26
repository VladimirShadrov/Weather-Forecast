<template>
  <div class="headline">
    <div class="headline__city-container">
      <div class="headline__text">Погода в городе</div>
      <h2 class="headline__sity-title">{{ WEATHER_DATA.sity }}</h2>
    </div>

    <div class="headline__search-block">
      <input type="text" class="headline__input" placeholder="Введите город" />
      <span class="headline__input-border"></span>
      <button class="headline__search-button">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.50039 0.399994C2.23602 0.399994 0.400391 2.23563 0.400391 4.49999C0.400391 6.76436 2.23602 8.59999 4.50039 8.59999C5.41615 8.59999 6.26178 8.29977 6.94424 7.79237L8.57613 9.42426L9.42465 8.57573L7.79276 6.94384C8.30016 6.26139 8.60039 5.41575 8.60039 4.49999C8.60039 2.23563 6.76476 0.399994 4.50039 0.399994ZM1.60039 4.49999C1.60039 2.89837 2.89876 1.59999 4.50039 1.59999C6.10202 1.59999 7.40039 2.89837 7.40039 4.49999C7.40039 6.10162 6.10202 7.39999 4.50039 7.39999C2.89876 7.39999 1.60039 6.10162 1.60039 4.49999Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainPageHedline',

  computed: {
    ...mapGetters(['WEATHER_DATA']),
  },
};
</script>

<style lang="scss">
.headline {
  padding: 15px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}

.headline__text {
  margin-bottom: 8px;
}

.headline__sity-title {
  font-size: 40px;
  line-height: 44px;
  max-width: 400px;
}

.headline__search-block {
  width: 300px;
  position: relative;
  border: 1px solid #ffffff;
  border-radius: 10px;
}

.headline__input-border {
  content: '';
  position: absolute;
  top: 10px;
  right: 45px;
  height: 20px;
  width: 1px;
  background: #ffffff;
  opacity: 0;
}

.headline__input {
  width: 100%;
  padding: 8px 12px;
  padding-right: 50px;
  height: 40px;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  background: transparent;
  border: none;
  outline: none;

  &:focus ~ .headline__input-border {
    opacity: 1;
  }
}

.headline__search-button {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & > svg {
    transform: scale(1.5);
    pointer-events: none;
  }
}

@media (max-width: 750px) {
  .headline {
    flex-direction: column;
  }

  .headline__city-container {
    margin-bottom: 15px;
  }

  .headline__city-container,
  .headline__sity-title,
  .headline__search-block {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .headline {
    margin-bottom: 60px;
  }
}
</style>
