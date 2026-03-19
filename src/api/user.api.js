import axiosInstance from './axiosInstance'

export const updateSubscriptionAPI = (plan) =>
  axiosInstance.patch('/users/subscription', { plan })

export const updateProfileAPI = (data) =>
  axiosInstance.patch('/users/profile', data)
