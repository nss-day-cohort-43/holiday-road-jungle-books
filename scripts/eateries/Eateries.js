// creates HTML to go on dom with the selected eatery (selected in dropdown from EaterySelect.js)

export const EateriesHTML = (eateryObj) => {

    let amenitiesAvailable = ""
    let wheelchairAvailable = ""
    let petAvailable = ""
    let wifiAvailable = ""
    let diaperAvailable = ""
    let playgroundAvailable = ""
    let restroomsAvailable = ""

    let chosenEatery = eateryObj.ameneties

    if (Object.values(chosenEatery).some(o => o === true)) {
        amenitiesAvailable = "<h4>Amenities</h4>"
    }

    if (eateryObj.ameneties.wheelchairAccessible === true) {
        wheelchairAvailable = "<li>Wheelchair Accessible</li>"
    }

    if (eateryObj.ameneties.petFriendly === true) {
        petAvailable = "<li>Pet Friendly</li>"
    }

    if (eateryObj.ameneties.wifi === true) {
        wifiAvailable = "<li>Wifi</li>"
    }

    if (eateryObj.ameneties.diaperFacility === true) {
        diaperAvailable = "<li>Diaper Facility</li>"
    }

    if (eateryObj.ameneties.playground === true) {
        playgroundAvailable = "<li>Playground</li>"
    }

    if (eateryObj.ameneties.restrooms === true) {
        restroomsAvailable = "<li>Restrooms</li>"
    }

    return `
        <div class="eatery--card" id="eatery--${eateryObj.id}">
            <h2>${eateryObj.businessName}</h2>
            <button class="eatery--button" id="eatery-modal-btn">Details</button>
        </div>

        <div class="modal eatery-modal" id="eatery-info--${eateryObj.id}">
            <div class="modal-content">
                <span class="close-btn eateryCloseBtn">&times;</span>
                <h3>More Info:</h3>
                <h4>${eateryObj.businessName}</h4>
                <p><strong>Location:</strong> ${eateryObj.city}, ${eateryObj.state}</p>
                <p>${eateryObj.description}</p>
                ${amenitiesAvailable}
                <ul class="yesNoContainer">
                    ${wheelchairAvailable}
                    ${petAvailable}
                    ${wifiAvailable}
                    ${diaperAvailable}
                    ${playgroundAvailable}
                    ${restroomsAvailable}
                </ul>           
                </div>
        </div>
    `
}

export const EaterModal = () => {

    let modalBtn = document.getElementById("eatery-modal-btn")
    let modal = document.querySelector(".eatery-modal")
    let closeBtn = document.querySelector(".eateryCloseBtn")

    modalBtn.onclick = function () {
        modal.style.display = "block"
    }

    closeBtn.onclick = function () {
        modal.style.display = "none"
    }

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }
}