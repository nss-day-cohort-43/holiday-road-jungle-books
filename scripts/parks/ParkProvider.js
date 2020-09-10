// fetches info from park API
// usePark & getPark export
import  Settings from "../Settings.js"

let parks = []

let selectedPark = {}
const eventHub = document.querySelector('.container')

//function that dispatches the custom event with the necessary data from a park object
export const dispatchParkEvent = (park) => {
    const parkSelectEvent = new CustomEvent('parkSelected', {
        detail: {
            name: park.fullName,
            lat: park.latitude,
            long: park.longitude
        }
    })

    eventHub.dispatchEvent(parkSelectEvent)
}

//fetch parks data from API and set local parks to it
export const getParks = (activityID) => {
    debugger;
    return fetch(`https://developer.nps.gov/api/v1/activities/parks?id=${activityID}&api_key=${Settings.npsKey}`)
    .then(response => response.json())
    .then(parsedParks => {
        parks = parsedParks.data[0].parks;
    })
}

export const getPark = (parkCode) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${Settngs.npsKey}&parkCode=${parkCode}`)
    .then(response => response.json())
    .then(parsedResponse => {
        selectedPark = parsedResponse.data[0]
    })
}

//return a copy of local parks data
export const useParks = () => {
    return parks.slice()
}