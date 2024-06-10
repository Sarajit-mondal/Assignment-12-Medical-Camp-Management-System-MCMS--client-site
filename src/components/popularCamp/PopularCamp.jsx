import useAllCamps from "../../hooks/useAllCamps"
import ButtonTwo from "../Shared/Button/ButtonTwo"
import Container from "../Shared/container/Container"
import CampCard from "./CampCard"
import {Link} from 'react-router-dom'

function PopularCamp() {
  const {data : allCamp =[]} = useAllCamps()
 

  // const popularCamps = allCamp.filter((camp,inx)=> inx < 6 )
  // console.log(popularCamps)
  return (
    <div>
      <Container>
        <h1 className="text-4xl text-center font-bold">Our Popular Cmaps</h1>

        {/* //popularCard */}
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 md:gap-6 mt-10">
          {
           allCamp && allCamp.map(camp => <CampCard key={camp._id} popularCamp={camp}></CampCard>)
          }
        </div>
        {/* button */}
         <div className="mt-16">
          <Link to='/allCamps'>
          <ButtonTwo buttonText={"See All Camps"}></ButtonTwo>
          </Link>
         </div>
      </Container>
    </div>
  )
}

export default PopularCamp
