import { axiosInstance } from "./axios-instance"



export async function getPlants() {
    let response = await axiosInstance.get(`/api/plants/`)
    // console.log('API response: ', response.data)
    return response.data   
}
