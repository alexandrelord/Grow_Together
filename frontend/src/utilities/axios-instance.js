import axios from "axios"

const BASE_URL = 'http://localhost:8000'

export const axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',     
    }
});

// creating an instance => https://github.com/axios/axios?ref=hackernoon.com#creating-an-instance
// using interceptors => https://axios-http.com/docs/interceptors && https://lightrains.com/blogs/axios-intercepetors-react/