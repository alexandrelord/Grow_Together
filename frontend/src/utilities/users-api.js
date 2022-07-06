import axios from './axios'

const BASE_URL = '/authentication'

export async function signUp(credentials) {
    const response = await axios.post(`${BASE_URL}/register/`, credentials)
    console.log(response)
    
    if (response.status === 200) {
        const accessToken = login(credentials)
        console.log(accessToken)
        return accessToken
    }
    return response
}

export async function login(credentials) {

    const response = await axios.post(`${BASE_URL}/login/`, credentials)
    
    const accessToken = response?.data?.token
    
    return accessToken
}
