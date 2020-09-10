// creates HTML to go on dom with the selected attraction (selected in dropdown from AttractionSelect.js)

export const AttractionsHTML = (attractionObj) => {

    var souvenirsAvailable = ""
    var restroomsAvailable = ""

    if (attractionObj.ameneties.souvenirs === true) {
        souvenirsAvailable = "Yes"
    } else {
        souvenirsAvailable = "No"
    }

    if (attractionObj.ameneties.restrooms === true) {
        restroomsAvailable = "Yes"
    } else {
        restroomsAvailable = "No"
    }

    return `
        <div class="attraction--card" id="attraction--${attractionObj.id}">
            <h2>${attractionObj.name}</h2>
            <button class="attraction--button" id="modal-btn">Details</button>
        </div>

        <div class="modal" id="attraction-info--${attractionObj.id}">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h3>More Info:</h3>
                <h4>${attractionObj.name}</h4>
                <p><strong>Location:</strong> ${attractionObj.city}, ${attractionObj.state}</p>
                <p>${attractionObj.description}</p>
                <p><strong>Souvenirs?</strong> ${souvenirsAvailable} | <strong>Restrooms?</strong> ${restroomsAvailable}</p>
            </div>
        </div>
    `
}