let searchedAttractions = []

export const useSearchedAttractions = () => {
    return searchedAttractions.slice()
}

export const getSearchedAttractions = (query) => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedResponse => {
            searchedAttractions = parsedResponse.filter(attraction => {
                return attraction.name.toLowerCase().includes(query.toLowerCase())
            })
            debugger
        })
}