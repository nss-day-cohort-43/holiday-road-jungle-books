// creates HTML to go on dom with the selected park's weather
export const Weather = (morningWeather, eveningWeather) => {
  return `
  <div class="weatherCard">
  <p class="dayParagraph">${new Date(morningWeather.dt * 1000).toLocaleString(
    "en-US",
    {
      weekday: "long",
    }
  )}</p>
   <img class="weatherImage" 
   src="http://openweathermap.org/img/wn/${morningWeather.weather[0].icon}.png" 
   alt="${morningWeather.weather[0].description}">
  <p class="tempParagraph">${convertToF(morningWeather.main.temp)}&deg/
  ${convertToF(eveningWeather.main.temp)}&deg</p>
</div>
`;
};

const convertToF = (kelvin) => {
  let celsius = kelvin - 273;
  return Math.floor(celsius * (9 / 5) + 32);
};

//Date explained
//https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript

//kelvin to fahrenheit equation
//https://gist.github.com/lordvaida/beb0487f86972b6ed9d056b80455a263
