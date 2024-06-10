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
import UserRegisteredCamps from '../pages/Dashboard/userDashboard/UserRegisteredCamps'
import PaymentHistory from '../pages/Dashboard/userDashboard/PaymentHistory'
import PrivateRoute from './PrivateRoute'
import OrganigerPrivateRoute from './OrganigerPrivateRoute'
import ParticipantPrivateRoute from './ParticipantPrivateRoute'
import AboutUs from '../components/Shared/home/ContactAndAbout/AboutUs'
import ContactUs from '../components/Shared/home/ContactAndAbout/ContactUs'
const organiger = true;
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
      path: '/about',
      element: <AboutUs></AboutUs>
    },
    {
      path: '/contact',
      element: <ContactUs></ContactUs>
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        index: true,
        element: <PrivateRoute><ParticipantPrivateRoute><Analytics /></ParticipantPrivateRoute></PrivateRoute>
      },
      //organiger route
      {
        // path: 'addACamp',
        index: true,
        element: <PrivateRoute><OrganigerPrivateRoute><AddACamp /></OrganigerPrivateRoute></PrivateRoute>
      },
     
   
      {
        path: 'manageCamps',
        element: <PrivateRoute><OrganigerPrivateRoute><ManageCamps /></OrganigerPrivateRoute></PrivateRoute>
      },
      {
        path: 'resisteredCamps',
        element: <PrivateRoute><OrganigerPrivateRoute><RegisteredCamps /></OrganigerPrivateRoute></PrivateRoute>
      },
      //organiger camp
      {
        path: 'registeredCamps',
        element: <PrivateRoute><ParticipantPrivateRoute><UserRegisteredCamps/></ParticipantPrivateRoute></PrivateRoute>
      },
      {
        path: 'paymentHistory',
        element: <PrivateRoute><ParticipantPrivateRoute><PaymentHistory /></ParticipantPrivateRoute></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile ></Profile></PrivateRoute>
      },
    ]
  },

  //sign up and regiter page
   { path: '/login', element: <LogIn /> },
 { path: '/signup', element: <SignUp /> },
])
