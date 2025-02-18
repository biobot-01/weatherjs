const city = [
  {
    "name": "Cape Town",
    "state": "Western Cape",
    "lon": 18.417396,
    "lat": -33.928992,
  }
]

const weather = {
  "coord": {
    "lon": 18.4174,
    "lat": -33.929
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 16.14,
    "feels_like": 15.85,
    "temp_min": 15.39,
    "temp_max": 17.25,
    "pressure": 1019,
    "humidity": 78,
    "sea_level": 1019,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.45,
    "deg": 333,
    "gust": 1.79
  },
  "clouds": {
    "all": 37
  },
  "dt": 1719846683,
  "sys": {
    "type": 2,
    "id": 2073005,
    "country": "ZA",
    "sunrise": 1719813132,
    "sunset": 1719848879
  },
  "timezone": 7200,
  "id": 3369157,
  "name": "Cape Town",
  "cod": 200
};

export async function getCityData() {
  return new Promise(resolve => setTimeout(resolve(city), 3000));
}

export async function getWeatherData() {
  return new Promise(resolve => setTimeout(resolve(weather), 3000));
}
