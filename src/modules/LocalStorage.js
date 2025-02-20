/**
 * LocalStorage module
 * Module for storing data to the user's client
 *
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 *
**/

export class LocalStorage {
  defaultCity = 'Cape Town';
  defaultCountry = 'ZA';

  constructor() {
    this.data = {
      city: {},
      weather: {}
    };
  }

  getData() {
    if (localStorage.getItem('data') === null) {
      this.data.city.name = this.defaultCity;
      this.data.city.state = this.defaultCountry;
    } else {
      this.data = JSON.parse(localStorage.getItem('data'));
    }

    return this.data;
  }

  setData(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  setLocation(data) {
    this.data.city = data;
  }

  setWeather(data) {
    this.data.weather = data;
  }
}
