/* 
    listens for save event from ItinerarySave.js
    will get info from provider to render array of saved itineraries to aside
*/

import { getItinerary, useItinerary } from "./ItineraryProvider.js";
import { ItineraryHTML } from "./Itinerary.js";

let itineraryArray = [];
export const ItineraryList = () => {
  getItinerary().then(() => {
    itineraryArray = useItinerary();
    addItineraryToDom(itineraryArray);
  });
};

const addItineraryToDom = (anArrayOfItineraries) => {
  const domElement = document.querySelector(".savedItinerary");
  let HTMLRender = anArrayOfItineraries.map((singleItinerary) => {
    return ItineraryHTML(singleItinerary);
  });
  domElement.innerHTML = HTMLRender.join("");
};
