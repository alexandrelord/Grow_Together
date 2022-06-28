import axios from 'axios'

const BASE_URL = "http://localhost:8000/authentication"

// creating an instance => https://github.com/axios/axios?ref=hackernoon.com#creating-an-instance
const axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

// export function getUser() {
//     const token = localStorage.getItem
// }

export async function signUp(credentials) {
    const response = await axiosInstance.post('/user/create/', credentials)
    console.log(response.data)

}


export async function login(credentials) {
    
    const response = await axiosInstance.post('/token/obtain/', credentials)
    // console.log(response.data.access)
    axiosInstance.defaults.headers['Authorization'] = `JWT ${response.data.access}`
    localStorage.setItem('access_token', response.data.access)
    localStorage.setItem('refresh_token', response.data.refresh)

    const user = JSON.parse(atob(response.data.access.split('.')[1]))
    console.log(user)
    
}