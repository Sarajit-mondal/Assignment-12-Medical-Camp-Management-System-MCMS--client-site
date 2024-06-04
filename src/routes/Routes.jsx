import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import AvailableCamps from '../pages/AvailableCamps/AvailableCamps'
import CampDetails from '../components/detailsPage/CampDetails'
import useAxiosCommon from '../hooks/useAxiosCommon'
import LogIn from '../pages/from/LogIn'
import SignUp from '../pages/from/SignUp'
import Dashboard from '../layouts/Dashboard'
import AddACamp from '../pages/Dashboard/OrganizerDashboard/AddACamp'
import ManageCamps from '../pages/Dashboard/OrganizerDashboard/ManageCamps'
import RegisteredCamps from '../pages/Dashboard/OrganizerDashboard/RegisteredCamps'
import Profile from '../components/profile/Profile'
import Analytics from '../pages/Dashboard/userDashboard/Analytics'
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
  //dashboard route
  {
    path:'dashboard',
    element: <Dashboard>s</Dashboard>,
    children:[
      {
        path: '/dashboard',
        element: <Analytics />
      },
      {
        path: '/dashboard',
        element: <AddACamp />
      },
     
   
      {
        path: 'manageCamps',
        element: <ManageCamps />
      },
      {
        path: 'resisteredCamps',
        element: <RegisteredCamps />
      },
      {
        path: 'profile',
        element: <Profile ></Profile>
      },
    ]
  },

  //sign up and regiter page
   { path: '/login', element: <LogIn /> },
 { path: '/signup', element: <SignUp /> },
])
