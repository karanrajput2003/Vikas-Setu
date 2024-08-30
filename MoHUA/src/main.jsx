import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


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
import Admin_Task_Details from './pages/CentralAdmin/Admin_Task_Details.jsx'
import Task_details2 from './pages/CentralAdmin/tasks/Task_details2.jsx'
import Task_details3 from './pages/CentralAdmin/tasks/Task_details3.jsx'
import Task_details4 from './pages/CentralAdmin/tasks/Task_details4.jsx'
import Task_details5 from './pages/CentralAdmin/tasks/Task_details5.jsx'
import Task_details6 from './pages/CentralAdmin/tasks/Task_details6.jsx'
import Task_details7 from './pages/CentralAdmin/tasks/Task_details7.jsx'
import Subtask1 from './pages/CentralAdmin/subtasks/Subtask1.jsx'
import Subtask2 from './pages/CentralAdmin/subtasks/Subtask2.jsx'
import Subtask3 from './pages/CentralAdmin/subtasks/Subtask3.jsx'
import Subtask4 from './pages/CentralAdmin/subtasks/Subtask4.jsx'
import Subtask5 from './pages/CentralAdmin/subtasks/Subtask5.jsx'
import Subtask6 from './pages/CentralAdmin/subtasks/Subtask6.jsx'



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
    element: <Admin_Project />,
  },
  {
    path: '/admin/profile',
    element: <Admin_Profile />,
  },
  {
    path: '/admin/addproject',
    element: <Admin_Add_Project />,
  },
  {
    path: '/admin/project_details',
    element: <Admin_Project_Details />,
  },
  {
    path: '/admin/addtask',
    element: <Admin_Add_Task />,
  },
  {
    path: '/admin/task_details',
    element: <Admin_Task_Details />,
  },
  {
    path: '/admin/task_details2',
    element: <Task_details2 />,
  },
  {
    path: '/admin/task_details3',
    element: <Task_details3 />,
  },
  {
    path: '/admin/task_details4',
    element: <Task_details4 />,
  },
  {
    path: '/admin/task_details5',
    element: <Task_details5 />,
  },
  {
    path: '/admin/task_details6',
    element: <Task_details6 />,
  },
  {
    path: '/admin/task_details7',
    element: <Task_details7 />,
  },
  {
    path: '/admin/subtask_details1',
    element: <Subtask1 />,
  },
  {
    path: '/admin/subtask_details2',
    element: <Subtask2 />,
  }, 
  {
    path: '/admin/subtask_details3',
    element: <Subtask3 />,
  }, 
  {
    path: '/admin/subtask_details4',
    element: <Subtask4 />,
  }, 
  {
    path: '/admin/subtask_details5',
    element: <Subtask5 />,
  }, 
  {
    path: '/admin/subtask_details6',
    element: <Subtask6 />,
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
