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

    if (response.status === 201) {
        response.data.password = credentials.password
        return getToken(credentials)
    }
}

export function login(credentials) {
     return getToken(credentials)
}

export async function getToken(credentials) {
    const token = await axiosInstance.post('/token/obtain/', credentials)
    axiosInstance.defaults.headers['Authorization'] = `JWT ${token.data.access}`
    localStorage.setItem('access_token', token.data.access)
    localStorage.setItem('refresh_token', token.data.refresh)

    return JSON.parse(atob(token.data.access.split('.')[1])).user_id  
}