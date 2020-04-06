<template>
  <div class="weather-app">
    <h1 class="weather-location">
      {{ location.LocalizedName }}
    </h1>
    <div v-if="currentWeather === null">
      loading
    </div>
    <div v-else>
      <h4 class="weather-forecast">
        Current Temperature: {{ currentWeather.Temperature.Imperial.Value }}
        {{ currentWeather.Temperature.Imperial.Unit }}
      </h4>
      <h4 class="weather-condition">
        Current Condition: {{ currentWeather.WeatherText }}
      </h4>
      <img
        :src="getImgUrl(currentWeather.WeatherIcon)"
        :alt="currentWeather.WeatherText"
      />
    </div>
    <div v-if="forecast === null">
      loading
    </div>
    <div v-else class="weather-forecast--weekly">
      <!-- {{ item.Date }} -->
      <forecast-day
        v-for="item in forecast.DailyForecasts"
        :key="item.date"
        :forecast="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ForecastDay from "./ForecastDay";

export default {
  name: "WeatherForecast",
  data: function() {
    return {};
  },
  methods: {
    getImgUrl(pic) {
      let image = pic < 10 ? "0" + pic : pic;
      return "../assets/icons/" + image + "-s.png";
    }
  },
  computed: mapState(["location", "currentWeather", "forecast"]),
  created() {
    this.$store.dispatch("loadLocation");
    this.$store.dispatch("loadCurrentCondition");
    this.$store.dispatch("loadForecast");
  },
  components: {
    ForecastDay
  }
};
</script>

<style scoped>
.weather-app {
  width: 95vw;
  height: 95vh;
  margin: 20px auto;
}
.weather-forecast--weekly {
  display: flex;
}
</style>
