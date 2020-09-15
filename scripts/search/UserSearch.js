import { getSearchedParks, dispatchParkSearchEvent, useSearchedParks } from './ParkSearchProvider.js'

const eventHub = document.querySelector('.container')


eventHub.addEventListener('search', event => {
    if(event.target.classList.contains('searchBar')){
        const query = event.target.value;
        getSearchedParks(query)
        .then(_ => {
            const searchedParks = useSearchedParks()
            const eateries = []
            const attractions = []
            dispatchSearchEvent(eateries, searchedParks, attractions)
        })
    }
})

const dispatchSearchEvent = (eateriesArray, parksArray, attractionsArray) => {
    const searchEvent = new CustomEvent('customSearch', {
        detail : {
            parks: parksArray,
            eateries: eateriesArray,
            attractions: attractionsArray
        }
    })

    eventHub.dispatchEvent(searchEvent)
}