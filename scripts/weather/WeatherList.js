// render the HTML onto the DOM
// import Weather.js
// listen for customEvent from ParkSelect
import { Weather } from "./Weather.js";
import { getWeather, useWeather } from "./WeatherProvider.js";
const eventHub = document.querySelector(".container");

const render = () => {
  let contentTarget = document.querySelector(".itineraryWeather");
  const weatherArray = useWeather().list;

  //filter out lowest temperture of the day
  const morningArray = weatherArray.filter((morning) => {
    return morning.dt_txt.includes("06:00:00");
  });

  //filter out highest temperture of the day
  const eveningArray = weatherArray.filter((evening) => {
    return evening.dt_txt.includes("18:00:00");
  });

  //add HTML to contentTarget
  contentTarget.innerHTML = "";
  for (let day = 0; day < morningArray.length; day++) {
    contentTarget.innerHTML += Weather(morningArray[day], eveningArray[day]);
  }
};

export const WeatherList = () => {
  eventHub.addEventListener("parkSelected", (event) => {
    if ("lat" in event.detail && "long" in event.detail) {
      getWeather(event.detail.lat, event.detail.long).then(() => {
        render();
      });
    }
  });
};
