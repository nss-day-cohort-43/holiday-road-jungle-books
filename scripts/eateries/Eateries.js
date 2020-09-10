// creates HTML to go on dom with the selected eatery (selected in dropdown from EaterySelect.js)

export const EateriesHTML = (eateryObj) => {

    let wheelchairAvailable = ""
    let petAvailable = ""
    let wifiAvailable = ""
    let diaperAvailable = ""
    let playgroundAvailable = ""
    let restroomsAvailable = ""

    if (eateryObj.ameneties.wheelchairAccessible === true) {
        wheelchairAvailable = "Yes"
    } else {
        wheelchairAvailable = "No"
    }

    if (eateryObj.ameneties.petFriendly === true) {
        petAvailable = "Yes"
    } else {
        petAvailable = "No"
    }

    if (eateryObj.ameneties.wifi === true) {
        wifiAvailable = "Yes"
    } else {
        wifiAvailable = "No"
    }

    if (eateryObj.ameneties.diaperFacility === true) {
        diaperAvailable = "Yes"
    } else {
        diaperAvailable = "No"
    }

    if (eateryObj.ameneties.playground === true) {
        playgroundAvailable = "Yes"
    } else {
        playgroundAvailable = "No"
    }

    if (eateryObj.ameneties.restrooms === true) {
        restroomsAvailable = "yes"
    } else {
        restroomsAvailable = "No"
    }

    return `
        <div class="attraction--card" id="attraction--${eateryObj.id}">
            <h2>${eateryObj.businessName}</h2>
            <button class="attraction--button" id="modal-btn">Details</button>
        </div>

        <div class="modal" id="attraction-info--${eateryObj.id}">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h3>More Info:</h3>
                <h4>${eateryObj.businessName}</h4>
                <p><strong>Location:</strong> ${eateryObj.city}, ${eateryObj.state}</p>
                <p>${eateryObj.description}</p>
                <div class="yesNo-container">
                    <span><strong>Wheelchair Accessible?</strong> ${wheelchairAvailable}</span>
                    <span><strong>Pet Friendly?</strong> ${petAvailable}</span>
                    <span><strong>Wifi Available?</strong> ${wifiAvailable}</span>
                    <span><strong>Diaper Facility?</strong> ${diaperAvailable}</span>
                    <span><strong>Playground?</strong> ${playgroundAvailable}</span>
                    <span><strong>Restrooms??</strong> ${restroomsAvailable}</span>
                </div>           
                </div>
        </div>
    `
}

/*
export const EateriesHTML = (eateryObj) => {
    return `
        <div class="eatery--card" id="eatery--${eateryObj.id}">
            <h2>${eateryObj.businessName}</h2>
            <button class="eatery--button" id="btn--${eateryObj.id}">Details</button>
        </div>
    `
}
*/