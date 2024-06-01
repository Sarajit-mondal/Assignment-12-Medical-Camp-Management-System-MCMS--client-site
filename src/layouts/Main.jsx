import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div className='min-h-screen flex justify-between flex-col'>
      <Navbar />
      <main className='mt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Main
