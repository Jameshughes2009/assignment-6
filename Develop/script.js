var cityInput = document.querySelector(".city-input")
var searchButton = document.querySelector(".search-btn")


var getCityInfo =() => {
    var cityName = cityInput.value.trim(); // Get User to enter city name
    if(!cityName) return; // return if city name empty

    console.log(cityName)
}

searchButton.addEventListener("click", getCityInfo)