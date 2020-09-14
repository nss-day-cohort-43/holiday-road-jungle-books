// render the HTML/Image onto the DOM
// listen for customEvent from ParkSelect
import "../ParkList.js";
import { usePark } from "../ParkProvider.js";
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".heroSection");

eventHub.addEventListener("parkSelected", (event) => {
  render();
});

const render = () => {
  if (usePark().images.length !== 0) {
    contentTarget.innerHTML = ` <div class="heroImageFull">
    <img class="heroImage" src="${usePark().images[0].url}"  alt="${
      usePark().images[0].altText
    }">
      <div class="bottom-left"><p>${usePark().images[0].caption}</p></div>
    </div>`;
  } else {
    //use default background-image and add text
    contentTarget.innerHTML += `<div class="centered"><h2>No Image of ${
      usePark().fullName
    }</h2></div>`;
  }
};
