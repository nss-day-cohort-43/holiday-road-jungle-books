// render eateries in dropdown on DOM by itierrating through EateryProvider
// once an eatery is selected, should display on preview with option to see details
// when 'save' button clicked on DOM, eatery saves with itinerary in DataBase
// will dispatch an event.... hopefully.

import { useEateries, getEateries } from './EateryProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateryDropdown")
const buttonTarget = document.querySelector(".eatery--button")

eventHub.addEventListener("change", event => {
    if (event.target.id === "eaterySelect") {
        const customEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryId: event.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})

const render = eateriesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Choose an Eatery</option>
            ${
        eateriesCollection.map(eateryObj => {
            return `<option value="${eateryObj.businessName}">${eateryObj.businessName}</option>`
        }).join("")
        }
        </select>
    `
}

export const EaterySelect = () => {
    getEateries()
        .then(() => {
            const eateries = useEateries()
            render(eateries)
        })
}