import React, { useState } from "react";
import WeatherIcons from "./utils/WeatherIcons";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_BASE = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${API_BASE}weather?q=${query}&units=imperial&APPID=${API_KEY}`)
        .then((rest) => rest.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 60
            ? "app__warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <WeatherIcons iconCode={weather.weather[0].icon} />
              <div className="weather">{weather.weather[0].main}</div>

              <div className="weather">
                {weather.weather[0].main.feels_like}
              </div>
              <ul className="weather__components">
                <li>Feels like: {Math.round(weather.main.feels_like)}°F </li>
                <li>Humidity: {weather.main.humidity} </li>
              </ul>
              <br />
              <div className="temp">{Math.round(weather.main.temp)}°F</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
