// creates HTML to go on dom with the selected attraction (selected in dropdown from AttractionSelect.js)

export const AttractionsHTML = (attractionObj) => {
    return `
        <div class="attraction--card" id="attraction--${attractionObj.id}">
            <h2>${attractionObj.name}</h2>
            <button class="attraction--button" id="modal-btn">Details</button>
        </div>

        <div class="modal">
            <div class="modal-content">
            <span class="close-btn">&times;</span>
            <p>this is the text inside the modal</p>
            </div>
        </div>
    `
}

/*
export const AttractionsHTML = (attractionObj) => {
    return `
        <div class="attraction--card" id="attraction--${attractionObj.id}">
            <h2>${attractionObj.name}</h2>
            <button class="attraction--button" id="btn--${attractionObj.id}">Details</button>
        </div>
    `
}
*/