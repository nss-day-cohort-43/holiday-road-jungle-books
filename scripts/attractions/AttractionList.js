// render the HTML onto the DOM
// import Attractions.js
// listen for customEvent from AttractionSelect

import { getAttractions, useAttractions } from './AttractionProvider.js'
import { AttractionsHTML } from './Attractions.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionChosen", event => {
    if ("attractionId" in event.detail) {

        const selectedAttraction = event.detail.attractionId

        const attractionArray = useAttractions()
        const matchingAttraction = attractionArray.filter(currentAttraction => {
            return currentAttraction.name === selectedAttraction
        })

        render(matchingAttraction)

        AttractionModal()
    }
})

const render = attractionCollection => {
    const contentTarget = document.querySelector('.itineraryAttractionsDetails')
    contentTarget.innerHTML = attractionCollection.map(attractionObj => {
        return AttractionsHTML(attractionObj)
    }).join("")
}

export const AttractionList = () => {
    getAttractions()
}

const AttractionModal = () => {
    let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".close-btn")
    modalBtn.onclick = function () {
        modal.style.display = "block"
    }

    closeBtn.onclick = function () {
        modal.style.display = "none"
    }

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }
}