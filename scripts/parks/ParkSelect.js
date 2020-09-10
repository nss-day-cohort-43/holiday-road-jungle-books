// render parks in dropdown on DOM by itierrating through parkProvider
// once a park is selected, should display on preview with option to see details
// when 'save' button clicked on DOM, park saves with itinerary in DataBase
// will dispatch an event.... hopefully.
import { dispatchParkEvent, getParks, useParks } from './ParkProvider.js'

//renders park select component in the dom
//call getParks ins park select and pass the return of useParks into createOptions
export const ParkSelect = () => {
    getParks()
    .then(_ => {
        var parks = useParks()
        var selectContainer = document.querySelector('.parkDropdownContainer')
        selectContainer.innerHTML = `
        <select class="parkDropdown">
            <option value='0'>Please Select a park ...</option>
            ${createOptions(parks)}
        </select>
    `
    })
    
}

//creates the HTML for all the options within the parkselect component
const createOptions = (parks) => {
    var optionsHTML = "";
    optionsHTML = parks.map(park => {
        return `<option value='${park.name}'>${park.name}</option>`
    }).sort().join("")
    debugger
    return optionsHTML
    
}

const eventHub = document.querySelector('.container')

eventHub.addEventListener('change', event =>{
    if(event.target.classList.contains('parkDropdown')){
        debugger;
        var foundPark = {};
        getParks()
        .then(_ => {
            var parks = useParks();
            foundPark = parks.find(park => {
                return event.target.value === park.name
            })
            debugger;
            dispatchParkEvent(foundPark)
        })
    }
})


