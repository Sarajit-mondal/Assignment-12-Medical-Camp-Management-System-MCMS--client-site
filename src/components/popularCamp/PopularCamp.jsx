import useAllCamps from "../../hooks/useAllCamps"
import Container from "../Shared/container/Container"

function PopularCamp() {
  const {data} = useAllCamps()
  console.log(data)
  return (
    <div>
      <Container>
        <h1 className="text-4xl text-center font-bold">Our Popular Cmaps</h1>
      </Container>
    </div>
  )
}

export default PopularCamp
