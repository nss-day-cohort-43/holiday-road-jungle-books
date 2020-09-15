let searchedEateries = []

export const useSearchedEateries = () => {
    return searchedEateries.slice()
}

export const getEateries = (query) => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            searchedEateries = parsedResponse.filter(eatery => {
                return eatery.businessName.toLowerCase().includes(query.toLowerCase())
            })
        })
}
