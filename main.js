const city = document.querySelector('.city')
const date = document.querySelector('.date');
const mainImage = document.querySelector('.main_image');
const containerTemperature = document.querySelector('.main_temperature');
const temperature = document.querySelector('.temperature');
const temperatureUnit = document.querySelector('.main_temperature span')
const weatherTemperature = document.querySelector('.weather');
const maxMin = document.querySelector('.max-min');
const searchInput = document.querySelector('.search_input');
const searchButton = document.querySelector('.search_button');

const api = {
    key: "ac4c350b9adb9fa9eb9271bc4b823c22",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

searchButton.addEventListener('click', () => {
    searchResults(searchInput.value)
});

searchInput.addEventListener('keypress', enter);

function enter(event) {
    if (event.code === "Enter") {
        searchResults(searchInput.value)
    }
};

function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (response.status == 200) {
               return response.json();
            }
            else if (response.status != 200) {
                throw new Error(`Algo deu errado: status ${response.status}`);
            }
        })
        .catch(error => {
            alert(error.message);
        })
        .then(response => {
            displayResults(response);
        })
};

function displayResults(weather) {
    console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    date.innerText = dateBuilder(now);

    let iconName = weather.weather[0].icon;
    mainImage.innerHTML = `<img src="./icons/${iconName}.png">`;

    let temp = `${Math.round(weather.main.temp)}`
    temperature.innerHTML = temp;
    temperatureUnit.innerHTML = `°c`;

    let weather_tempo = weather.weather[0].description;
    weatherTemperature.innerText = capitalizeFirstLetter(weather_tempo);

    maxMin.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
};

function dateBuilder(d) {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}