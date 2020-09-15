// fetches info from attraction API "bizarre destination" (ugh!)
// useAttraction & getAttraction export

let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedResponse => {
            attractions = parsedResponse
        })
}

const eventHub = document.querySelector('.container')

export const dispatchAttractionEvent = (attraction) => {
    const customEvent = new CustomEvent("attractionChosen", {
        detail: {
            attractionId: attraction
        }
    })

    eventHub.dispatchEvent(customEvent)
}