// creates HTML to go on dom with the selected eatery (selected in dropdown from EaterySelect.js)

export const EateriesHTML = (eateryObj) => {
    return `
        <div id="eatery--${eateryObj.id}">
            <h2>${eateryObj.businessName}</h2>
            <button class="eatery--button" id="btn--${eateryObj.id}">Details</button>
        </div>
    `
}