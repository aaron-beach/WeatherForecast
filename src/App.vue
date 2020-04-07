<template>
  <div id="app">
    <forecast-weather />
    <!-- Todos:
    1. location call/search to API

    2. request forecast w/ location Display returned data for today

    3. Display forecast for week 
    
    wuRwHJmgM9WJLvKimHEPO5hIPhLVXOXg
    
    
    
     -->
  </div>
</template>

<script>
import ForecastWeather from "./components/ForecastWeather";

export default {
  name: "App",
  components: {
    ForecastWeather
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
