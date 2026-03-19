import axiosInstance from './axiosInstance'

export const getRecipesAPI = (page = 1, limit = 12, category = '') => {
  const params = { page, limit }
  if (category) params.category = category
  return axiosInstance.get('/recipes', { params })
}
