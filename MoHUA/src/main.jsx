import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// Pages
import Login from './pages/login.jsx'
import DepartmentLogin from './pages/departmentLogin.jsx'
import ContractorLogin from './pages/ContractorLogin.jsx'
import ContractorRegister from './pages/ContractorRegister.jsx'

// Contractor Pages
import Contractor_Home from './pages/Contractor/Contractor_Home.jsx'



// Admin Pages
import Admin_Home from './pages/CentralAdmin/Admin_Home.jsx'
import Admin_Project from './pages/CentralAdmin/Admin_Project.jsx'
import Admin_Profile from './pages/CentralAdmin/Admin_Profile.jsx'
import Admin_Add_Project from './pages/CentralAdmin/Admin_Add_Project.jsx'
import Admin_Project_Details from './pages/CentralAdmin/Admin_Project_Details.jsx'
import Admin_Add_Task from './pages/CentralAdmin/Admin_Add_Task.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/departmentlogin',
    element: <DepartmentLogin />,
  },
  {
    path: '/contractorlogin',
    element: <ContractorLogin />,
  },
  {
    path: '/register',
    element: <ContractorRegister />,
  },



  //  Contractor Routes
  {
    path: '/contractor',
    element: <Contractor_Home />,
  },


  //  Admin Routes
  {
    path: '/admin',
    element: <Admin_Home />,
  },
  {
    path: '/admin/projects',
    element: <Admin_Project/>,
  },
  {
    path: '/admin/profile',
    element: <Admin_Profile/>,
  },
  {
    path: '/admin/addproject',
    element: <Admin_Add_Project/>,
  },
  {
    path: '/admin/project_details',
    element: <Admin_Project_Details />,
  },
  {
    path: '/admin/addtask',
    element: <Admin_Add_Task />,
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
