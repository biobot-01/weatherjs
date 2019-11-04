// Init weather object
const weather = new Weather('Cape Town', 'ZA');
// Init ui object
const ui = new UI();
// Init modal object
const modal = new Modal();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// Toggle the modal on DOM load
document.addEventListener('DOMContentLoaded', modal.toggle());

// Get weather
function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.showWeather(results);
  })
  .catch(err => console.log(err));
}