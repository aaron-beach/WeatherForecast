<template>
  <div class="forecast">
    <h2>{{ formattedDate }}</h2>
    <h4>{{ lowTemperature }}</h4>
    <h4>{{ highTemperature }}</h4>
    <h4>
      Day:
      <h4 v-if="forecast.Day.HasPrecipitation">
        Expect potential
        {{ forecast.Day.PrecipitationIntensity }}
        {{ forecast.Day.PrecipitationType }}
      </h4>
      <img :src="getImgUrl(forecast.Day.Icon)" :alt="forecast.Day.IconPhrase" />
    </h4>
    <h4>
      Night:
      <h4 v-if="forecast.Night.HasPrecipitation">
        Expect potential
        {{ forecast.Night.PrecipitationIntensity }}
        {{ forecast.Night.PrecipitationType }}
      </h4>
      <img
        :src="getImgUrl(forecast.Night.Icon)"
        :alt="forecast.Night.IconPhrase"
      />
    </h4>
  </div>
</template>

<script>
export default {
  name: "ForecastDay",
  props: {
    forecast: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(pic) {
      let image = pic < 10 ? "0" + pic : pic;
      return "../assets/icons/" + image + "-s.png";
    }
  },
  computed: {
    formattedDate: function() {
      const rawDate = this.forecast.Date.substring(0, 10);
      let year = rawDate.substring(0, 4);
      let month = rawDate.substring(5, 7);
      let day = rawDate.substring(8);
      return `${month}-${day}-${year}`;
    },
    lowTemperature: function() {
      const lowTemp = this.forecast.Temperature.Minimum.Value;
      const unit = this.forecast.Temperature.Minimum.Unit;
      return `Forecasted low: ${lowTemp} ${unit}`;
    },
    highTemperature: function() {
      const lowTemp = this.forecast.Temperature.Maximum.Value;
      const unit = this.forecast.Temperature.Maximum.Unit;
      return `Forecasted high: ${lowTemp} ${unit}`;
    }
  }
};
</script>

<style>
.forecast {
  background-color: lightgray;
  width: 18vw;
  margin: 0 auto;
  /* height: 200px; */
}
</style>
