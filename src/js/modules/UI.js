/**
 * UI module
 * Module for displaying data in html
 *
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 *
**/

import { convertTimestampToDate, getShortTime, getWindIcon, getWindDirectionFrom } from '../helpers';

export class UI {
  // Display weather data in html UI
  showWeather(data) {
    const city = data.location;
    const weather = data.weather;

    const location = document.getElementById('location');
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    const desc = document.getElementById('desc');
    const icon = document.getElementById('icon');
    const temp = document.getElementById('temp');
    const main = document.getElementById('main');
    const windSpeed = document.getElementById('wind-speed');
    const windIcon = document.getElementById('wind-icon');
    const windDeg = document.getElementById('wind-deg');
    const humidity = document.getElementById('humidity');
    const feelsLike = document.getElementById('feels-like');
    const visibility = document.getElementById('visibility');
    const pressure = document.getElementById('pressure');
    const tempMax = document.getElementById('temp-max');
    const tempMin = document.getElementById('temp-min');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    const dateTime = convertTimestampToDate(weather.dt);
    const sunriseTime = convertTimestampToDate(weather.sys.sunrise);
    const sunsetTime = convertTimestampToDate(weather.sys.sunset);

    location.textContent = `${city.name}, ${city.state}, ${weather.sys.country}`;

    time.textContent = getShortTime(dateTime);
    date.textContent = dateTime.toDateString();

    desc.setAttribute('title', weather.weather[0].description);
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    icon.setAttribute('alt', weather.weather[0].description);
    temp.textContent = Math.round(weather.main.temp);
    main.textContent = weather.weather[0].main;

    windSpeed.textContent = `${Math.round(weather.wind.speed * 3.6)} km/h`;
    windIcon.classList.add(getWindIcon(weather.wind.deg));
    windDeg.textContent = getWindDirectionFrom(weather.wind.deg);
    windDeg.parentElement.setAttribute('title', `Wind direction is from the ${getWindDirectionFrom(weather.wind.deg)}`);

    humidity.textContent = weather.main.humidity;
    feelsLike.textContent = Math.round(weather.main.feels_like);
    visibility.textContent = `${(weather.visibility / 1000)} km`
    pressure.textContent = `${weather.main.pressure} hPa`;
    tempMax.textContent = Math.round(weather.main.temp_max);
    tempMin.textContent = Math.round(weather.main.temp_min);

    sunrise.textContent = getShortTime(sunriseTime);
    sunset.textContent = getShortTime(sunsetTime);
  }
}
