import axios from 'axios'

// look for proxy fix in package json
const BASE_URL = "http://localhost:8000/api"

export async function getPlants() {
    let response = await axios.get(`${BASE_URL}/plants/`)
    // console.log(response.data)
    return response.data   
}
