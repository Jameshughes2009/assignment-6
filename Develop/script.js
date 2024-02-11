var cityInput = document.querySelector(".city-input")
var searchButton = document.querySelector(".search-btn")

var API_KEY = "2511bbd53378a380481fc0227749b46b" //My API key


var getCityInfo =() => {
    var cityName = cityInput.value.trim(); // Get User to enter city name
    if(!cityName) return; // return if city name empty
    var GEOCODING_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=${cityName},uk&APPID=2511bbd53378a380481fc0227749b46b"

    GEOCODING_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=sunderland,uk&APPID=2511bbd53378a380481fc0227749b46b"

    // we can add other Key we have to get th same functionaility

    console.log(cityName)

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("Testing")
    })
}

searchButton.addEventListener("click", getCityInfo)

// function getWeather() {
//     const apiKey = "2511bbd53378a380481fc0227749b46b"
//     const city = document.getElementById('city').value;

//     if(!city) {
//         alert ("Please Make a selection");
//         return;
//     }
// } other tesing 