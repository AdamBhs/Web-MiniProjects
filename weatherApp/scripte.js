
// Get the API 
const apiKey = "7daee2046b04c2ca279dd068f139db6f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"


// Geting data of the city
async function getDataCity(cityName) {
    const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);
    var data = await response.json();
    return data
}

async function checkWeather() {
    var cityInput = document.getElementById("cityInput").value;
    if (cityInput !== "") {
        var data = await getDataCity(cityInput);
        console.log(data);

        document.getElementById("cityName").innerText = cityInput;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
        document.getElementById("weather-icon").src = "images/" + data.weather[0].main +".png"
        document.getElementById("cityInput").value = "";
    }
}


