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