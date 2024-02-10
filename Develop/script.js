var cityInput = document.querySelector(".city-input")
var searchButton = document.querySelector(".search-btn")

var API_KEY = "608bd88476d2913911a7aa1be9fe2978" //My API key


var getCityInfo =() => {
    var cityName = cityInput.value.trim(); // Get User to enter city name
    if(!cityName) return; // return if city name empty
    var GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}'
    // console.log(cityName)

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("Dezz Nu")
    })
}

searchButton.addEventListener("click", getCityInfo)