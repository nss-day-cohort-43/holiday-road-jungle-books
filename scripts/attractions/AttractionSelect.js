// render attractions in dropdown on DOM by itierrating through attractionProvider
// once an attraction is selected, should display on preview with option to see details
// when 'save' button clicked on DOM, attraction saves with itinerary in DataBase
// will dispatch an event.... hopefully.

import { useAttractions, getAttractions, dispatchAttractionEvent } from './AttractionProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionsDropdown")

eventHub.addEventListener("change", event => {
    if (event.target.id === "attractionSelect") {

        dispatchAttractionEvent(event.target.value)

    }
})

const render = attractionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown select-css" id="attractionSelect">
            <option value="0">Choose an Attraction</option>
            ${attractionsCollection.map(attractionObj => {
        return `<option value="${attractionObj.name}">${attractionObj.name}</option>`
    }).join("")
        }
        </select>
    `
}

export const AttractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractions = useAttractions()
            render(attractions)
        })
}