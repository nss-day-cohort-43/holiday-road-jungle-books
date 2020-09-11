const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

//returns a copy of the state codes array
export const useStates = () => {
    return states.slice();
}

const eventHub = document.querySelector('.container')

//dispatches an event with the chosen state
export const dispatchStateEvent = (state) => {
    const stateChosenEvent = new CustomEvent('stateChosen', {
        detail: {
            stateCode: state
        }
    })
    eventHub.dispatchEvent(stateChosenEvent)
}