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
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Cape Town';
    this.defaultCountry = 'ZA';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('country') === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}
