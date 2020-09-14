import { getActivites, useActivities, dispatchActivityEvent } from './ActivityProvider.js'


const eventHub = document.querySelector('.container')

//listen for when a state is chosen
export const ActivitySelect = () => {
    //fetch all the activites
    getActivites()
        .then(_ => {
            const activities = useActivities()
            //render select component with all the activities
            let contentTarget = document.querySelector('.activitiesDropdownContainer')
            contentTarget.innerHTML = `
                <select class="activitiesDropdown select-css">
                    <option value='0'>Please select an activity...</option>
                    ${activities.map(activity => {
                        return `<option value="${activity.id}">${activity.name}</option>`
                    }).join("")}
                </select>
            `
            eventHub.addEventListener('change', event => {
                if (event.target.classList.contains('activitiesDropdown')) {
                    const stateCode = document.querySelector('.statesDropdown').value
                    if(stateCode !== '0'){
                        dispatchActivityEvent(event.target.value, stateCode)
                    }  
                }
            })
        })
}


