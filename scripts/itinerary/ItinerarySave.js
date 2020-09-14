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
import { usePark } from "../parks/ParkProvider.js";
import { useMatchingEatery } from "../eateries/EateryList.js";
import { useMatchingAttraction } from "../attractions/AttractionList.js";

const elementTarget = document.querySelector(".savedItinerary");
const eventHub = document.querySelector(".container");
//event creates a new saved itinerary in local database
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.classList.contains("itinerarySaveBtn")) {
    let chosenPark = usePark();
    
    let chosenEatery = useMatchingEatery();
    let eateryObject = chosenEatery[0];
    const eateryChosen = eateryObject;

    
    let chosenAttraction = useMatchingAttraction();
    let attractionObject = chosenAttraction[0];
    const attractionChosen = attractionObject;

    if (attractionChosen === "") {
      window.alert("please select an attraction");
    } else if (eateryChosen === "") {
      window.alert("please select an eatery");
    } else {
      const newItinerary = {
        park: chosenPark,
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
