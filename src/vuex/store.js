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
