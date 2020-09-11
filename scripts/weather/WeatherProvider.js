// fetches info from weather API national weather service
// useWeather & getWeather export
// will probably need to take in a parameter from parks to say 'hey, show weather from THIS place'
import Settings from "../Settings.js";
let weatherArray = [];

export const useWeather = () => {
  return weatherArray;
};

export const getWeather = (lat, lon) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${Settings.weatherKey}`
  )
    .then((response) => response.json())
    .then((parsedWheater) => {
      weatherArray = parsedWheater;
    });
};
