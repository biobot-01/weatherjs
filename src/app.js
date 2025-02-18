// Module Imports
import { LocalStorage } from './modules/LocalStorage.js';
import { Modal } from './modules/Modal.js';
import { UI } from './modules/UI.js';
import { Weather } from './modules/Weather.js';
// Init local storage
const storage = new LocalStorage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init ui object
const ui = new UI();
// Init modal object
const modal = new Modal();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// Toggle the modal on DOM load
document.addEventListener('DOMContentLoaded', modal.toggle());
// Change location event
document.getElementById('wSearchLocation').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);
  // Set location in local storage
  storage.setLocationData(city, country);
  // Get & display weather
  getWeather();
  // Close modal
  modal.close();
});

// Get weather
function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.showWeather(results);
  })
  .catch(err => console.log(err));
}
