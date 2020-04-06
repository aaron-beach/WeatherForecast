<template>
  <div>
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
    </div>
    <div v-if="forecast === null">
      loading
    </div>
    <div v-else>
      <div v-for="item in forecast.DailyForecasts" :key="item.date">
        {{ item.Date }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WeatherForecast",
  data: function() {
    return {};
  },
  computed: mapState(["location", "currentWeather", "forecast"]),
  created() {
    this.$store.dispatch("loadLocation");
    this.$store.dispatch("loadCurrentCondition");
    this.$store.dispatch("loadForecast");
  }
};
</script>

<style></style>
