// fetches info from weather API national weather service
// useWeather & getWeather export
// will probably need to take in a parameter from parks to say 'hey, show weather from THIS place'
import Settings from "../Settings.js";
let weatherArray = [];

export const useWeather = () => {
  return weatherArray;
};

const weatherAPI = (lat, lon, apiKey) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((parsedWheater) => {
      weatherArray = parsedWheater;
    });
};

//call the weather api with parameters
export const getWeather = () => {
  const lat = 30.4382559;
  const lon = -84.2807329;
  const apiKey = Settings.weatherKey;
  return weatherAPI(lat, lon, apiKey);
};
