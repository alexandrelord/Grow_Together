import axios from 'axios'

const BASE_URL = "http://localhost:8000/api"

export async function getPlants() {
    let response = await axios.get(`${BASE_URL}/plants/`)
    // console.log(response.data)
    return response.data   
}

// Unlike the fetch() method, the response returned from this library contains the JSON format we need.
// It also has the advantage of robust error handling, so we don’t need to check and throw an error like we did earlier with the fetch() method.