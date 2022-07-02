// // module to check localstorage for pair tokens
// // double-check if this can be provided by the axiosInstance interceptor
// // Delegate network request code to the users-api.js service module

// import * as usersAPI from './users-api'

// export function getUser() {
//     const token = getToken()
//     return token ? JSON.parse(atob(token.split('.')[1])).user_id : null
// }

// export function getToken() {
    
//     const accessToken = localStorage.getItem('access_token')
//     if (!accessToken) return null

//     const accessPayload = JSON.parse(atob(accessToken.split('.')[1]))
//     if (accessPayload.exp < Date.now() / 1000) {
//         localStorage.removeItem('access_token')
//     } else {
//         return accessToken
//     }

//     const refreshToken = localStorage.getItem('refresh_token')
//     const refreshPayload = JSON.parse(atob(refreshToken.split('.')[1]))
//     if (refreshPayload.exp < Date.now() / 1000) {
//         localStorage.removeItem('refresh_token')
//         return null
//     } else {
//         return usersAPI.refreshToken(refreshToken)
//     }
// }