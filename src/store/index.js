import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://dataservice.accuweather.com/";

export default new Vuex.Store({
  state: {
    userLocation: 44001,
    location: [],
    forecast: null,
    currentWeather: null
  },
  mutations: {
    SAVE_LOCATION(state, location) {
      state.location = location;
    },
    SAVE_FORECAST(state, forecast) {
      state.forecast = forecast;
    },
    SAVE_CURRENTWEATHER(state, currentWeather) {
      state.currentWeather = currentWeather;
    }
  },
  actions: {
    loadLocation({ commit }) {
      Vue.axios
        .get(
          `locations/v1/postalcodes/search?apikey=wuRwHJmgM9WJLvKimHEPO5hIPhLVXOXg&q=${this.state.userLocation}`
        )
        .then(result => {
          commit("SAVE_LOCATION", result.data[0]);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    loadCurrentCondition({ commit }) {
      Vue.axios
        .get(
          `currentconditions/v1/18822_PC/historical/24?apikey=wuRwHJmgM9WJLvKimHEPO5hIPhLVXOXg`
        )
        .then(result => {
          commit("SAVE_CURRENTWEATHER", result.data[0]);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    loadForecast({ commit }) {
      Vue.axios
        .get(
          `forecasts/v1/daily/5day/18822_PC?apikey=wuRwHJmgM9WJLvKimHEPO5hIPhLVXOXg`
        )
        .then(result => {
          commit("SAVE_FORECAST", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  }
});

