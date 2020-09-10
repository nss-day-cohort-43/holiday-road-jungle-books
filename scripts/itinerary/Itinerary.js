/* 
    creates HTML for aside containing cards for each saved itinerary in LOCAL database
*/

export const ItineraryHTML = (anObject) => {
  return `
        <section class="card-itinerary">
            <p class="card-title">Itinerary For: ${anObject.park}</p>
            <p>• Place To Eat: ${anObject.eatery}<br>
            • Bizzare Attraction to Visit: ${anObject.attraction}</p>
            <p class="caption">Date Saved: ${new Date(
              anObject.date
            ).toLocaleDateString("en-US")}</p>
            
        </section>
        `;
};

/* all code below will REPLACE code above & is to be used ONLY if we can capture data on:
    1. has cell service y/n 
    2. caution alerts 
    3. webcams
*/

/*
export const ItineraryHTML = (anObject) => {
  return `
        <section class="card-itinerary">
            <p class="card-title">Itinerary For: ${anObject.park}</p>
            <p>• Place To Eat: ${anObject.eatery}<br>
            • Bizzare Attraction to Visit: ${anObject.attraction}<br>
            • Cell Service: ${anObject.cellService} <br>
            • Active Caution Alerts: ${anObject.cautionAlert}<br>
            • Webcam Info: ${anObject.webcam}</p>
            <p class="caption">Date Saved: ${new Date(
              anObject.date
            ).toLocaleDateString("en-US")}</p>
            
        </section>
        `;
};
*/
