<template>
  <div class="current-weather">
    <h4 class="current-weather--text">{{ currentWeather.WeatherText }}</h4>
    <img
      :src="getImgUrl(currentWeather.WeatherIcon)"
      :alt="currentWeather.WeatherText"
      class="current-weather--image"
    />
    <h1 class="current-weather--temp">
      {{ currentWeather.Temperature.Imperial.Value }}
      {{ currentWeather.Temperature.Imperial.Unit }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "CurrentForecast",
  props: {
    currentWeather: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(pic) {
      let image = pic < 10 ? "0" + pic : pic;
      return "../assets/icons/" + image + "-s.png";
    }
  }
};
</script>

<style scoped>
.current-weather {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "text  text .      "
    "image temp details";
}
.current-weather--text {
  grid-area: text;
}
.current-weather--image {
  grid-area: image;
}
.current-weather--temp {
  grid-area: temp;
}
</style>
