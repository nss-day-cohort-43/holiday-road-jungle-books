// render parks in dropdown on DOM by itierrating through parkProvider
// once a park is selected, should display on preview with option to see details
// when 'save' button clicked on DOM, park saves with itinerary in DataBase
// will dispatch an event.... hopefully.
import {
  dispatchParkEvent,
  getParks,
  useParks,
  getPark,
  usePark,
} from "./ParkProvider.js";

const eventHub = document.querySelector(".container");

//listen for when the user has chosen an activity
eventHub.addEventListener("activityChosen", (event) => {
  if (
    event.detail.hasOwnProperty("activityID") &&
    event.detail.hasOwnProperty("stateCode")
  ) {
    getParks(event.detail.activityID).then((_) => {
      const parks = useParks();
      const state = event.detail.stateCode;

      //filter out parks that are not in the selected state
      const stateParks = parks.filter((park) => {
        return park.states === state;
      });
      //render parkselect element
      let contentTarget = document.querySelector(".parkDropdownContainer");
      contentTarget.innerHTML = `
                <select class='parksDropdown'>
                    <option value='0'>Please select a park...</option>
                    ${stateParks
                      .map((park) => {
                        return `<option value="${park.parkCode}">${park.fullName}</option>`;
                      })
                      .sort()
                      .join("")}
                </select>

            `;

      //listen for a change event and dispatch the parkEvent with selected park
      eventHub.addEventListener("change", (event) => {
        if (event.target.classList.contains("parksDropdown")) {
          if (event.target.value !== "0") {
            getPark(event.target.value).then((_) => {
              let selectedPark = usePark();
              dispatchParkEvent(selectedPark);
            });
          }
        }
      });
    });
  }
});
