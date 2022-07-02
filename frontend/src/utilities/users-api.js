// import axios from 'axios'
import { axiosInstance } from './axios-instance'

export async function signUp(credentials) {
    const response = await axiosInstance.post('/authentication/user/create/', credentials)
    console.log(response)
    if (response.status === 201) {
        const accessToken = await axiosInstance.post('/authentication/token/obtain/', credentials)
        console.log(accessToken.data)
        return accessToken?.data?.access
    } else {
        return response
    }
}

export async function login(credentials) {
    const response = await axiosInstance.post('/authentication/token/obtain/', credentials)
    console.log('login tokens', response.data)
    const accessToken = response?.data?.access
    return accessToken
}

// export function logout() {
//     const response = axiosInstance.post('/authentication/blacklist/', {'refresh_token': localStorage.getItem('refresh_token')})
//     localStorage.removeItem('access_token')
//     localStorage.removeItem('refresh_token')
//     axiosInstance.defaults.headers['Authorization'] = null
//     return response
// }
