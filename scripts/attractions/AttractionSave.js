// Save selected attraction to itinerary preview DOM

import { AttractionsHTML } from './Attractions.js'

const contentTarget = document.querySelector(".attractionsSaved")
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if (event.target.class.contains("attractionSaveBtn")) {
        console.log('TEST')
    }
})