/*
event to save itinerary when button pressed
creates itinerary object & sends to json database
dispatches/invokes customEvent
*/

import {
  getItinerary,
  useItinerary,
  saveItinerary,
} from "./ItineraryProvider.js";
import { ItineraryList } from "./ItineraryList.js";
import { ItineraryHTML } from "./Itinerary.js";

const elementTarget = document.querySelector(".savedItinerary");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.classList.contains("itinerarySaveBtn")) {
    console.log("button clicked");
    const parkChosen = "PULL FROM PARK DROPDOWN MENU";
    const eateryChosen = "PULL FROM EATERY DROPDOWN MENU";
    const attractionChosen = "PULL FROM ATTRACTION DROPDOWN MENU";

    if (attractionChosen.value === "") {
      window.alert("please select an attraction");
    } else if (eateryChosen.value === "") {
      window.alert("please select an eatery");
    } else {
      const newItinerary = {
        park: parkChosen,
        eatery: eateryChosen,
        attraction: attractionChosen,
        date: Date.now(),
      };
      saveItinerary(newItinerary);
      elementTarget.innerHTML += ItineraryHTML(newItinerary);
    }
  }
});

export const savedItinerary = () => {
  getItinerary().then(() => {
    ItineraryList(useItinerary());
  });
};
