import axios from 'axios'

const BASE_URL = "http://localhost:8000/api"

// export async function getPlants() {
//     try {
//         let fetchResponse = await fetch(`${BASE_URL}/plants/`)
//         if(!fetchResponse.ok) throw new Error("Fetch Failed!")
//         console.log(fetchResponse.json())
//         return fetchResponse
//     } catch (error) {
//         console.log(error)
//     }
// }

export async function getPlants() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let actualData = await response.json()
    console.log(response)
    console.log(actualData)
   
}