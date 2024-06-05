import useAxiosCommon from "./useAxiosCommon"
import {
  useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure"

function useAllCamps() {
 const axiosCommon = useAxiosCommon()
 const axiosSecure = useAxiosSecure()
  const query = useQuery({
    queryKey : ['allCamp'],
    queryFn : async() =>{
      const {data} =await axiosSecure('/allcamp')
      return data
    }
  })
  return (
    query
  )
}

export default useAllCamps
