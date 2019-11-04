/**
 * Weather module
 * Module for making requests to OpenWeatherMap API
 * 
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 * 
 * // http://api.openweathermap.org/data/2.5/
 * // weather?q=${this.city}&appid=${this.apiKey}
 * 
**/

class Weather {
  constructor(city, country) {
    this.apiKey = 'f3d77a619733f9d51f9a87d4347a9ab4';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    // Search for city in API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);
    // Get city response in JSON
    const data = await response.json();
    // Return data
    return data;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}