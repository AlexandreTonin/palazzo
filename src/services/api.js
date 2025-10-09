import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://localhost:3333',
})

// API.interceptors.request.use(config => {
//     const token = localStorage.getItem('authToken')
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
// }, error => {
//     return Promise.reject(error)
// })

// API.interceptors.response.use(response => {
//     return response
// }, error => {
//     if (error.response && error.response.status === 401) {
//         console.error('Unauthorized! Redirecting to login...')
//     }
//     return Promise.reject(error)
// })