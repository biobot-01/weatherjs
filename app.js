// Init weather object
const weather = new Weather('Cape Town', 'ZA');
// Init ui object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Get weather
function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.showWeather(results);
  })
  .catch(err => console.log(err));
}