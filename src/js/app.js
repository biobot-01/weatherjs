// Module Imports
import { LocalStorage } from './modules/LocalStorage.js';
import { Modal } from './modules/Modal.js';
import { UI } from './modules/UI.js';
import { Weather } from './modules/Weather.js';
// Init storage object
const storage = new LocalStorage();
// Get stored data
const data = storage.getData();
console.log('data', {...data});
// Init weather object
const weather = new Weather(data.location.name, data.location.state);
console.log('weather', weather);
// Init UI object
const ui = new UI();
// Init modal object
const modal = new Modal();
// Get search city button
const searchButton = document.getElementById('search');

// Update city
async function updateCity() {
  await weather.getCity().then(data => {
    storage.setLocation(data);
  }).catch(err => console.log(err));
}

// Update weather
async function updateWeather() {
  await weather.getWeather().then(data => {
    storage.setWeather(data);
  }).catch(err => console.log(err));
}

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', async () => {
  await updateCity();
  await updateWeather();
  // Show weather on UI
  ui.showWeather(data);
  // Toggle the modal on DOM load
  modal.handleClickButtons();
});
// Update weather on click
searchButton.addEventListener('click', async () => {
  const city = document.getElementById('city').value;

  if (city.length > 1) {
    // Update location
    weather.setCity(city);
    await updateCity();
    await updateWeather();
    // Show weather on UI
    ui.showWeather(data);
    // Close modal
    modal.toggleElemStyles();
  }
});
// Update weather on keypress 'enter'
document.getElementById('the-form').addEventListener('submit', (e) => {
  e.preventDefault();
  searchButton.click();
});
