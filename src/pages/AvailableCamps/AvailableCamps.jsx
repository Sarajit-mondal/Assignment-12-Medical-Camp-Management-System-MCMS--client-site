import { useEffect, useState } from "react"
import Container from "../../components/Shared/container/Container"
import useAxiosCommon from "../../hooks/useAxiosCommon"
import CampCard from "../../components/popularCamp/CampCard"


function AvailableCamps() {
const axiosCommon = useAxiosCommon()
const [availableCamps,setAvailableCamps] =useState([])
const [sortingValue,setSortingValue] = useState()

useEffect(async()=>{
const {data} =await axiosCommon.get('/allavilableCamps');
setAvailableCamps(data)
},[])
console.log(availableCamps)
  return (
    <div>
      <div className="my-8">
      <h1 className="text-4xl text-center font-bold">Available Camps</h1>
       <div className="grid grid-col-1 md:grid-cols-3 gap-10 mt-10">
        {
             availableCamps && availableCamps.map(camp => <CampCard key={camp._id} popularCamp={camp}></CampCard>)
        }
       </div>
      </div>
    </div>
  )
}

export default AvailableCamps
