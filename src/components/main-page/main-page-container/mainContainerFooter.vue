<template>
  <div class="main-footer">
    <div class="main-footer__wrapper">
      <div class="main-footer__item">
        <div class="main-footer__item-icon">
          <svg
            width="50"
            height="50"
            fill-rule="evenodd"
            fill="white"
            viewBox="0 0 18.852 30.038"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.426 0C7.854 4.401 0 15.406 0 20.612s4.22 9.426 9.426 9.426 9.426-4.22 9.426-9.426S11.206 4.412 9.426 0zm.006 6.853c-2.14 4.572-6.284 10.291-6.284 13.762a6.284 6.284 0 1 0 12.568 0c0-3.47-3.811-9.273-6.284-13.762z"
            />
          </svg>
        </div>
        <div class="main-footer__item-parameter">Влажность</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.humidity }} %
        </div>
      </div>

      <div class="main-footer__item">
        <div class="main-footer__item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 74 50"
            width="70px"
            height="50px"
          >
            <path
              fill="#ffffff"
              d="M56.963 41.4c1.553 1.1 3.45 1.758 5.495 1.758a9.5 9.5 0 0 0 9.5-9.5 9.45 9.45 0 0 0-7.229-9.2C63.524 16.294 56.456 10 47.918 10c-6.425 0-12.018 3.565-14.895 8.828a12.51 12.51 0 0 0-11.105 12.427c0 6.904 5.597 12.5 12.5 12.5a12.54 12.54 0 0 0 5.983-1.513A16.82 16.82 0 0 0 47.918 44c3.323 0 6.423-.953 9.045-2.6zm.332-4.698a13.45 13.45 0 0 1-9.376 3.788c-2.86 0-5.5-.9-7.667-2.422-1.55 1.343-3.603 2.165-5.85 2.165a9 9 0 0 1 0-18 8.99 8.99 0 0 1 7.346 3.8c.4.548 1.675 1.213 2.514.657.9-.686.996-1.748.443-2.548a12.53 12.53 0 0 0-7.686-5.13c2.465-3.35 6.43-5.523 10.9-5.523a13.5 13.5 0 0 1 13.229 10.789c-1.453.168-2.796.695-3.96 1.47-.612.4-1.34 1.872-.54 2.823.837.995 2.032.438 2.584.08a5.97 5.97 0 0 1 3.261-.962 6 6 0 1 1 0 12c-2.22 0-4.156-1.204-5.2-3l.002.003zm-35.8 5.547a12.54 12.54 0 0 1-5.983 1.497c-6.903 0-12.5-5.596-12.5-12.5a12.51 12.51 0 0 1 11.103-12.428C16.98 13.565 22.574 10 29 10c1.926 0 3.777.32 5.5.88a17.65 17.65 0 0 0-2.84 2.876A13.89 13.89 0 0 0 29 13.5c-4.47 0-8.434 2.173-10.9 5.523 1.366.3 2.652.803 3.778 1.477-.792.875-1.453 1.855-2 2.896a8.87 8.87 0 0 0-4.395-1.153 9 9 0 0 0 0 18 9.12 9.12 0 0 0 4.509-1.195l1.5 3.2-.007.01z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="main-footer__item-parameter">Облачность</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.cloudy }} %
        </div>
      </div>

      <div class="main-footer__wind-wrapper">
        <div class="main-footer__wind-title">Ветер</div>
        <div class="main-footer__wind">
          <div class="main-footer__wind-container">
            <div class="main-footer__wind-speed">
              {{ WEATHER_DATA.windSpeed }}
            </div>
            <div class="main-footer__wind-speed-text">м/с</div>
            <div class="main-footer__wind-north">N</div>
            <div class="main-footer__wind-east">E</div>
            <div class="main-footer__wind-south">S</div>
            <div class="main-footer__wind-west">W</div>
            <div
              class="main-footer__wind-cursor"
              :style="WEATHER_DATA.windDirection"
            ></div>
          </div>
        </div>
      </div>

      <div class="main-footer__item">
        <div class="main-footer__item-icon">
          <svg
            width="40"
            height="40"
            fill-rule="evenodd"
            fill="#ffffff"
            viewBox="0 0 26 47.6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.498 23.987A12.967 12.967 0 0 0 0 34.6c0 7.18 5.82 13 13 13s13-5.82 13-13c0-4.398-2.184-8.286-5.525-10.615l.013-16.49C20.5 3.358 17.142 0 12.999 0S5.5 3.358 5.5 7.495v16.492zm3.505 1.993A9.497 9.497 0 0 0 3.5 34.6a9.5 9.5 0 0 0 19 0 9.476 9.476 0 0 0-5.503-8.612L17 7.494a3.999 3.999 0 1 0-8 .017l.004 18.468zm5.2-16.34l-.498.003.002 8.834.495.003.002-.449h1.95v1.588h-1.95v-.43h-.5l.009 4.04h.494l-.003-.435h1.95v1.587h-1.95l-.002-.446h-.494l.005 4.7c3.147.344 5.586 2.883 5.586 5.964 0 3.314-2.82 6-6.3 6s-6.3-2.686-6.3-6c0-3.198 2.628-5.812 5.945-5.99l.005-20.765h1.059l-.006 1.096.503.002-.001-.436h1.95v1.587h-1.95l-.002-.453zm0 3.629h1.952v1.587h-1.951V13.27z"
            />
          </svg>
        </div>
        <div class="main-footer__item-parameter">Давление</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.pressure }} мм
        </div>
      </div>

      <div class="main-footer__item">
        <div class="main-footer__item-icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="40px"
            height="40px"
            viewBox="0 0 442.04 442.04"
            fill="white"
          >
            <path
              d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
                c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
                c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
                c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
                c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
                c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
                c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"
            />
            <path
              d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
                c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
                c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
                s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"
            />
            <path
              d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"
            />
          </svg>
        </div>
        <div class="main-footer__item-parameter">Видимость</div>
        <div class="main-footer__item-parameter-value">
          {{ WEATHER_DATA.visibility }} км
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainPageContainerFooter',

  computed: {
    ...mapGetters(['WEATHER_DATA']),
  },
};
</script>

