import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import AvailableCamps from '../pages/AvailableCamps/AvailableCamps'
import CampDetails from '../components/detailsPage/CampDetails'
import useAxiosCommon from '../hooks/useAxiosCommon'
import LogIn from '../pages/from/LogIn'
import SignUp from '../pages/from/SignUp'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/allCamps',
      element: <AvailableCamps></AvailableCamps>
    },
    {
      path: '/campDetail/:id',
    
      element: <CampDetails></CampDetails>,
      loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/campDetails/${params.id}`)
    },

    ],
  },
   { path: '/login', element: <LogIn /> },
 { path: '/signup', element: <SignUp /> },
])
