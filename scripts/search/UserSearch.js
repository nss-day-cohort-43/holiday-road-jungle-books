import { getSearchedParks, useSearchedParks } from './ParkSearchProvider.js'
import { getSearchedEateries, useSearchedEateries} from './EaterySearchProvider.js'
import { getSearchedAttractions, useSearchedAttractions} from './AttractionSearchProvider.js'

const eventHub = document.querySelector('.container')


eventHub.addEventListener('search', event => {
    if(event.target.classList.contains('searchBar')){
        const query = event.target.value;
        getSearchedParks(query)
        .then(_ => {
            const searchedParks = useSearchedParks()
            getSearchedEateries(query)
            .then(_ => {
                const eateries = useSearchedEateries()
                getSearchedAttractions(query)
                .then(_ => {
                    const attractions = useSearchedAttractions()
                    dispatchSearchEvent(eateries, searchedParks, attractions)
                })
            })
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