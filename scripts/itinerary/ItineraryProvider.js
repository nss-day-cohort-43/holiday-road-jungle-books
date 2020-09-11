/* 
    hold on to array of saved Itineraries
    should useItinerary() that amkes a copy of the array of itineraries and returns an itinerary
    we'll want to add an itierary to database as well as GET an itinerary from the database
    creates cusom event for save button to use
*/

let savedItineraryArray = [];
export const getItinerary = () => {
  return fetch("http://localhost:8088/itineraries")
    .then((response) => response.json())
    .then((parsedItineraries) => {
      savedItineraryArray = parsedItineraries;
    });
};
export const useItinerary = () => {
  return savedItineraryArray.slice();
};

const eventHub = document.querySelector(".container");

const dispatchSaveEvent = () => {
  const itinerarySaved = new CustomEvent("itinerarySaved");
  eventHub.dispatchEvent(itinerarySaved);
};

export const saveItinerary = (itineraryObject) => {
  return fetch("http://localhost:8088/itineraries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itineraryObject),
  })
    .then(() => {
      return getItinerary();
    })
    .then(dispatchSaveEvent);
};
