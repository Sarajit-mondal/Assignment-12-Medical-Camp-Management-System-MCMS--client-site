import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import AvailableCamps from '../pages/AvailableCamps/AvailableCamps'
import CampDetails from '../components/detailsPage/CampDetails'
import useAxiosCommon from '../hooks/useAxiosCommon'
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
  // { path: '/login', element: <Login /> },
  // { path: '/signup', element: <SignUp /> },
])
