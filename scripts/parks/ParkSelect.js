// render parks in dropdown on DOM by itierrating through parkProvider
// once a park is selected, should display on preview with option to see details
// when 'save' button clicked on DOM, park saves with itinerary in DataBase
// will dispatch an event.... hopefully.
import { dispatchParkEvent, getParks, useParks } from './ParkProvider.js'




const eventHub = document.querySelector('.container')

//listen for when the user has chosen an activity
eventHub.addEventListener('activityChosen', event => {
    if(event.detail.hasOwnProperty('activityID') && event.detail.hasOwnProperty('stateCode')){
        getParks(event.detail.activityID)
        .then(_ => {
            const parks = useParks();
            const state = event.detail.stateCode

            //filter out parks that are not in the selected state
            const stateParks = parks.filter(park => {
                return park.states === state
            })
            debugger;
            //render parkselect element
            let contentTarget = document.querySelector('.parkDropdownContainer')
            contentTarget.innerHTML = `
                <select class='parksDropdown'>
                    <option value='0'>Please select a park...></option>
                    ${stateParks.map(park => {
                        return `<option value="${park.parkCode}">${park.fullName}</option>`
                    }).sort().join("")}
                </select>

            `
        })
    }
})

// //renders park select component in the dom
// export const ParkSelect = () => {
//     //fetch parks from api
//     getParks()
//     .then(_ => {
//         var parks = useParks()
//         var selectContainer = document.querySelector('.parkDropdownContainer')
//         selectContainer.innerHTML = `
//         <select class="parkDropdown">
//             <option value='0'>Please Select a park ...</option>
//             ${createOptions(parks)}
//         </select>
//     `
//         //listen for change event in select element and dispatch custom event
//         eventHub.addEventListener('change', event =>{
//             if(event.target.classList.contains('parkDropdown')){
//                 //find the park object that matches the user's pick from the select component
//                 var foundPark = {};
//                 foundPark = parks.find(park => {
//                     return event.target.value === park.name
//                 })
//                 dispatchParkEvent(foundPark)
                
//             }
//         })
//     })
    
// }

// //creates the HTML for all the options within the parkselect component
// const createOptions = (parks) => {
//     var optionsHTML = "";
//     optionsHTML = parks.map(park => {
//         return `<option value='${park.name}'>${park.name}</option>`
//     }).sort().join("")
//     debugger
//     return optionsHTML
    
// }






