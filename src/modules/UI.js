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
  constructor() {
    this.location = document.getElementById('wLocation');
    this.weatherMain = document.getElementById('wMain');
    this.weatherDesc = document.getElementById('wDesc');
    this.temp = document.getElementById('wTemp');
    this.weatherIcon = document.getElementById('wIcon');
    this.details = document.getElementById('wDetails');
    this.humidity = document.getElementById('wHumidity');
    this.pressure = document.getElementById('wPressure');
    this.maxTemp = document.getElementById('wMaxTemp');
    this.minTemp = document.getElementById('wMinTemp');
    this.windDeg = document.getElementById('wWindDeg');
    this.windSpeed = document.getElementById('wWindSpeed');
  }

  // Display weather data in html UI
  showWeather(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.weatherMain.textContent = weather.weather[0].main;
    this.weatherDesc.textContent = weather.weather[0].description;
    this.temp.innerHTML = `${weather.main.temp}&#8451;`;
    this.weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.weatherIcon.setAttribute('alt', weather.weather[0].description);
    this.humidity.innerHTML = `Relative Humidity: ${weather.main.humidity}&#65285;`;
    this.pressure.textContent = `Air Pressure: ${weather.main.pressure} hPa`;
    this.maxTemp.innerHTML = `Max Temp: ${weather.main.temp_max}&#8451;`;
    this.minTemp.innerHTML = `Min Temp: ${weather.main.temp_min}&#8451;`;
    this.windDeg.innerHTML = `Wind Degrees: ${weather.wind.deg}&#176;`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} meter/sec`;
  }
}
