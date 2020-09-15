// Save selected attraction to itinerary preview DOM

import { AttractionsHTML } from './Attractions.js'
import { useMatchingAttraction } from './AttractionList.js'

const contentTarget = document.querySelector(".attractionsSaved")
const eventHub = document.querySelector(".container");

export const AttractionSave = () => {
    eventHub.addEventListener("click", event => {
        if (event.target.classList.contains("attractionSaveBtn")) {
            let chosenAttraction = useMatchingAttraction()
            contentTarget.innerHTML += render(chosenAttraction)
        }
    })
}

const render = (attractionChosen) => {
    contentTarget.innerHTML = attractionChosen
        .map((attractionObj) => {
            return AttractionsHTML(attractionObj);
        })
        .join("");
};