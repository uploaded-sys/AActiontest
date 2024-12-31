import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <h1>Weather API FreeCodeCamp</h1>
      <div className="input-section">
        <label htmlFor="lat">Latitude:</label>
        <input type="text" id="lat" />
        <br />
        <label htmlFor="lon">Longitude:</label>
        <input type="text" id="lon" />
      </div>
      <button
        onClick={() => {
          setIsLoading(true);
          setError(null);
          let maindiv = document.getElementById("main");
          let lat = document.getElementById("lat").value;
          let lon = document.getElementById("lon").value;

          fetch(
            `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`
          )
            .then((response) => response.json())
            .then((data) => {
              const mainweatherdetails = data;
              const weatherdetails = data.main;
              const windetails = data.wind;
              maindiv.innerHTML = `
                <div class="weather-info fade-in">
                  <h1 id='heading'>Today's weather in ${
                    mainweatherdetails.name
                  }</h1>
                  <img src="${mainweatherdetails.weather[0].icon}"/>
                  <h3 id='today_temp'>Temperature: ${weatherdetails.temp.toFixed(
                    1
                  )}° C</h3>
                  <p id='additionalinfo'>Wind speed: ${windetails.speed.toFixed(
                    1
                  )} at ${Math.round(windetails.deg)}°</p>
                </div>
                <div class="details-grid">
                  <div class="details-section">
                    <h2>General Info</h2>
                    <p>Base: ${mainweatherdetails.base}</p>
                    <p>Visibility: ${mainweatherdetails.visibility}</p>
                    <p>Timezone: ${mainweatherdetails.timezone}</p>
                    <p>ID: ${mainweatherdetails.id}</p>
                    <p>Code: ${mainweatherdetails.cod}</p>
                  </div>
                  <div class="details-section">
                    <h2>Main Details</h2>
                    <p>Feels like: ${weatherdetails.feels_like.toFixed(
                      1
                    )}° C</p>
                    <p>Min temp: ${weatherdetails.temp_min.toFixed(1)}° C</p>
                    <p>Max temp: ${weatherdetails.temp_max.toFixed(1)}° C</p>
                    <p>Pressure: ${weatherdetails.pressure} hPa</p>
                    <p>Humidity: ${weatherdetails.humidity}%</p>
                  </div>
                  <div class="details-section">
                    <h2>Location Details</h2>
                    <p>Latitude: ${mainweatherdetails.coord.lat}</p>
                    <p>Longitude: ${mainweatherdetails.coord.lon}</p>
                    <p>Country: ${mainweatherdetails.sys.country}</p>
                  </div>
                </div>
              `;
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error);
              setError("Failed to fetch weather data. Please try again.");
              setIsLoading(false);
            });
        }}
      >
        Get Weather
      </button>
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            document.getElementById("lat").value = position.coords.latitude;
            document.getElementById("lon").value = position.coords.longitude;
          });
        }}
      >
        Get Current Location
      </button>
      {isLoading && <div className="loading"></div>}
      {error && <div className="error-message fade-in">{error}</div>}
      <div id="main"></div>
    </>
  );
}

export default App;
