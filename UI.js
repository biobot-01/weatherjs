/**
 * UI module
 * Module for displaying data in html
 * 
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 * 
**/

class UI {
  constructor() {
    this.location = document.getElementById('wLocation');
    this.weatherMain = document.getElementById('wMain');
    this.weatherDesc = document.getElementById('wDesc');
    this.weatherIcon = document.getElementById('wIcon');
    this.details = document.getElementById('wDetails');
    this.humidity = document.getElementById('wHumidity');
    this.pressure = document.getElementById('wPressure');
    this.temp = document.getElementById('wTemp');
    this.maxTemp = document.getElementById('wMaxTemp');
    this.minTemp = document.getElementById('wMinTemp');
    this.windDeg = document.getElementById('wWindDeg');
    this.windSpeed = document.getElementById('wWindSpeed');
  }
  
  // Display weather data in html UI
  showWeather(weather) {
    this.location.textContent = weather.name;
    this.weatherMain.textContent = weather.weather[0].main;
    this.weatherDesc.textContent = weather.weather[0].description;
    this.weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Air Pressure: ${weather.main.pressure}`;
    this.temp.textContent = `Feels Like: ${weather.main.temp}`;
    this.maxTemp.textContent = `Max Temp: ${weather.main.temp_max}`;
    this.minTemp.textContent = `Min Temp: ${weather.main.temp_min}`;
    this.windDeg.textContent = `Wind Degrees: ${weather.wind.deg}`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed}`;
  }
}