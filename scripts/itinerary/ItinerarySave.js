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

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.classList.contains("itinerarySaveBtn")) {
    let chosenPark = usePark();
    let chosenEatery = useMatchingEatery();
    let chosenAttraction = useMatchingAttraction();
    const parkChosen = chosenPark.fullName;
    const eateryChosen = chosenEatery[0].businessName;
    const attractionChosen = chosenAttraction[0].name;

    if (attractionChosen === "") {
      window.alert("please select an attraction");
    } else if (eateryChosen === "") {
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
