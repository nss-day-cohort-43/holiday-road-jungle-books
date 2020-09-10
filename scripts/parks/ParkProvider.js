// fetches info from park API
// usePark & getPark export
import  Settings from "../Settings.js"

var parks = []

const eventHub = document.querySelector('.container')

//function that dispatches the custom event with the necessary data from a park object
export const dispatchParkEvent = (park) => {
    const parkSelectEvent = new CustomEvent('parkSelected', {
        detail: {
            name: park.name,
            lat: park.latitude,
            long: park.longitude
        }
    })

    eventHub.dispatchEvent(parkSelectEvent)
}

//fetch parks data from API and set local parks to it
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${Settings.npsKey}&limit=15`)
    .then(response => response.json())
    .then(parsedParks => {
        parks = parsedParks.data;
    })
}

//return a copy of local parks data
export const useParks = () => {
    return parks.slice()
}