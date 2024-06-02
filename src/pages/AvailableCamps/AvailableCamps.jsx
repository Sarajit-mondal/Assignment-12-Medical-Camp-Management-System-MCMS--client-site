import { useEffect, useState } from "react"
import Container from "../../components/Shared/container/Container"
import useAxiosCommon from "../../hooks/useAxiosCommon"
import CampCard from "../../components/popularCamp/CampCard"
import SortAndSerchBar from "../../components/availableCamps/sortandSearch/SortAndSerchBar"


function AvailableCamps() {
const axiosCommon = useAxiosCommon()
const [availableCamps,setAvailableCamps] =useState([])
// search & sort 
const [searchTerm, setSearchTerm] = useState('');
const [sortOption, setSortOption] = useState('');
const [layoutColumns,setLayoutColumns] = useState(true)
//search & sort

useEffect(async()=>{
const {data} =await axiosCommon.get('/allavilableCamps');
setAvailableCamps(data)
},[])              

///handleSearch
const handleSearch =(e) =>{
  console.log(e.target.value)
}
//handleSort
const handleSort =(e)=>{
console.log(e.target.value)
}
console.log(availableCamps)
  return (
    <div>
      <div className="my-8">
      <h1 className="text-4xl text-center font-bold">Available Camps</h1>
      {/* search and sort bar */}
      <div>
        <SortAndSerchBar 
        setLayoutColumns={setLayoutColumns}
        layoutColumns = {layoutColumns}
        handleSort={handleSort}
        handleSearch ={handleSearch}
        ></SortAndSerchBar>
      </div>
       <div className={`grid grid-col-1  gap-10 mt-10 ${layoutColumns ? 'md:grid-cols-3':'md:grid-cols-2'}`}>
        {
             availableCamps && availableCamps.map(camp => <CampCard key={camp._id} popularCamp={camp}></CampCard>)
        }
       </div>
      </div>
    </div>
  )
}

export default AvailableCamps
