/**
 * Weather module
 * Module for making requests to OpenWeatherMap API
 *
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 *
 * // http://api.openweathermap.org/geo/1.0/direct?q={city name},
 * // {state code},{country code}&limit={limit}&appid={API key}
 * // https://api.openweathermap.org/data/2.5/
 * // weather?lat={lat}&lon={lon}&appid={API key}
 *
**/

import { getCityData, getWeatherData } from '../data.js';

export class Weather {
  // apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  constructor(city, state) {
    this.location = {
      city,
      state,
      lon: null,
      lat: null
    };
  }

  // Fetch city from API
  async getCity() {
    try {
      console.log('Get city data');
      // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.location.city}&limit=1&appid=${this.apiKey}`);
      // const data = await response.json();
      // return data;
      const response = await getCityData();
      const data = response[0];
      console.log('City Data response: ', data);
      return data;
    } catch (error) {
      console.error('Error fetching city data: ', error);
    }
  }

  // Fetch weather from API
  async getWeather() {
    try {
      // Search for city in API
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.apiKey}`);
      // Get city response in JSON
      // const data = await response.json();
      // Return data
      // return data;
      const response = await getWeatherData();
      console.log('Weather Data response: ', response);
      return response;
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  }

  // Set location city and/or state
  setCity(value) {
    console.log('Set location city: ', value);
    // split string at comma
    if (value.includes(',')) {
      const [city, state] = value.trim().split(',');
      console.log('City: ', city, 'State: ', state);
      this.location.city = city;
      this.location.state = state;
    } else {
      this.location.city = value;
      this.location.state = null;
    }
  }

  // Change location coordinates
  setCoordinates(data) {
    this.location.lon = data.lon;
    this.location.lat = data.lat;
  }
}
