import useAxiosCommon from "./useAxiosCommon"
import {
  useQuery,
} from '@tanstack/react-query'


function useAllCamps() {
 const axiosCommon = useAxiosCommon()

  const query = useQuery({
    queryKey : ['allCamp'],
    queryFn : async() =>{
      const {data} =await axiosCommon('/allcamp')
      return data
    }
  })
  return (
    query
  )
}

export default useAllCamps
