import { dispatchParkEvent, getPark, usePark } from '../parks/ParkProvider.js'
import { dispatchEateryEvent } from '../eateries/EateryProvider.js'
import { dispatchAttractionEvent } from '../attractions/AttractionProvider.js'


const eventHub = document.querySelector('.container')

eventHub.addEventListener('customSearch', event =>{
    if("parks" in event.detail && "eateries" in event.detail && "attractions" in event.detail){
        const contentTarget = document.querySelector('.searchResults')
        contentTarget.innerHTML = `
            ${event.detail.parks.map(park => {
                return `
                    <li>${park.fullName}<button id="${park.parkCode}" class="selectParkBtn">&#10010;</button></li>
                `
            }).join("")}

            ${event.detail.attractions.map(attraction => {
                return `
                    <li>${attraction.name}<button id="${attraction.name}" class="addAttractionBtn">&#10010;</button></li>
                `
            }).join("")}

            ${event.detail.eateries.map(eatery => {
                return `
                    <li>${eatery.businessName}<button id="${eatery.businessName}" class="addEateryBtn">&#10010;</button></li>
                `
            }).join("")}
        `
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.classList.contains('selectParkBtn')){
        const parkCode = event.target.id
        getPark(parkCode)
        .then(_ => {
            const park = usePark()
            dispatchParkEvent(park)
        })
    }

    else if(event.target.classList.contains('addAttractionBtn')){
        const attractionID = event.target.id
        dispatchAttractionEvent(attractionID)
    }

    else if(event.target.classList.contains('addEateryBtn')){
        const eateryID = event.target.id
        dispatchEateryEvent(eateryID)
    }

})