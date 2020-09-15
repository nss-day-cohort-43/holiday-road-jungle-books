// fetches info from attraction API "EAteries Destination"
// useEatery & getEatery export

let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            eateries = parsedResponse
        })
}

const eventHub = document.querySelector('.container')

export const dispatchEateryEvent = (eatery) => {
    const customEvent = new CustomEvent("eateryChosen", {
        detail: {
            eateryId: eatery
        }
    })

    eventHub.dispatchEvent(customEvent)
}