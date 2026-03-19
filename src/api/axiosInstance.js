import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '/fitbite',
    withCredentials: true, // send cookies automatically
})

// Attach stored access token to every request (fallback if cookie httpOnly)
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default axiosInstance
