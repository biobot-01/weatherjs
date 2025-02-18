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
  defaultState = 'ZA';

  constructor() {
    this.data = {
      city: null,
      state: null,
      weather: {}
    };
  }

  getData() {
    if (localStorage.getItem('data') === null) {
      this.data.city = this.defaultCity;
      this.data.state = this.defaultState;
    } else {
      this.data = JSON.parse(localStorage.getItem('data'));
    }

    return this.data;
  }

  setData(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  setLocation(data) {
    this.data.city = data.name;
    this.data.state = data.state;
  }

  setWeather(data) {
    this.data.weather = data;
  }
}
