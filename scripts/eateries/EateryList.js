// render the HTML onto the DOM
// import Eateries.js
// listen for customEvent from EaterySelect

import { getEateries, useEateries } from "./EateryProvider.js";
import { EateriesHTML, EaterModal } from "./Eateries.js";

const eventHub = document.querySelector(".container");
let matchingEatery;

eventHub.addEventListener("eateryChosen", (event) => {
  if ("eateryId" in event.detail) {
    const selectedEatery = event.detail.eateryId;

    const eateryArray = useEateries();
    matchingEatery = eateryArray.filter((currentEatery) => {
      return currentEatery.businessName === selectedEatery;
    });

    render(matchingEatery);

    EaterModal();
  }
});

const render = (eateryCollection) => {
  const contentTarget = document.querySelector(".eateriesDetails");
  contentTarget.innerHTML = eateryCollection
    .map((eateryObj) => {
      return EateriesHTML(eateryObj);
    })
    .join("");
};

export const EateryList = () => {
  getEateries();
};

export const useMatchingEatery = () => {
  return matchingEatery.slice();
};
