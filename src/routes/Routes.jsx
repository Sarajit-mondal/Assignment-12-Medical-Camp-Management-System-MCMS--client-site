import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import AvailableCamps from '../pages/AvailableCamps/AvailableCamps';
import CampDetails from '../components/detailsPage/CampDetails';
import LogIn from '../pages/from/LogIn';
import SignUp from '../pages/from/SignUp';
import Dashboard from '../layouts/Dashboard';
import AddACamp from '../pages/Dashboard/OrganizerDashboard/AddACamp';
import ManageCamps from '../pages/Dashboard/OrganizerDashboard/ManageCamps';
import RegisteredCamps from '../pages/Dashboard/OrganizerDashboard/RegisteredCamps';
import Profile from '../components/profile/Profile';
import Analytics from '../pages/Dashboard/userDashboard/Analytics';
import UserRegisteredCamps from '../pages/Dashboard/userDashboard/UserRegisteredCamps';
import PaymentHistory from '../pages/Dashboard/userDashboard/PaymentHistory';
import PrivateRoute from './PrivateRoute';
import OrganigerPrivateRoute from './OrganigerPrivateRoute';
import ParticipantPrivateRoute from './ParticipantPrivateRoute';
import AboutUs from '../components/Shared/home/ContactAndAbout/AboutUs';
import ContactUs from '../components/Shared/home/ContactAndAbout/ContactUs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/success_payment', element: <Home /> },
      { path: '/cancel_payment', element: <Home /> },
      { path: '/fail_payment', element: <Home /> },
      { path: '/allCamps', element: <AvailableCamps /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/contact', element: <ContactUs /> },
      {
        path: '/campDetail/:id',
        element: <CampDetails />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/campDetails/${params.id}`)
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <ParticipantPrivateRoute><Analytics /></ParticipantPrivateRoute>
      },
      {
        path: 'addACamp',
        element: <OrganigerPrivateRoute><AddACamp /></OrganigerPrivateRoute>
      },
      {
        path: 'manageCamps',
        element: <ManageCamps />
      },
      {
        path: 'registeredCamps',
        element:<RegisteredCamps />
      },
      {
        path: 'userRegisteredCamps',
        element: <ParticipantPrivateRoute><UserRegisteredCamps /></ParticipantPrivateRoute>
      },
      {
        path: 'paymentHistory',
        element: <ParticipantPrivateRoute><PaymentHistory /></ParticipantPrivateRoute>
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  { path: '/login', element: <LogIn /> },
  { path: '/signup', element: <SignUp /> }
]);
