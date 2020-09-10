// render the HTML onto the DOM
// import Eateries.js
// listen for customEvent from EaterySelect

import { getEateries, useEateries } from './EateryProvider.js'
import { EateriesHTML } from './Eateries.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("eateryChosen", event => {
    if ("eateryId" in event.detail) {

        const selectedEatery = event.detail.eateryId

        const eateryArray = useEateries()
        const matchingEatery = eateryArray.filter(currentEatery => {
            return currentEatery.businessName === selectedEatery
        })

        render(matchingEatery)
    }
})

const render = eateryCollection => {
    const contentTarget = document.querySelector('.itineraryEateryDetails')
    contentTarget.innerHTML = eateryCollection.map(eateryObj => {
        return EateriesHTML(eateryObj)
    }).join("")
}

export const EateryList = () => {
    getEateries()
}