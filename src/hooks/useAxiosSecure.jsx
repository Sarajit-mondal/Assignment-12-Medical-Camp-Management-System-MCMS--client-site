import axios from 'axios'
import { useEffect } from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'
 const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
      },
      async error => {
        //('error tracked in the interceptor', error.response)
    
        return Promise.reject(error)
      }
    )
    ///response
    axiosSecure.interceptors.response.use(function (config) {
        
        return config
      },
      async error => {
        //('error tracked in the interceptor', error.response)
         if (error.response.status === 401 || error.response.status === 403) {
          // await logOut()
          // navigate('/login')
        }
        return Promise.reject(error)
      }
    )


  return axiosSecure
}

export default useAxiosSecure
