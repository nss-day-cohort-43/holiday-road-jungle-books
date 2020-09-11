import "../ParkList.js";
import { usePark } from "../ParkProvider.js";

// render the HTML onto the DOM
// import Parks.js
// listen for customEvent from ParkSelect
const eventHub = document.querySelector(".container");
//reders to page on load
const contentTarget = document.querySelector(".heroSection");
contentTarget.innerHTML = ` <div class="heroImageFull">
<img class="heroImage" src="../../imgs/defaultPark.jpg"  alt="nationalpark" >
</div>`;

eventHub.addEventListener("parkSelected", (event) => {
  render();
});

const render = () => {
  if (usePark().images.length !== 0) {
    contentTarget.innerHTML = ` <div class="externalImage">
    <img class="heroImage" src="${usePark().images[0].url}"  alt="${
      usePark().images[0].title
    }" >
      <div class="bottom-left"><p>${usePark().description}</p></div>
    </div>`;
  } else {
    //use default image
    document.querySelector(".heroImageFull").innerHTML += `
    <div class="centered"><h3>No Image of ${usePark().fullName}</h3></div>
    <div class="bottom-left"><p>${usePark().description}</p></div>
  `;
  }
};
