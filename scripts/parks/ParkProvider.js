// fetches info from park API
// usePark & getPark export
import  Settings from "../Settings.js"

var parks = []

const eventHub = document.querySelector('.container')

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

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${Settings.npsKey}`)
    .then(response => response.json())
    .then(parsedParks => {
        parks = parsedParks.data;
    })
}

export const useParks = () => {
    return parks.slice()
}