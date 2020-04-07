<template>
  <div class="weather-app">
    <h1 class="weather-location">
      {{ location.LocalizedName }}
    </h1>
    <div class="location-input"></div>
    <section class="weather-forecast">
      <div v-if="currentWeather === null">
        loading
      </div>
      <div v-else>
        <current-weather :currentWeather="currentWeather" />
      </div>
    </section>
    <div v-if="forecast === null">
      loading
    </div>
    <div v-else class="weather-forecast--weekly">
      <weekly-weather
        v-for="item in forecast.DailyForecasts"
        :key="item.date"
        :forecast="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import WeeklyWeather from "./WeekWeather";
import CurrentWeather from "./CurrentWeather";

export default {
  name: "ForecastWeather",
  data: function() {
    return {};
  },
  computed: mapState(["location", "currentWeather", "forecast"]),
  created() {
    this.$store.dispatch("loadLocation");
    this.$store.dispatch("loadCurrentCondition");
    this.$store.dispatch("loadForecast");
  },
  components: {
    WeeklyWeather,
    CurrentWeather
  }
};
</script>

<style scoped>
.weather-app {
  display: grid;
  width: 95vw;
  height: 95vh;
  margin: auto;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    "location input input "
    "current current current"
    "forecast forecast forecast";
}
.weather-location {
  grid-area: location;
}
.location-input {
  grid-area: input;
  background-color: #ccc;
  width: 100%;
  height: 50%;
}
.weather-forecast {
  grid-area: current;
}
.weather-forecast--weekly {
  display: flex;
  grid-area: forecast;
}
</style>
