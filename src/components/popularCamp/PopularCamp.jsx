import useAllCamps from "../../hooks/useAllCamps"
import Container from "../Shared/container/Container"
import CampCard from "./CampCard"

function PopularCamp() {
  const {data : allCamp =[]} = useAllCamps()
 

  const popularCamps = allCamp.filter((camp,inx)=> inx < 6 )
  console.log(popularCamps)
  return (
    <div>
      <Container>
        <h1 className="text-4xl text-center font-bold">Our Popular Cmaps</h1>

        {/* //popularCard */}
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 mt-10">
          {
           popularCamps && popularCamps.map(camp => <CampCard key={camp._id} popularCamp={camp}></CampCard>)
          }
        </div>
        
      </Container>
    </div>
  )
}

export default PopularCamp
