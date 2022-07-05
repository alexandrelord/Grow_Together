import axios from './axios'

const BASE_URL = '/authentication'

export async function signUp(credentials) {
    const response = await axios.post(`${BASE_URL}/register/`, credentials)
    
    if (response.status === 200) {
        const accessToken = login(credentials)
        return accessToken
    }
    return response
}

export async function login(credentials) {
    const response = await axios.post(`${BASE_URL}/login/`, credentials, {withCredentials: true})
    
    const accessToken = response?.data?.token
    
    return accessToken
}
