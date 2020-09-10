import { getActivites, useActivities, dispatchActivityEvent } from './ActivityProvider.js'


const eventHub = document.querySelector('.container')

//listen for when a state is chosen
eventHub.addEventListener('stateChosen', event => {
    if(event.detail.hasOwnProperty('stateCode')){
        //fetch all the activites
        getActivites()
        .then(_ => {
            const activities = useActivities()
            //render select component with all the activities
            let contentTarget = document.querySelector('.activitiesDropdownContainer')
            contentTarget.innerHTML = `
                <select class="activitiesDropdown">
                    <option value='0'>Please select an activity...</option>
                    ${activities.map(activity => {
                        return `<option value="${activity.id}">${activity.name}</option>`
                    }).sort().join("")}
                </select>
            `
            eventHub.addEventListener('change', event => {
                if(event.target.classList.contains('activitiesDropdown')){
                    const stateCode = document.querySelector('.statesDropdown').value
                    dispatchActivityEvent(event.target.value, stateCode)
                }
            })
        })
    }
})