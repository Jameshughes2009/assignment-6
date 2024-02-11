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
    } else {
        return `<li class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </li>`;
    }
}

// var getWeatherDetails = (cityName, latitude, logitude) => {
//     var WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

//     fetch (WEATHER_API_URL).then(response => response.json()).then(data => {
//         var uniqueForecastDays = [];
//         var fiveDaysForecast = data.list.filter(forecast => {
//             var forecastDate = new Date(forecast.dt_txt).getDate();
//             if (!uniqueForecastDays.includes(forecastDate)) {
//                 return uniqueForecastDays.push(forecastDate)
//             }
//         });

//         cityInput.value = "";
//         currentWeatherDiv.innerHTML = ""
//         weatherCardsDiv.innerHTML = "";

//         fiveDaysForecast.forEach((weatherItem, index) =>{
//             var html = createWeatherCard(cityName, weatherItem, index);
//             if (index === 0) {
//                 currentWeatherDiv.insertAdjacentHTML("beforeend", html);
//             }else{
//                 weatherCardsDiv.insertAdjacentHTML("beforeend", html)
//             }
//         });
//     }).catch(() =>{
//         alert("There has been a problem with fetching the weather forecast")
//     });
// }
var getWeatherDetails = (cityName, latitude, longitude) => {
    var WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
        // Filter the forecasts to get only one forecast per day
        var uniqueForecastDays = [];
        var fiveDaysForecast = data.list.filter(forecast => {
            var forecastDate = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecastDays.includes(forecastDate)) {
                return uniqueForecastDays.push(forecastDate);
            }
        });

        // Clearing previous weather data
        cityInput.value = "";
        currentWeatherDiv.innerHTML = "";
        weatherCardsDiv.innerHTML = "";

        // Creating weather cards and adding them to the DOM
        fiveDaysForecast.forEach((weatherItem, index) => {
            var html = createWeatherCard(cityName, weatherItem, index);
            if (index === 0) {
                currentWeatherDiv.insertAdjacentHTML("beforeend", html);
            } else {
                weatherCardsDiv.insertAdjacentHTML("beforeend", html);
            }
        });        
    }).catch(() => {
        alert("An error occurred while fetching the weather forecast!");
    });
}

var getCityCoordinates = () => {
    var cityName = cityInput.value.trim();
    if (cityName === "") return;
    var API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    
    // Get entered city coordinates (latitude, longitude, and name) from the API response
    fetch(API_URL).then(response => response.json()).then(data => {
        if (!data.length) return alert(`No coordinates found for ${cityName}`);
        var { lat, lon, name } = data[0];
        getWeatherDetails(name, lat, lon);
        console.log(data)// how to add console logs 
    }).catch(() => {
        alert("An error occurred while fetching the coordinates!");
    });
}

var getDeezCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            var { latitude, longitude } = position.coords; // Get coordinates of user location
            // Get city name from coordinates using reverse geocoding API
            console.log(position)
            const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
            fetch(API_URL).then(response => response.json()).then(data => {
                const { name } = data[0];
                getWeatherDetails(name, latitude, longitude);
            }).catch(() => {
                alert("An error occurred while fetching the city name!");
            });
        },
        error => { // Show alert if user denied the location permission
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied. Please reset location permission to grant access again.");
            } else {
                alert("Geolocation request error. Please reset location permission.");
            }
        });console.log(getDeezCoordinates)
}


locationButton.addEventListener("click", getDeezCoordinates);// remeber you can edit the yellow text
searchButton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());
searchButton.addEventListener("click", getCityInfo)

