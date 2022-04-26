import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "ec69812db7fd144177914635cab17886";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-light">
                    Search
                  </button>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-outline-light ms-2">
                    Current
                  </button>
                </div>
              </div>
            </form>

            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
