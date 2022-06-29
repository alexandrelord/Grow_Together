import { axiosInstance } from './axios-instance'

export async function signUp(credentials) {
    const response = await axiosInstance.post('/authentication/user/create/', credentials)

    if (response.status === 201) {
        response.data.password = credentials.password
        return obtainToken(credentials)
    }
}

export function login(credentials) {
     return obtainToken(credentials)
}

export function logout() {
    const response = axiosInstance.post('/authentication/blacklist/', {'refresh_token': localStorage.getItem('refresh_token')})
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    axiosInstance.defaults.headers['Authorization'] = null
    return response
}

export async function obtainToken(credentials) {
    const token = await axiosInstance.post('/authentication/token/obtain/', credentials)
    axiosInstance.defaults.headers['Authorization'] = `JWT ${token.data.access}`
    localStorage.setItem('access_token', token.data.access)
    localStorage.setItem('refresh_token', token.data.refresh)

    return JSON.parse(atob(token.data.access.split('.')[1])).user_id  
}

export async function refreshToken(refreshToken) {
    const token = await axiosInstance.post('/authentication/token/refresh/', refreshToken)
    axiosInstance.defaults.headers['Authorization'] = `JWT ${token.data.access}`
    localStorage.setItem('access_token', token.data.access)
    localStorage.setItem('refresh_token', token.data.refresh)

    return token
}