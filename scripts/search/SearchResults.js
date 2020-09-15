import { dispatchParkEvent, getPark, usePark } from '../parks/ParkProvider.js'

const eventHub = document.querySelector('.container')

eventHub.addEventListener('customSearch', event =>{
    if("parks" in event.detail && "eateries" in event.detail && "attractions" in event.detail){
        const contentTarget = document.querySelector('.searchResults')
        contentTarget.innerHTML = `
            ${event.detail.parks.map(park => {
                return `
                    <li>${park.fullName}<button id="${park.parkCode}" class="selectParkBtn">Add</button></li>
                `
            }).join("")}

            ${event.detail.attractions.map(attraction => {
                return `
                    <li>${attraction.name}</li>
                `
            }).join("")}

            ${event.detail.eateries.map(eatery => {
                return `
                    <li>${eatery.businessName}</li>
                `
            }).join("")}
        `
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.classList.contains('selectParkBtn')){
        const parkCode = event.target.id
        debugger;
        getPark(parkCode)
        .then(_ => {
            const park = usePark()
            debugger;
            dispatchParkEvent(park)
        })
    }
})