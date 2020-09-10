import  Settings from "../../Settings.js"

let activities = [];

export const getActivites = () => {
    return fetch(`https://developer.nps.gov/api/v1/activities?api_key=${Settings.npsKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        activities = parsedResponse.data
    })
}

export const useActivities = () => {
    return activities.slice()
}

const eventHub = document.querySelector('.container')

export const dispatchActivityEvent = (activity, state) => {
    const activityChosenEvent = new CustomEvent('activityChosen', {
        detail : {
            activityID: activity,
            stateCode: state
        }
    })

    eventHub.dispatchEvent(activityChosenEvent)
}