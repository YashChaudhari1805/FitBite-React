import axiosInstance from './axiosInstance'

export const getWorkoutsAPI = () =>
  axiosInstance.get('/workouts')

export const logWorkoutAPI = (data) =>
  axiosInstance.post('/workouts', data)

export const deleteWorkoutAPI = (id) =>
  axiosInstance.delete(`/workouts/${id}`)
