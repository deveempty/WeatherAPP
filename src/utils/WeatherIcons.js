import React from "react";
import "../icons.css";

const WeatherIcons = (props) => {
  const { iconCode } = props;
  switch (iconCode) {
    case "01d":
      return (
        <div class="icon sunny">
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
      );
    case "01n":
      return (
        <div class="icon sunny">
          <div class="sun"></div>
        </div>
      );

    case "02d":
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
        </div>
      );
    case "02n":
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
        </div>
      );

    case "03d":
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      );
    case "03n":
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      );

    case "04d":
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      );
    case "04n":
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      );

    case "09d":
      return (
        <div class="icon rainy">
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
      );
    case "09n":
      return (
        <div class="icon rainy">
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
      );

    case "10d":
      return (
        <div class="icon sun-shower">
          <div class="cloud"></div>
          <div class="sun">
            <div class="rays"></div>
          </div>
          <div class="rain"></div>
        </div>
      );
    case "10n":
      return (
        <div class="icon sun-shower">
          <div class="cloud"></div>
          <div class="sun"></div>
          <div class="rain"></div>
        </div>
      );

    case "11d":
      return (
        <div class="icon thunder-storm">
          <div class="cloud"></div>
          <div class="lightning">
            <div class="bolt"></div>
            <div class="bolt"></div>
          </div>
        </div>
      );
    case "11n":
      return (
        <div class="icon thunder-storm">
          <div class="cloud"></div>
          <div class="lightning">
            <div class="bolt"></div>
            <div class="bolt"></div>
          </div>
        </div>
      );

    case "13d":
      return (
        <div class="icon flurries">
          <div class="cloud"></div>
          <div class="snow">
            <div class="flake"></div>
            <div class="flake"></div>
          </div>
        </div>
      );
    case "13n":
      return (
        <div class="icon flurries">
          <div class="cloud"></div>
          <div class="snow">
            <div class="flake"></div>
            <div class="flake"></div>
          </div>
        </div>
      );

    case "50d":
      return "https://img.icons8.com/dusk/64/000000/foggy-night-1.png";
    case "50n":
      return "https://img.icons8.com/dusk/64/000000/foggy-night-1.png";

    default:
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      );
  }
};

export default WeatherIcons;
