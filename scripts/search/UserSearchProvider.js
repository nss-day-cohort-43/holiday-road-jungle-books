import  Settings from "../Settings.js"

let searchedParks = []

export const getSearchedParks = (query) => {
    fetch(`https://developer.nps.gov/api/v1/parks?q=${query}&api_key=${Settings.npsKey}`)
    .then(results => results.json())
    .then(parsedResults => {
        searchedParks = parsedResults.data.filter(park => {
            return park.name.toLowerCase().includes(query.toLowerCase())
        });
        debugger;
    })
}

