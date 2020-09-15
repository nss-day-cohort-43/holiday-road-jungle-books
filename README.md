# Holiday Road Jungle Books

Jungle booking is an itinerary building application.  The user can create new itineraries by picking a park, an eatery, and an attraction.  The app connects to several APIs in order to function.  The parks that the user chooses from are fetched from the National Park Services API.  Each time a park is selected, the weather forecast for that park is displayed.  The weather is fetched from [openweathermap.org](https://openweathermap.org/api).  The user then needs to select an attraction and an eatery.  The data for both of these are fetched from APIs created by the Nashville Software School, which are listed below.  When an itinerary is saved it is posted to a local json database.  The data from that local database is fetched, and all the saved itineraries are displayed to the DOM. 

## Required Tools
* JSON SERVER - You will need to have json server installed and run the following command in the api folder `json-server -p 8088 -w db.json`
* API Keys - Register in the following APIs in order to get a key (which is required to fetch their data)
1. https://www.nps.gov/subjects/digital/nps-data-api.htm
1. https://openweathermap.org/api

## Settings

After each teammate clone the repository, each must perform the following steps.

1. In the `scripts` directory, you will see a file named `.Settings.js` (note the dot at the beginning).
1. Copy that file with `cp .Settings.js Settings.js`. The `Settings.js` file is already in the `.gitignore` file, so it won't ever be tracked by git.
1. Register an API key for the APIs below that need it.
1. Copy your key into the appropriate place in the `Settings.js` file.
1. The team will need to figure out how to import that object into the data provider modules and use it for the `fetch()` calls that need to be performed.

## APIs

### National Park Service API

* API home: https://www.nps.gov/subjects/digital/nps-data-api.htm
* API documentation: https://www.nps.gov/subjects/developer/api-documentation.htm

#### List All Parks

https://developer.nps.gov/api/v1/parks?api_key=your_api_key

### Weather API

https://openweathermap.org/api

### Bizarre Destination

http://holidayroad.nss.team/bizarreries

### Eateries Destination

http://holidayroad.nss.team/eateries

## Our Client

### Brittany

![](./personas/persona-brittany.png)

## Wireframe
![wireframe](./imgs/jungleBookingWireframe.png "The Initial Wireframe")