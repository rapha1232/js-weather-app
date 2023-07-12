const apiKey = "6952797e6e1f4fd7958134533231207";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var container = document.querySelector(".container");
  var helloContainer = document.querySelector(".helloContainer");
  var cityElement = document.querySelector(".city");
  var dateElement = document.querySelector(".date");
  var degreeElement = document.querySelector(".degree");
  var descriptionElement = document.querySelector(".description");
  var highElement = document.querySelector(".high .data");
  var lowElement = document.querySelector(".low .data");
  var sunriseElement = document.querySelector(".sunrise .data");
  var sunsetElement = document.querySelector(".sunset .data");
  var windElement = document.querySelector(".wind .data");
  var humidityElement = document.querySelector(".humidity .data");
  var weatherIcon = document.getElementById("weatherIcon");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    var cityNameInput = document.getElementById("cityIn");
    var q = cityNameInput.value;

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error?.code) {
          console.log(data)
          alert("Invalid City Name Entered");
        } else {
          const temperatureCelsius = data.current.temp_c;
          const city = data.location.name;
          const date = new Date(data.location.localtime).toLocaleString();
          const high = data.forecast.forecastday[0].day.maxtemp_c;
          const low = data.forecast.forecastday[0].day.mintemp_c;
          const sunrise = data.forecast.forecastday[0].astro.sunrise;
          const sunset = data.forecast.forecastday[0].astro.sunset;
          const wind = data.current.wind_kph;
          const humidity = data.current.humidity;
          var iconUrl = data.current.condition.icon;

          var regex = /(day|night)\/\d+\.png$/;
          var matches = iconUrl.match(regex);
          var iconPath = "../media/" + matches[0];

          cityElement.textContent = city;
          dateElement.textContent = date;
          degreeElement.textContent = `${temperatureCelsius}°C`;
          descriptionElement.textContent = data.current.condition.text;
          highElement.textContent = `${high}°C`;
          lowElement.textContent = `${low}°C`;
          sunriseElement.textContent = sunrise;
          sunsetElement.textContent = sunset;
          windElement.textContent = `${wind} km/h`;
          humidityElement.textContent = `${humidity}%`;
          weatherIcon.src = iconPath;

          helloContainer.style.display = "none";
          container.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    cityNameInput.value = "";
  });
});
