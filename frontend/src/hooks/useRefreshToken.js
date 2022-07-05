import axios from "../utilities/axios"
import useAuth from './useAuth'

export default function useRefresToken() {
    const { setAuth } = useAuth()

    const refresh = async () => {

        const response = await axios.post('/authentication/refresh/', {}, { withCredentials: true })
        setAuth(prev => {
            return { ...prev, access: response.data.token}
        })
        
        return response.data.token
    }

  return refresh
}
