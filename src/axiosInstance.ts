// src/axiosInstance.ts
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/v1'
})

// Add a request interceptor to include the access token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor to handle token refreshing
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem('refreshToken')
      if (refreshToken) {
        try {
          const { data } = await axiosInstance.post('/refresh-token', {
            token: refreshToken
          })
          localStorage.setItem('accessToken', data.accessToken)
          originalRequest.headers['Authorization'] =
            `Bearer ${data.accessToken}`
          return axiosInstance(originalRequest)
        } catch (err) {
          console.error('Refresh token expired or invalid')
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
        }
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
