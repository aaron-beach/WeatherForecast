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
    location: [
      {
        Version: 1,
        Key: "18822_PC",
        Type: "PostalCode",
        Rank: 65,
        LocalizedName: "Amherst",
        EnglishName: "Amherst",
        PrimaryPostalCode: "44001",
        Region: {
          ID: "NAM",
          LocalizedName: "North America",
          EnglishName: "North America"
        },
        Country: {
          ID: "US",
          LocalizedName: "United States",
          EnglishName: "United States"
        },
        AdministrativeArea: {
          ID: "OH",
          LocalizedName: "Ohio",
          EnglishName: "Ohio",
          Level: 1,
          LocalizedType: "State",
          EnglishType: "State",
          CountryID: "US"
        },
        TimeZone: {
          Code: "EDT",
          Name: "America/New_York",
          GmtOffset: -4,
          IsDaylightSaving: true,
          NextOffsetChange: "2020-11-01T06:00:00Z"
        },
        GeoPosition: {
          Latitude: 41.372,
          Longitude: -82.261,
          Elevation: {
            Metric: {
              Value: 229,
              Unit: "m",
              UnitType: 5
            },
            Imperial: {
              Value: 751,
              Unit: "ft",
              UnitType: 0
            }
          }
        },
        IsAlias: false,
        ParentCity: {
          Key: "2238346",
          LocalizedName: "Amherst",
          EnglishName: "Amherst"
        },
        SupplementalAdminAreas: [
          {
            Level: 2,
            LocalizedName: "Lorain",
            EnglishName: "Lorain"
          }
        ],
        DataSets: [
          "AirQualityCurrentConditions",
          "AirQualityForecasts",
          "Alerts",
          "DailyAirQualityForecast",
          "DailyPollenForecast",
          "ForecastConfidence",
          "MinuteCast",
          "Radar"
        ]
      },
      {
        Version: 1,
        Key: "117948_PC",
        Type: "PostalCode",
        Rank: 500,
        LocalizedName: "Teruel",
        EnglishName: "Teruel",
        PrimaryPostalCode: "44001",
        Region: {
          ID: "EUR",
          LocalizedName: "Europe",
          EnglishName: "Europe"
        },
        Country: {
          ID: "ES",
          LocalizedName: "Spain",
          EnglishName: "Spain"
        },
        AdministrativeArea: {
          ID: "AR",
          LocalizedName: "Aragon",
          EnglishName: "Aragon",
          Level: 1,
          LocalizedType: "Autonomous Community",
          EnglishType: "Autonomous Community",
          CountryID: "ES"
        },
        TimeZone: {
          Code: "CEST",
          Name: "Europe/Madrid",
          GmtOffset: 2,
          IsDaylightSaving: true,
          NextOffsetChange: "2020-10-25T01:00:00Z"
        },
        GeoPosition: {
          Latitude: 40.34,
          Longitude: -1.108,
          Elevation: {
            Metric: {
              Value: 906,
              Unit: "m",
              UnitType: 5
            },
            Imperial: {
              Value: 2974,
              Unit: "ft",
              UnitType: 0
            }
          }
        },
        IsAlias: false,
        SupplementalAdminAreas: [],
        DataSets: [
          "AirQualityCurrentConditions",
          "AirQualityForecasts",
          "Alerts",
          "ForecastConfidence",
          "MinuteCast",
          "Radar"
        ]
      },
      {
        Version: 1,
        Key: "160227_PC",
        Type: "PostalCode",
        Rank: 500,
        LocalizedName: "Nantes",
        EnglishName: "Nantes",
        PrimaryPostalCode: "44001",
        Region: {
          ID: "EUR",
          LocalizedName: "Europe",
          EnglishName: "Europe"
        },
        Country: {
          ID: "FR",
          LocalizedName: "France",
          EnglishName: "France"
        },
        AdministrativeArea: {
          ID: "44",
          LocalizedName: "Loire-Atlantique",
          EnglishName: "Loire-Atlantique",
          Level: 1,
          LocalizedType: "Department",
          EnglishType: "Department",
          CountryID: "FR"
        },
        TimeZone: {
          Code: "CEST",
          Name: "Europe/Paris",
          GmtOffset: 2,
          IsDaylightSaving: true,
          NextOffsetChange: "2020-10-25T01:00:00Z"
        },
        GeoPosition: {
          Latitude: 47.217,
          Longitude: -1.553,
          Elevation: {
            Metric: {
              Value: 10,
              Unit: "m",
              UnitType: 5
            },
            Imperial: {
              Value: 32,
              Unit: "ft",
              UnitType: 0
            }
          }
        },
        IsAlias: false,
        SupplementalAdminAreas: [],
        DataSets: [
          "AirQualityCurrentConditions",
          "AirQualityForecasts",
          "Alerts",
          "ForecastConfidence",
          "MinuteCast",
          "Radar"
        ]
      }
    ],
    forecast: {
      Headline: {
        EffectiveDate: "2020-04-06T20:00:00-04:00",
        EffectiveEpochDate: 1586217600,
        Severity: 5,
        Text: "Expect showers this evening",
        Category: "rain",
        EndDate: "2020-04-07T02:00:00-04:00",
        EndEpochDate: 1586239200,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/extended-weather-forecast/18822_pc?lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?lang=en-us"
      },
      DailyForecasts: [
        {
          Date: "2020-04-06T07:00:00-04:00",
          EpochDate: 1586170800,
          Temperature: {
            Minimum: {
              Value: 44,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 57,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 4,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: false
          },
          Night: {
            Icon: 12,
            IconPhrase: "Showers",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Moderate"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=1&lang=en-us",
          Link:
            "http://www.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=1&lang=en-us"
        },
        {
          Date: "2020-04-07T07:00:00-04:00",
          EpochDate: 1586257200,
          Temperature: {
            Minimum: {
              Value: 52,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 63,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 12,
            IconPhrase: "Showers",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Light"
          },
          Night: {
            Icon: 15,
            IconPhrase: "Thunderstorms",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Moderate"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=2&lang=en-us",
          Link:
            "http://www.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=2&lang=en-us"
        },
        {
          Date: "2020-04-08T07:00:00-04:00",
          EpochDate: 1586343600,
          Temperature: {
            Minimum: {
              Value: 44,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 59,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 4,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: false
          },
          Night: {
            Icon: 18,
            IconPhrase: "Rain",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Light"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=3&lang=en-us",
          Link:
            "http://www.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=3&lang=en-us"
        },
        {
          Date: "2020-04-09T07:00:00-04:00",
          EpochDate: 1586430000,
          Temperature: {
            Minimum: {
              Value: 35,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 49,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 3,
            IconPhrase: "Partly sunny",
            HasPrecipitation: false
          },
          Night: {
            Icon: 36,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: true,
            PrecipitationType: "Snow",
            PrecipitationIntensity: "Light"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=4&lang=en-us",
          Link:
            "http://www.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=4&lang=en-us"
        },
        {
          Date: "2020-04-10T07:00:00-04:00",
          EpochDate: 1586516400,
          Temperature: {
            Minimum: {
              Value: 33,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 45,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 6,
            IconPhrase: "Mostly cloudy",
            HasPrecipitation: false
          },
          Night: {
            Icon: 36,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: false
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=5&lang=en-us",
          Link:
            "http://www.accuweather.com/en/us/amherst-oh/44001/daily-weather-forecast/18822_pc?day=5&lang=en-us"
        }
      ]
    },
    currentWeather: {
      LocalObservationDateTime: "2020-04-07T11:47:00-04:00",
      EpochTime: 1586274420,
      WeatherText: "Cloudy",
      WeatherIcon: 7,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 12.8,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 55,
          Unit: "F",
          UnitType: 18
        }
      },
      MobileLink:
        "http://m.accuweather.com/en/us/amherst-oh/44001/current-weather/18822_pc?lang=en-us",
      Link:
        "http://www.accuweather.com/en/us/amherst-oh/44001/current-weather/18822_pc?lang=en-us"
    },
    hourlyWeather: [
      {
        DateTime: "2020-04-07T12:00:00-04:00",
        EpochDateTime: 1586275200,
        WeatherIcon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
          Value: 57,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 48,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=12&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=12&lang=en-us"
      },
      {
        DateTime: "2020-04-07T13:00:00-04:00",
        EpochDateTime: 1586278800,
        WeatherIcon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
        IsDaylight: true,
        Temperature: {
          Value: 59,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 56,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=13&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=13&lang=en-us"
      },
      {
        DateTime: "2020-04-07T14:00:00-04:00",
        EpochDateTime: 1586282400,
        WeatherIcon: 15,
        IconPhrase: "Thunderstorms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        IsDaylight: true,
        Temperature: {
          Value: 60,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 61,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=14&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=14&lang=en-us"
      },
      {
        DateTime: "2020-04-07T15:00:00-04:00",
        EpochDateTime: 1586286000,
        WeatherIcon: 15,
        IconPhrase: "Thunderstorms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        IsDaylight: true,
        Temperature: {
          Value: 62,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 61,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=15&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=15&lang=en-us"
      },
      {
        DateTime: "2020-04-07T16:00:00-04:00",
        EpochDateTime: 1586289600,
        WeatherIcon: 15,
        IconPhrase: "Thunderstorms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        IsDaylight: true,
        Temperature: {
          Value: 63,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 61,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=16&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=16&lang=en-us"
      },
      {
        DateTime: "2020-04-07T17:00:00-04:00",
        EpochDateTime: 1586293200,
        WeatherIcon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
          Value: 64,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 40,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=17&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=17&lang=en-us"
      },
      {
        DateTime: "2020-04-07T18:00:00-04:00",
        EpochDateTime: 1586296800,
        WeatherIcon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
          Value: 65,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 34,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=18&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=18&lang=en-us"
      },
      {
        DateTime: "2020-04-07T19:00:00-04:00",
        EpochDateTime: 1586300400,
        WeatherIcon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
          Value: 64,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 34,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=19&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=19&lang=en-us"
      },
      {
        DateTime: "2020-04-07T20:00:00-04:00",
        EpochDateTime: 1586304000,
        WeatherIcon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
          Value: 62,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 34,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=20&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=20&lang=en-us"
      },
      {
        DateTime: "2020-04-07T21:00:00-04:00",
        EpochDateTime: 1586307600,
        WeatherIcon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
          Value: 60,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 34,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=21&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=21&lang=en-us"
      },
      {
        DateTime: "2020-04-07T22:00:00-04:00",
        EpochDateTime: 1586311200,
        WeatherIcon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
          Value: 60,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 40,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=22&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=22&lang=en-us"
      },
      {
        DateTime: "2020-04-07T23:00:00-04:00",
        EpochDateTime: 1586314800,
        WeatherIcon: 15,
        IconPhrase: "Thunderstorms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Heavy",
        IsDaylight: false,
        Temperature: {
          Value: 60,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 54,
        MobileLink:
          "http://m.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=23&lang=en-us",
        Link:
          "http://www.accuweather.com/en/us/amherst-oh/44001/hourly-weather-forecast/18822_pc?day=1&hbhhour=23&lang=en-us"
      }
    ]
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
    },
    SAVE_HOURLYWEATHER(state, hourlyWeather) {
      state.hourlyWeather = hourlyWeather;
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
    },
    loadHourly({ commit }) {
      Vue.axios
        .get(
          `forecasts/v1/hourly/12hour/18822_PC?apikey=wuRwHJmgM9WJLvKimHEPO5hIPhLVXOXg`
        )
        .then(result => {
          commit("SAVE_HOURLYWEATHER", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  }
});
