import axios from '../utilities/axios'

const BASE_URL = '/authentication'

export async function signUp(credentials) {
    const response = await axios.post(`${BASE_URL}/register/`, credentials)
    if (response.status === 200) {
        const token = login(credentials)
        return token
    }
    return response
}

export async function login(credentials) {
    const response = await axios.post(`${BASE_URL}/login/`, credentials, {withCredentials: true})
    const token = response?.data?.token
    return token
}

export async function logout() {
    const response = await axios.post(`${BASE_URL}/logout/`, {}, {withCredentials: true})
    return response?.data?.message
}
