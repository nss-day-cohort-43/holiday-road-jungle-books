// render the HTML onto the DOM
// import Attractions.js
// listen for customEvent from AttractionSelect

import { getAttractions, useAttractions } from "./AttractionProvider.js";
import { AttractionsHTML, AttractionModal } from "./Attractions.js";

const eventHub = document.querySelector(".container");
let matchingAttraction;

eventHub.addEventListener("attractionChosen", (event) => {
  if ("attractionId" in event.detail) {
    const selectedAttraction = event.detail.attractionId;

    const attractionArray = useAttractions();
    matchingAttraction = attractionArray.filter((currentAttraction) => {
      return currentAttraction.name === selectedAttraction;
    });

    render(matchingAttraction);

    AttractionModal();
  }
});

const render = (attractionCollection) => {
  const contentTarget = document.querySelector(".attractionsDetails");
  contentTarget.innerHTML = attractionCollection
    .map((attractionObj) => {
      return AttractionsHTML(attractionObj);
    })
    .join("");
};

export const AttractionList = () => {
  getAttractions();
};

export const useMatchingAttraction = () => {
  return matchingAttraction.slice();
};