<style lang="scss">
.main-footer {
  padding-top: 15px;
}

.main-footer__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-footer__item {
  width: 15%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px 0;

  & > .main-footer__item-icon,
  & > .main-footer__item-parameter,
  & > .main-footer__item-parameter-value {
    text-align: center;
    margin-bottom: 5px;
  }
}

.main-footer__wind {
  width: 150px;
  height: 150px;
  border: 5px solid rgba(139, 0, 255, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-footer__wind-title {
  text-align: center;
  margin-bottom: 8px;
}

.main-footer__wind-container {
  display: block;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  position: relative;
}

.main-footer__wind-speed,
.main-footer__wind-speed-text {
  text-align: center;
}

.main-footer__wind-speed {
  margin-top: 35px;
  font-size: 18px;
  line-height: 18px;
}

.main-footer__wind-north,
.main-footer__wind-east,
.main-footer__wind-south,
.main-footer__wind-west {
  position: absolute;
  line-height: 25px;
  z-index: 1;
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  text-align: center;
}

.main-footer__wind-north {
  top: -12px;
  left: calc(50% - 12.5px);
}

.main-footer__wind-south {
  bottom: -12px;
  left: calc(50% - 12.5px);
}

.main-footer__wind-east {
  right: -12px;
  top: calc(50% - 12.5px);
}

.main-footer__wind-west {
  left: -12px;
  top: calc(50% - 12.5px);
}

.main-footer__wind-cursor {
  width: 110px;
  height: 110px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 2.5s;

  &::before {
    content: '';
    position: absolute;
    top: -13px;
    left: calc(50% - 9px);
    border: 8px solid transparent;
    border-top: 14px solid red;
  }
}

@media (max-width: 650px) {
  .main-footer__wrapper {
    flex-wrap: wrap;
    justify-content: center;
    margin: -10px;
  }

  .main-footer__item {
    width: calc(50% - 20px);
    margin: 10px;
  }

  .main-footer__wind-wrapper {
    order: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
