import { Park } from './Parks.js'

// render the HTML onto the DOM
// import Parks.js
// listen for customEvent from ParkSelect
const eventHub = document.querySelector('.container')

eventHub.addEventListener('parkSelected', event => {
    let contentTarget = document.querySelector('.itineraryTitle')
    if(event.detail.hasOwnProperty('name')){
        contentTarget.innerHTML = Park(event.detail.name)
    }
})