import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    city: 'Москва',
    temperature: 0,
    weatherDescription: 'Пасмурно',
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
  },

  getters: {
    WEATHER_DATA(state) {
      return {
        sity: state.city,
        temperature: state.temperature,
        weatherDescription: state.weatherDescription,
        temperatureFeelsLike: state.temperatureFeelsLike,
        temperatureMin: state.temperatureMin,
        temperatureMax: state.temperatureMax,
        humidity: state.humidity,
        cloudy: state.cloudy,
        windDirection: state.windDirection,
        windSpeed: state.windSpeed,
        pressure: state.pressure,
        visibility: state.visibility,
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
  },

  mutations: {
    SET_WEATHER(state, data) {
      state.city = data.name;
      state.temperature = Math.floor(data.main.temp);
      state.weatherDescription = data.weather[0].description;
      state.temperatureFeelsLike = Math.floor(data.main.feels_like);
      state.temperatureMin = Math.floor(data.main.temp_min);
      state.temperatureMax = Math.floor(data.main.temp_max);
      state.humidity = Math.floor(data.main.humidity);
      state.cloudy = data.clouds.all;
      state.windDirection = Math.floor(data.wind.deg);
      state.windSpeed = Math.floor(data.wind.speed);
      state.pressure = Math.floor(data.main.pressure * 0.736);
      state.visibility = Math.floor(data.visibility / 1000);
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
      let hours = currentHours.slice(
        currentHours.length - 2,
        currentHours.length
      );

      minutes < 10 && minutes >= 0
        ? (state.currentMinutes = 0 + minutes)
        : (state.currentMinutes = minutes);
      hours < 10 && hours >= 0
        ? (state.currentHours = 0 + hours)
        : (state.currentHours = hours);
    },
  },

  actions: {
    GET_WEATHER(context, city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c18945d191bd6987791292cb17a65e5c&lang=ru&units=metric`
      )
        .then((response) => response.json())
        .then((weatherData) => context.commit('SET_WEATHER', weatherData));
    },
  },
});

export default store;
