import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div>
      <Navbar />
      <main className='pt-10 min-h-[calc(100vh-68px)]'>
        <Outlet />
        dsfsdfsdf
      </main>
      <Footer />
    </div>
  )
}

export default Main
