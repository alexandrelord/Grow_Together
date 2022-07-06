import axios from '../utilities/axios'

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
    const response = await axios.post(`${BASE_URL}/login/`, credentials, {withCredentials: true})
    
    const accessToken = response?.data?.token
    
    return accessToken
}

export async function logout() {
    const response = await axios.post(`${BASE_URL}/logout/`, {}, {withCredentials: true})
    // console.log(response)
}
