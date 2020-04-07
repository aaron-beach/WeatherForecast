<template>
  <div class="forecast">
    <section>
      <h2>
        {{ dayOfWeek }}
        <!-- <h6>{{ formattedDate }}</h6> -->
      </h2>
    </section>
    <section v-if="isDay">
      <!-- Day: -->
      <!-- <h4 v-if="forecast.Day.HasPrecipitation">
        Expect
        {{ forecast.Day.PrecipitationIntensity }}
        {{ forecast.Day.PrecipitationType }}
      </h4> -->
      <img
        :src="getImgUrl(forecast.Day.Icon)"
        :alt="forecast.Day.IconPhrase"
        class="forecast-icon"
      />
    </section>
    <section v-else>
      <!-- Night: -->
      <!-- <h4 v-if="forecast.Night.HasPrecipitation">
        Expect
        {{ forecast.Night.PrecipitationIntensity }}
        {{ forecast.Night.PrecipitationType }}
      </h4> -->
      <img
        :src="getImgUrl(forecast.Night.Icon)"
        :alt="forecast.Night.IconPhrase"
        class="forecast-icon"
      />
    </section>
    <section class="forecast-section">
      <!-- <h3>Forecasted low:</h3> -->
      <h4 class="forecast-temperature">{{ lowTemperature }}</h4>
      <!-- <h3>Forecasted high:</h3> -->
      <h4 class="forecast-temperature">{{ highTemperature }}</h4>
    </section>
  </div>
</template>

<script>
export default {
  name: "WeekWeather",
  props: {
    forecast: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      isDay: true
    };
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
    dateComparison: function() {
      let today = new Date();
      let day1 = today.getDay();
      // let forecastDate = new Date(this.forecast.Date);
      return day1;
    },
    dayOfWeek: function() {
      let day = new Date(this.forecast.Date);
      let options = { weekday: "short" };
      let weekday = new Intl.DateTimeFormat("en-US", options).format(day);
      return weekday;
    },
    lowTemperature: function() {
      const lowTemp = this.forecast.Temperature.Minimum.Value;
      const unit = this.forecast.Temperature.Minimum.Unit;
      return `${lowTemp} ${unit}`;
    },
    highTemperature: function() {
      const lowTemp = this.forecast.Temperature.Maximum.Value;
      const unit = this.forecast.Temperature.Maximum.Unit;
      return `${lowTemp} ${unit}`;
    }
  }
};
</script>

<style scoped>
.forecast {
  border: 1px lightgrey solid;
  width: 18vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 40px 1fr 30px;
  justify-items: center;
  align-items: center;
  /* height: 200px; */
}
.forecast-icon {
  /* background-color: #fff; */
  width: 10vw;
}
.forecast-section {
  width: 100%;
}
.forecast-temperature {
  display: inline;
  margin: 0 10px;
}
</style>
