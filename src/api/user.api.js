import axiosInstance from './axiosInstance'

export const updateSubscriptionAPI = (plan) =>
  axiosInstance.patch('/users/subscription', { plan })
