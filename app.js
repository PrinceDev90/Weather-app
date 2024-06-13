const searchCity = document.querySelector(".inputBox");
const searchBtn = document.querySelector(".searchBtn");
const weatherImg = document.querySelector("#weatherImage");
const tamperature = document.querySelector(".temperature");
const descriptions = document.querySelector(".description");
const HumidityPer = document.querySelector(".HumidityPer");
const windSpeed = document.querySelector(".windSpeed");
const location_not_found = document.querySelector(".location_not_found");
const weather_body = document.querySelector(".weather_body");
const msg = document.querySelector("#msg");

const fetchweatherData = async (City) => {
  msg.innerText = "Fetching Data...";
  try {
    const APIKEY = `686565fb34ffcba51f0ac8a5c7a001f4`;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${APIKEY}`;
    const response = await fetch(URL);
    let data = await response.json();
    msg.innerText = "";
    weather_body.style.display = "flex";
    location_not_found.style.display = "none";
    tamperature.innerHTML = `${Math.round(
      data.main.temp - 273.15
    )}<sup>°C</sup>`;
    descriptions.innerHTML = `${data.weather[0].description}`;
    HumidityPer.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed}Km/h`;
    console.log(data.weather[0].main);
    switch (data.weather[0].main) {
      case "Clouds": {
        weatherImg.src = "cloud.png";
        break;
      }
      case "Clear": {
        weatherImg.src = "clear.png";
        break;
      }
      case "Mist": {
        weatherImg.src = "mist.png";
        break;
      }
      case "Rain": {
        weatherImg.src = "rain.png";
        break;
      }
      case "Snow": {
        weatherImg.src = "snow.png";
        break;
      }
    }
  } catch (err) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    msg.innerText = "";
  }
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cityName = searchCity.value;
  fetchweatherData(cityName);
});
