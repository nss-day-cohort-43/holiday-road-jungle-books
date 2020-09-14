import { getSearchedParks } from './UserSearchProvider.js'

const eventHub = document.querySelector('.container')


eventHub.addEventListener('search', event => {
    if(event.target.classList.contains('searchBar')){
        const query = event.target.value;
        debugger;
        getSearchedParks(query);
    }
})