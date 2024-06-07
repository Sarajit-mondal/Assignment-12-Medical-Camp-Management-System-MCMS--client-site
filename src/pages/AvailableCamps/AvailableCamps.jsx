import { useEffect, useState } from "react"
import Container from "../../components/Shared/container/Container"
import useAxiosCommon from "../../hooks/useAxiosCommon"
import CampCard from "../../components/popularCamp/CampCard"
import SortAndSerchBar from "../../components/availableCamps/sortandSearch/SortAndSerchBar"
import { useQuery } from "@tanstack/react-query"
import LoadingSpinner from "../../components/Shared/LoadingSpinner"
import { Helmet } from "react-helmet-async"
import useAuth from "../../hooks/useAuth"



function AvailableCamps() {
  const axiosCommon = useAxiosCommon()
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('defaultSortValue');
  const [layoutColumns, setLayoutColumns] = useState(true);
  const [isLoading,setIsLoading] = useState(true)
  const {user} = useAuth()
  
  const [availableCamps,setAvailableCamps] = useState([])
  const fetchCamp = async (sortOption) => {
    const { data } = await axiosCommon.get(`/allavilableCamps?userEmail=${user?.email}`);
    setAvailableCamps(data)
    setIsLoading(false)
  };
  useEffect(()=>{
   fetchCamp()
  
  },[])
  //fetch Sort camp
 
  
  const handleSearch = async(e) => {
    const searchValue = e.target.value
  };
  
  const handleSort = async(e) => {
    setIsLoading(true)
    const sortValue = e.target.value || ""
    setSortOption(sortValue);
    const { data } = await axiosCommon.get(`/allavilableCamps?sortValue=${sortValue}&userEmail=${user?.email}`);
    setAvailableCamps(data)
    setIsLoading(false)
  };
  console.log(availableCamps)

// if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div>
      <Helmet title="allAvailableCamps"></Helmet>
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
      {
        isLoading ? <LoadingSpinner /> :
        <div className={`grid grid-col-1  gap-10 mt-10 ${layoutColumns ? 'md:grid-cols-3':'md:grid-cols-2 [&>*]:w-11/12 gap-20'}`}>
        {
             availableCamps && availableCamps.map(camp => <CampCard key={camp._id} popularCamp={camp}></CampCard>)
        }
       </div>
      }
      </div>
    </div>
  )
}

export default AvailableCamps
