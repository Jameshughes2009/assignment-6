var cityInput = document.querySelector(".city-input")
var searchButton = document.querySelector(".search-btn")
var locationButton = document.querySelector(".location-btn")
var currentWeatherDiv = document.querySelector(".current-weather")
var weatherCardsDiv = document.querySelector(".weather-cards")

var getCityInfo =() =>{
    var cityName = cityInput.value.trim()
    if(!cityName) return;
}
var API_KEY = "608bd88476d2913911a7aa1be9fe2978";//got from openweathermap.org

var createWeatherCard = (cityName, weatherItem, index) =>{
    if(index === 0) {
        console.log(cityName, weatherItem, index)
        return `<div class="details">
                    <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
                    <h6>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}C</h6?
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>${weatherItem.weather[0].description}</h6>
            </div>`;
    } else { // HTML for the other five day forecast card
        return `<li class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </li>`;
    }
}