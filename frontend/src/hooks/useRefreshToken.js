import axios from "axios"
import { axiosPrivate }  from "../utilities/axios-instance"
// import { getRefresh } from "../utilities/users-api"
import useAuth from './useAuth'

export default function useRefresh() {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = ''
        // await getRefresh()

        setAuth(prev => {
            return { ...prev, accessToken: response.data.access}
        })
        return response.data.accessToken
    }

  return refresh
}
