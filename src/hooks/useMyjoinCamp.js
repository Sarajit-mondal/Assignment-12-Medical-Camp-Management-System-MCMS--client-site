import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import {
    useQuery,
  } from '@tanstack/react-query'
import useAuth from './useAuth'

function useMyjoinCamp() {
const axiosSecure = useAxiosSecure()
const {user,loading} = useAuth()
const query = useQuery({
    queryKey : ['allCamp'],
    enabled: !loading && !!user?.email,
    queryFn : async() =>{
      const {data} =await axiosSecure(`/myCamps/${user?.email}`)
      return data
    }
  })
  return (
    query
  )
  
}

export default useMyjoinCamp
