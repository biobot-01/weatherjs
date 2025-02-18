// Module Imports
import { LocalStorage } from './modules/LocalStorage.js';
import { Modal } from './modules/Modal.js';
import { UI } from './modules/UI.js';
import { Weather } from './modules/Weather.js';
// Init local storage
const storage = new LocalStorage();
console.log('storage', storage);
// Get stored data
const data = storage.getData();
console.log('data', data);
// Init weather object
const weather = new Weather(data.city, data.state);
console.log('weather', weather);
// Init ui object
const ui = new UI();
// console.log('ui', ui);
// Init modal object
const modal = new Modal();
// console.log('modal', modal);
// Get search city button
const searchButton = document.getElementById('search');

// Get weather on DOM load
// document.addEventListener('DOMContentLoaded', getWeather);
document.addEventListener('DOMContentLoaded', function() {
  updateCity();
  updateWeather();
  // Toggle the modal on DOM load
  modal.handleClickButtons();
});
// Update weather on click
searchButton.addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  if (city.length > 1) {
    // Update location
    weather.setCity(city);
    updateCity();
    updateWeather();
    // Close modal
    modal.toggleElemStyles();
  }
});
// Update weather on keypress 'enter'
document.getElementById('the-form').addEventListener('submit', (e) => {
  e.preventDefault();
  searchButton.click();
});

// Update city
function updateCity() {
  weather.getCity().then(data => {
    weather.setCoordinates(data);
    storage.setLocation(data);
  }).catch(err => console.log(err));
}

// Update weather
function updateWeather() {
  weather.getWeather().then(data => {
    storage.setWeather(data);
    ui.showWeather(data);
  }).catch(err => console.log(err));
}
