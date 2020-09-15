// Save selected eatery to itinerary preview DOM

import { EateriesHTML } from './Eateries.js'
import { useMatchingEatery } from './EateryList.js'

const contentTarget = document.querySelector(".eateriesSaved")
const eventHub = document.querySelector(".container");

let eateryChosen = {};

export const EaterySave = () => {
    eventHub.addEventListener("click", event => {
        if (event.target.classList.contains("eaterySaveBtn")) {

            let chosenEatery = useMatchingEatery()
            let eateryObject = chosenEatery[0];

            eateryChosen = eateryObject;

            contentTarget.innerHTML += EateriesHTML(eateryChosen)
        }
    })
}