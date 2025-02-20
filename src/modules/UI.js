/**
 * UI module
 * Module for displaying data in html
 *
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 *
**/

export class UI {
  // Display weather data in html UI
  showWeather(weather) {
    const box = document.getElementById('weather-box');
    const location = document.getElementById('location');
    const main = document.getElementById('main');
    const desc = document.getElementById('desc');
    const temp = document.getElementById('temp');
    const icon = document.getElementById('icon');
    const details = document.getElementById('details');
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');
    const maxTemp = document.getElementById('max-temp');
    const minTemp = document.getElementById('min-temp');
    const windDeg = document.getElementById('wind-deg');
    const windSpeed = document.getElementById('wind-speed');

    location.textContent = `${weather.name}, ${weather.sys.country}`;
    main.textContent = weather.weather[0].main;
    desc.textContent = weather.weather[0].description;
    temp.innerHTML = `${weather.main.temp}&#8451;`;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    icon.setAttribute('alt', weather.weather[0].description);
    humidity.innerHTML = `Relative Humidity: ${weather.main.humidity}&#65285;`;
    pressure.textContent = `Air Pressure: ${weather.main.pressure} hPa`;
    maxTemp.innerHTML = `Max Temp: ${weather.main.temp_max}&#8451;`;
    minTemp.innerHTML = `Min Temp: ${weather.main.temp_min}&#8451;`;
    windDeg.innerHTML = `Wind Degrees: ${weather.wind.deg}&#176;`;
    windSpeed.textContent = `Wind Speed: ${weather.wind.speed} meter/sec`;

    box.classList.remove('is-hidden');
  }
}
