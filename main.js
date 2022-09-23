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
const searchCountry = document.getElementById("country");

const api = {
    key: "ac4c350b9adb9fa9eb9271bc4b823c22",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
};

const apiCountry = {
    key: "fa76945be2f57ac51a24ae66e1b4c2d0",
    base: "http://api.countrylayer.com/v2/"
};

async function countries() {
    const response = await fetch(`${apiCountry.base}all?access_key=${apiCountry.key}`);

    return response.json();
};

// countries().then(data => console.log(data))

countries().then(data => {
    const countriesData = data
    const countriesResults = countriesData.map(country => country.alpha2Code)

    // console.log(countriesResults)

    countriesResults.forEach((country) => {
        option = new Option(country, country.toUpperCase());
        searchCountry.options[searchCountry.options.length] = option;
    });
})



searchButton.addEventListener('click', () => {
    searchResults(searchInput.value)
});

searchInput.addEventListener('keypress', enter);

function enter(event) {
    if (event.code === "Enter") {
        searchResults(searchInput.value)
    }
};

searchInput.addEventListener("keypress", justLetters);

function justLetters(event) {
    let keyCode = (event.keyCode ? event.keyCode : event.which);

    if (keyCode > 47 && keyCode < 58) {
        event.preventDefault();
    }
}

function searchResults(city) {
    fetch(`${api.base}weather?q=${city},${searchCountry.value}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
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
    // console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    date.innerText = dateBuilder(now);

    let iconName = weather.weather[0].icon;
    mainImage.innerHTML = `<img src="./img/icons/${iconName}.png">`;

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
};

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substr(1)
}


window.addEventListener('load', locationCurrent)

function locationCurrent() {

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(location);
    } else {
        alert(`Erro: ${error.message}`);
    }
    function location(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        coordResults(lat, long);
    }
};

function coordResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
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

containerTemperature.addEventListener('click', changeTemperature)

function changeTemperature() {
    let temperature_now = temperature.innerHTML

    if (temperatureUnit.innerHTML === "°c") {
        let fahrenheit = (temperature_now * (9 / 5)) + 32;
        temperatureUnit.innerHTML = "°f";
        temperature.innerHTML = Math.round(fahrenheit);
    }
    else {
        let celsius = (temperature_now - 32) / (9 / 5);
        temperatureUnit.innerHTML = "°c";
        temperature.innerHTML = Math.round(celsius);
    }
};

