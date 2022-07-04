// import axios from 'axios'
import { axiosInstance } from './axios-instance'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

const BASE_URL = '/authentication'

export async function signUp(credentials) {
    const response = await axiosInstance.post(`${BASE_URL}/user/create/`, credentials)
    console.log(response)
    if (response.status === 201) {
        const accessToken = await axiosInstance.post(`${BASE_URL}/token/obtain/`, credentials)
        console.log('sign up tokens', accessToken.data)
        return accessToken?.data?.access
    } else {
        return response
    }
}

export async function login(credentials) {
    const response = await axiosInstance.post(`${BASE_URL}/login/`, credentials)
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

// export async function getRefresh() {
//     // const { axiosPrivate } = useAxiosPrivate()

//     const response = await axiosPrivate.get(`${BASE_URL}/token/refresh/`)
//     return response.data.access
// }