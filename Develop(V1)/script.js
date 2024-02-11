var cityInput = document.querySelector(".city-input")
var searchButton = document.querySelector(".search-btn")
var locationButton = document.querySelector(".location-btn")
var currentWeatherDiv = document.querySelector(".current-weather")
var weatherCardsDiv = document.querySelector(".weather-cards")

var API_KEY = "2511bbd53378a380481fc0227749b46b" //My API key

// const getWeatherDetails = (cityName, lat, lon) => {
//     const WEATHER_API = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//     console.log(data)

//     fetch(WEATHER_API).then(res => res.json()).then(date => {
//         const uniqueForecastDays = []
//         const fiveDaysForecaset = data.list.filter(forecast = >{
//             const forecastDate = new Date(forecast.dt_txt).getDate();
            
//             if(!uniqueForecastDaysincludes(forecastDate)){
//                 return uniqueForecastDays.push(forecastDate)
//             }
//         })
//     }).catch(()=>{
        
//     })
// }


var getCityInfo =() => {
    var cityName = cityInput.value.trim(); // Get User to enter city name
    if(!cityName) return; // return if city name empty
    var GEOCODING_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`

    // GEOCODING_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=sunderland,uk&APPID=2511bbd53378a380481fc0227749b46b"

    // we can add other Key we have to get th same functionaility

    // console.log(cityName)

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data)
        const {name, lat, lon} = data[0]
        getWeatherDetails(name, lat, lon);

    }).catch(() => {
        // alert("Testing")
    })
}
// console.log(data)
// console.log(lat)
searchButton.addEventListener("click", getCityInfo)

// function getWeather() {
//     const apiKey = "2511bbd53378a380481fc0227749b46b"
//     const city = document.getElementById('city').value;

//     if(!city) {
//         alert ("Please Make a selection");
//         return;
//     }
// } other tesing 