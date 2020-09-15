// Save selected attraction to itinerary preview DOM

import { AttractionsHTML } from './Attractions.js'
import { useMatchingAttraction } from './AttractionList.js'

const contentTarget = document.querySelector(".attractionsSaved")
const eventHub = document.querySelector(".container");

let attractionChosen = {};

export const AttractionSave = () => {
    eventHub.addEventListener("click", event => {
        if (event.target.classList.contains("attractionSaveBtn")) {
            let chosenAttraction = useMatchingAttraction()
            let attractionObject = chosenAttraction[0];
            attractionChosen = attractionObject;

            contentTarget.innerHTML += AttractionsHTML(attractionChosen)
        }
    })
}