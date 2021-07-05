import React from "react";
/* Icons Imports */
import Day from "./icons/day.svg";
import Night from "./icons/night.svg";
import Rainy from "./icons/rainy.svg";
import CloudyDay from "./icons/cloudy-day.svg";
import CloudyNight from "./icons/cloudy-night.svg";
import Cloudy from "./icons/cloudy.svg";
import DayRainy from "./icons/day-rainy.svg";
import DaySnowy from "./icons/day-snowy.svg";
import Snowy from "./icons/snowy.svg";
import Thunder from "./icons/thunder.svg";
/*  ----------------------------------------- */
import "./WeatherIcons.css";

const WeatherIcons = (props) => {
  const { iconCode } = props;
  switch (iconCode) {
    case "01d":
      return <img className="icons" src={Day} alt="Day Icon"></img>;
    case "01n":
      return <img className="icons" src={Night} alt="Night Icon"></img>;

    case "02d":
      return <img className="icons" src={CloudyDay} alt="Cloudy Icon"></img>;
    case "02n":
      return <img className="icons" src={CloudyNight} alt="Cloudy Icon"></img>;

    case "03d":
      return <img className="icons" src={Cloudy} alt="Cloudy Icon"></img>;
    case "03n":
      return <img className="icons" src={Cloudy} alt="Cloudy Icon"></img>;

    case "04d":
      return <img className="icons" src={Cloudy} alt="Cloudy Icon"></img>;
    case "04n":
      return <img className="icons" src={Cloudy} alt="Cloudy Icon"></img>;

    case "09d":
      return <img className="icons" src={DayRainy} alt="Rainy  Icon"></img>;
    case "09n":
      return <img className="icons" src={Rainy} alt="Rainy  Icon"></img>;

    case "10d":
      return <img className="icons" src={Rainy} alt="Rainy  Icon"></img>;
    case "10n":
      return <img className="icons" src={Rainy} alt="Rainy  Icon"></img>;

    case "11d":
      return <img className="icons" src={Thunder} alt="Thunder  Icon"></img>;
    case "11n":
      return <img className="icons" src={Thunder} alt="Thunder  Icon"></img>;

    case "13d":
      return <img className="icons" src={DaySnowy} alt="Snow  Icon"></img>;
    case "13n":
      return <img className="icons" src={Snowy} alt="Snow  Icon"></img>;

    case "50d":
      return <img className="icons" src={Day} alt="Icon"></img>;
    case "50n":
      return <img className="icons" src={Night} alt="Icon"></img>;

    default:
      return <img className="icons" src={Cloudy} alt="Icon"></img>;
  }
};

export default WeatherIcons;
