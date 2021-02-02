import axios from 'axios'
const baseURL = "https://swapi.dev"

/**
 * Get a list of all people from the api
 * @return {Promise}    Promise that will resolve to the response data
 */
const getAll = async () => {
    const response = await axios.get(baseURL + "/api/people/")
    
    return response.data
}

const getByUrl = async (url) => {
    const response = await axios.get(url)
    
    return response.data
}

export default {getAll, getByUrl}