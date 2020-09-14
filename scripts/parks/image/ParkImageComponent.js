// render the HTML/Image onto the DOM
// listen for customEvent from ParkSelect
import { usePark } from "../ParkProvider.js";
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".heroSection");

//renders when page loads
contentTarget.innerHTML = ` <div class="heroImageFull">
<img class="heroImage hide-text" alt="default image" src="../../imgs/defaultPark.jpg">`;

eventHub.addEventListener("parkSelected", (event) => {
  render();
});

const render = () => {
  if (usePark().images.length !== 0) {
    contentTarget.innerHTML = ` <div class="heroImageFull">
    <img class="heroImage hide-text" alt="${
      usePark().images[0].altText
    }" src="${usePark().images[0].url}">
      <div class="bottom-left"><p>${usePark().images[0].caption}</p></div>
    </div>`;
  } else {
    //use default background-image and add text
    contentTarget.innerHTML = ` <div class="heroImageFull">
    <img class="heroImage hide-text" alt="default image" src="../../imgs/defaultPark.jpg">
    <div class="centered"><h2>No Image of ${usePark().fullName}</h2></div>
    </div>`;
  }
};
