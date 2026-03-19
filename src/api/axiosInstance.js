import axios from 'axios'

const axiosInstance = axios.create({
  // In development this is '/fitbite' — the Vite proxy forwards it to localhost:3000
  // In production this is your real backend URL from .env.production
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// Attach stored access token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance
