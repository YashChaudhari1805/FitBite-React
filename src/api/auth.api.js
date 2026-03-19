import axiosInstance from './axiosInstance'

export const registerAPI = (data) =>
    axiosInstance.post('/users/register', data)

export const loginAPI = (data) =>
    axiosInstance.post('/users/login', data)

export const logoutAPI = () =>
    axiosInstance.post('/users/logout')

export const getMeAPI = () =>
    axiosInstance.get('/users/me')
