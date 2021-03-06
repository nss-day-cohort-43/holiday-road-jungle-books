// render parks in dropdown on DOM by itierrating through parkProvider
// once a park is selected, should display on preview with option to see details
// when 'save' button clicked on DOM, park saves with itinerary in DataBase
// will dispatch an event.... hopefully.
import {
  dispatchParkEvent,
  getParks,
  useParks,
  getPark,
  usePark,
} from "./ParkProvider.js";

const eventHub = document.querySelector(".container");

//listen for when the user has chosen an activity
eventHub.addEventListener('parkReady', event => {
    if (event.detail.hasOwnProperty('activityID') && event.detail.hasOwnProperty('stateCode')) {
        if (event.detail.activityID === '0' || event.detail.stateCode === '0') {
            const parkSelect = document.querySelector('.parksDropdown')
            parkSelect.disabled = true
            const defualtPark = document.querySelector('#defaultPark')
            defualtPark.selected = true
        }
        else {
            getParks(event.detail.activityID)
                .then(_ => {
                    const parks = useParks();
                    const state = event.detail.stateCode

                    //filter out parks that are not in the selected state
                    const stateParks = parks.filter(park => {
                        return park.states === state
                    })
                    //render parkselect element
                    let contentTarget = document.querySelector('.parkDropdownContainer')

                    if(stateParks.length === 0){
                        contentTarget.innerHTML = `
                            <select class='parksDropdown select-css' disabled>
                                <option value='0'>No matching parks</option>
                                <option value='0' id="defaultPark">Please select a park...</option>
                            </select>
                        `
                    }

                    else{
                        contentTarget.innerHTML = `
                            <select class='parksDropdown select-css'>
                                <option id="defaultPark" value='0'>Please select a park...</option>
                                ${stateParks.map(park => {
                                    return `<option value="${park.parkCode}">${park.fullName}</option>`
                                }).sort().join("")}
                            </select>
                        `

                        //listen for a change event and dispatch the parkEvent with selected park
                        eventHub.addEventListener('change', event => {
                            if (event.target.classList.contains('parksDropdown')) {
                                if (event.target.value !== '0') {
                                    getPark(event.target.value)
                                        .then(_ => {
                                            let selectedPark = usePark()
                                            dispatchParkEvent(selectedPark)
                                        })
                                }
                            }
                        })
                    }
                })
        }
    }
})







