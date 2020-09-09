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
    }
})

export const AttractionList = () => {
    getAttractions()
        .then(() => {
            const attractionArray = useAttractions()
            addAttractionsToDOM(attractionArray)
        })
}

const addAttractionsToDOM = (theAttractionArray) => {
    const domElement = document.querySelector('.itineraryAttractionsDetails')

    let HTMLArray = theAttractionArray.map(singleAttraction => {
        return AttractionsHTML(singleAttraction)
    })

    domElement.innerHTML += HTMLArray.join("")
}