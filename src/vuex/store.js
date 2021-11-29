import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    city: 'Москва',
    temperature: 0,
    weatherDescription: 'Пасмурно',
    weatherIcon: '',
    temperatureFeelsLike: 0,
    temperatureMin: 0,
    temperatureMax: 0,
    humidity: 0,
    cloudy: 0,
    windDirection: 0,
    windSpeed: 0,
    pressure: 0,
    visibility: 0,
    currentDate: '',
    currentHours: '',
    currentMinutes: '',
    isModalExist: false,
    isModalErrorVisible: false,
    cityError: '',
    isDataLoading: false,
  },

  getters: {
    WEATHER_DATA(state) {
      return {
        city: state.city,
        temperature: state.temperature,
        weatherDescription: state.weatherDescription,
        weatherIcon: state.weatherIcon,
        temperatureFeelsLike: state.temperatureFeelsLike,
        temperatureMin: state.temperatureMin,
        temperatureMax: state.temperatureMax,
        humidity: state.humidity,
        cloudy: state.cloudy,
        windDirection: state.windDirection,
        windSpeed: state.windSpeed,
        pressure: state.pressure,
        visibility: state.visibility,
        sityError: state.cityError,
      };
    },

    CURRENT_DATE(state) {
      return state.currentDate;
    },

    CURRENT_TIME(state) {
      return {
        hours: state.currentHours,
        minutes: state.currentMinutes,
      };
    },

    MODAL_ERROR_DATA(state) {
      return {
        modalVisible: state.isModalErrorVisible,
        modalExist: state.isModalExist,
      };
    },

    DATA_LOADING(state) {
      return state.isDataLoading;
    },
  },

  mutations: {
    SET_WEATHER(state, data) {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const windDirection = `transform: rotate(${Math.round(
        data.wind.deg
      )}deg)`;

      state.city = data.name;
      state.temperature = Math.round(data.main.temp);
      state.weatherDescription = data.weather[0].description;
      state.weatherIcon = iconUrl;
      state.temperatureFeelsLike = Math.round(data.main.feels_like);
      state.temperatureMin = Math.round(data.main.temp_min);
      state.temperatureMax = Math.round(data.main.temp_max);
      state.humidity = Math.round(data.main.humidity);
      state.cloudy = data.clouds.all;
      state.windDirection = windDirection;
      state.windSpeed = Math.round(data.wind.speed);
      state.pressure = Math.round(data.main.pressure * 0.736);
      state.visibility = Math.round(data.visibility / 1000);
    },

    SET_CURRENT_DATE(state) {
      const date = new Date().toLocaleString('ru', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const currentDate = date[0].toUpperCase() + date.slice(1, date.length);
      state.currentDate = currentDate;
    },

    SET_CURRENT_TIME(state) {
      const currentMinutes = new Date().toLocaleDateString('ru', {
        minute: 'numeric',
      });
      const currentHours = new Date().toLocaleDateString('ru', {
        hour: 'numeric',
      });

      let minutes = currentMinutes.slice(
        currentMinutes.length - 2,
        currentMinutes.length
      );
      state.currentHours = currentHours.slice(
        currentHours.length - 2,
        currentHours.length
      );

      minutes < 10 && minutes >= 0
        ? (state.currentMinutes = 0 + minutes.trim())
        : (state.currentMinutes = minutes);
    },

    SHOW_MODAL_ERROR(state) {
      if (!state.isModalExist) {
        state.isModalExist = !state.isModalExist;

        setTimeout(
          () => (state.isModalErrorVisible = !state.isModalErrorVisible),
          10
        );
      } else {
        state.isModalErrorVisible = !state.isModalErrorVisible;

        setTimeout(() => (state.isModalExist = !state.isModalExist), 300);
      }
    },

    SET_ERROR_SITY(state, cityName) {
      state.cityError = cityName;
    },

    SHOW_LOADER(state) {
      state.isDataLoading = !state.isDataLoading;
    },
  },

  actions: {
    GET_WEATHER(context, city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c18945d191bd6987791292cb17a65e5c&lang=ru&units=metric`
      )
        .then((response) =>
          response.ok ? response.json() : Promise.reject(response)
        )
        .then((weatherData) => {
          setTimeout(() => context.commit('SET_WEATHER', weatherData), 300);

          if (this.state.isDataLoading) {
            this.state;
            setTimeout(() => context.commit('SHOW_LOADER'), 300);
          }
        })
        .catch(() => {
          context.commit('SHOW_MODAL_ERROR');
          context.commit('SET_ERROR_SITY', city);
          context.commit('SHOW_LOADER');
        });
    },

    GET_WEATHER_FOR_FIVE_DAYS() {
      fetch(
        'https://api.openweathermap.org/data/2.5/forecast?q=Москва&appid=c18945d191bd6987791292cb17a65e5c&lang=ru&units=metric'
      )
        .then((res) => res.json())
        .then((data) => {
          const weather = [];

          for (let i = 0; i <= data.list.length; i += 8) {
            if (data.list[i]) weather.push(data.list[i]);
          }

          return weather;
        })
        .then((data) => {
          const weatherForFiveDays = data.map((item) => {
            return {
              date: `${item.dt_txt.slice(8, 10)}.${item.dt_txt.slice(
                5,
                7
              )}.${item.dt_txt.slice(0, 4)}г.`,
              temperature: Math.round(item.main.temp),
              weather: item.weather[0].description,
              fellsLike: Math.round(item.main.feels_like),
              wind: Math.round(item.wind.speed),
              visibility: Math.round(item.visibility / 1000),
              humidity: item.main.humidity,
              pressure: Math.round(item.main.pressure * 0.736),
            };
          });

          console.log(weatherForFiveDays);
        });
    },
  },
});

export default store;
