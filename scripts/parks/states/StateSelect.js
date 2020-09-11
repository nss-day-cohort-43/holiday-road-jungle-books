import { useStates, dispatchStateEvent } from './StateProvider.js'

const eventHub = document.querySelector('.container')

export const StateSelect = () => {
    const states = useStates();
    //render states selector with all the states as options
    const contentTarget = document.querySelector('.statesDropdownContainer')
    contentTarget.innerHTML = `
        <select class="statesDropdown">
            <option value='0'>Please select a state...</option>
            ${states.map(state => {
                return `<option value='${state}'>${state}</option>`
            }).sort().join("")}
        </select>
    `
    //listen for change and dispatch custom event
    eventHub.addEventListener('change', event => {
        if(event.target.classList.contains('statesDropdown')){
            dispatchStateEvent(event.target.value)
        }
    })
}