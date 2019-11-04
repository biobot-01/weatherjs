// Init weather object
const weather = new Weather('Cape Town', 'Western Cape');

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