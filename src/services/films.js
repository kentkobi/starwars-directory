import axios from 'axios'

var cachedFilms = [];
const getFilmDetails = async (url) => {
    let film = cachedFilms.find( film => film['url'] === url );

    if(!film){
        let response = await axios.get(url)
        
        film=response.data
        cachedFilms.push(film)
    }

    return film
}

export default {getFilmDetails}