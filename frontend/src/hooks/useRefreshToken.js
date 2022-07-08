import axios from "../utilities/axios"
import useAuth from './useAuth'

export default function useRefresToken() {
    const { auth, setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.post('/authentication/refresh/', {}, { withCredentials: true })
        // why does prev not have username but accessToken persists?? after login, setAuth({username, accessToken})
        setAuth(prev => { return { ...prev, accessToken: response.data.token} })

        return response.data.token
    }

  return refresh
}
