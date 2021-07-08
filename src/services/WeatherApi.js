import { store } from "react-notifications-component";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_BASE = "https://api.openweathermap.org/data/2.5/";

const ApiData = async (query) => {
  try {
    const response = await fetch(
      `${API_BASE}weather?q=${query}&units=imperial&APPID=${API_KEY}`
    );
    let weatherData;
    if (!response.ok) {
      throw new Error("Error");
    } else {
      weatherData = await response.json();
      return weatherData;
    }
  } catch (error) {
    store.addNotification({
      title: "Oops!",
      message:
        "Make sure this is a real location or your search bar is not empty",
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate_animated", "animate_fadeIn"],
      animationOut: ["animate_animated", "animate_fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }
};

export default ApiData;
