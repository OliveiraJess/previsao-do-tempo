const city = document.querySelector('.city')
const date = document.querySelector('.date');
const mainImage = document.querySelector('.main_image');
const containerTemperature = document. querySelector('.main_temperature');
const temperature = document.querySelector('.temperature');
const temperatureUnit = document.querySelector('.temperature span')
const weather = document.querySelector('.weather');
const maxMin = document.querySelector('.max-min');
const searchInput = document.querySelector('search_input');
const searchButton = document.querySelector('.ssearch_button');

const api = {
    key: "ac4c350b9adb9fa9eb9271bc4b823c22",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}
