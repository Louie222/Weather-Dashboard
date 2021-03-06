//GIVEN a weather dashboard with form inputs
// I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
var searchInput = document.querySelector("#search-input")
var searchButton = document.querySelector("#search-button")

searchButton.addEventListener("click", getCurrentWeather)

function getCurrentWeather (){ 
    var cityToSearch = searchInput.value
    
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=3547747b883ab13f08e1002874f2b8fc&units=metric`)
  .then(response => response.json())
  .then(data => {
      console.log(data)

      var currentWeather = data 
        var temperature = document.querySelector("#temperature")
        temperature.textContent = data.main.temp

    });

}

//templateString