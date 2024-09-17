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
import Contractor_Projects from './pages/Contractor/Contractor_Projects.jsx'



// Admin Pages
import Admin_Home from './pages/CentralAdmin/Admin_Home.jsx'
import Admin_Project from './pages/CentralAdmin/Admin_Project.jsx'
import Admin_Grievances from "./pages/CentralAdmin/Admin_Grievances.jsx";
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




import Department_Home from './pages/Department/Department_Home.jsx'
import Department_Project from './pages/Department/Department_Project.jsx'
import Department_Project_Details from './pages/Department/Department_Project_Details.jsx'
import Department_Task_Details from './pages/Department/Department_Task_Details.jsx'
import Department_Task_details2 from './pages/Department/tasks/TaskDetails2.jsx'
import Department_Task_details4 from './pages/Department/tasks/TaskDetails4.jsx'
import Department_SubTask_details2 from './pages/Department/subtasks/subtask2.jsx'
import Department_SubTask_details3 from './pages/Department/subtasks/subtask3.jsx'
import Department_SubTask_details6 from './pages/Department/subtasks/subtask6.jsx'



import Field_Officer_Home from './pages/Field_Officer/Field_Officer_Home.jsx'
import Field_Officer_Tasks from './pages/Field_Officer/Field_Officer_Tasks.jsx'
import Field_Officer_Profile from './pages/Field_Officer/Field_Officer_Profile.jsx'
import Field_Officer_TaskDetail from './pages/Field_Officer/Field_Officer_TaskDetail.jsx'


import ProjectManager_Home from './pages/ProjectManager/ProjectManager_Home.jsx'
import ProjectManager_Tasks from './pages/ProjectManager/ProjectManager_Tasks.jsx'
import ProjectManager_Profile from './pages/ProjectManager/ProjectManager_Profile.jsx'
import ProjectManager_TaskDetails from './pages/ProjectManager/ProjectManager_TaskDetails.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/departmentlogin",
    element: <DepartmentLogin />,
  },
  {
    path: "/contractorlogin",
    element: <ContractorLogin />,
  },
  {
    path: "/register",
    element: <ContractorRegister />,
  },

  //  Contractor Routes
  {
    path: "/contractor",
    element: <Contractor_Home />,
  },
  {
    path: "/contractor/projects",
    element: <Contractor_Projects />,
  },

  //  Admin Routes
  {
    path: "/admin",
    element: <Admin_Home />,
  },
  {
    path: "/admin/projects",
    element: <Admin_Project />,
  },
  {
    path: "/admin/grievances",
    element: <Admin_Grievances />,
  },
  {
    path: "/admin/profile",
    element: <Admin_Profile />,
  },
  {
    path: "/admin/addproject",
    element: <Admin_Add_Project />,
  },
  {
    path: "/admin/project_details",
    element: <Admin_Project_Details />,
  },
  {
    path: "/admin/addtask",
    element: <Admin_Add_Task />,
  },
  {
    path: "/admin/task_details",
    element: <Admin_Task_Details />,
  },
  {
    path: "/admin/task_details2",
    element: <Task_details2 />,
  },
  {
    path: "/admin/task_details3",
    element: <Task_details3 />,
  },
  {
    path: "/admin/task_details4",
    element: <Task_details4 />,
  },
  {
    path: "/admin/task_details5",
    element: <Task_details5 />,
  },
  {
    path: "/admin/task_details6",
    element: <Task_details6 />,
  },
  {
    path: "/admin/task_details7",
    element: <Task_details7 />,
  },
  {
    path: "/admin/subtask_details1",
    element: <Subtask1 />,
  },
  {
    path: "/admin/subtask_details2",
    element: <Subtask2 />,
  },
  {
    path: "/admin/subtask_details3",
    element: <Subtask3 />,
  },
  {
    path: "/admin/subtask_details4",
    element: <Subtask4 />,
  },
  {
    path: "/admin/subtask_details5",
    element: <Subtask5 />,
  },
  {
    path: "/admin/subtask_details6",
    element: <Subtask6 />,
  },

  //
  {
    path: "/department",
    element: <Department_Home />,
  },
  {
    path: "/department/projects",
    element: <Department_Project />,
  },
  {
    path: "/department/project_details",
    element: <Department_Project_Details />,
  },

  {
    path: "/department/task_details",
    element: <Department_Task_Details />,
  },
  {
    path: "/department/task_details2",
    element: <Department_Task_details2 />,
  },
  {
    path: "/department/task_details4",
    element: <Department_Task_details4 />,
  },
  {
    path: "/department/subtask_details2",
    element: <Department_SubTask_details2 />,
  },
  {
    path: "/department/subtask_details3",
    element: <Department_SubTask_details3 />,
  },
  {
    path: "/department/subtask_details6",
    element: <Department_SubTask_details6 />,
  },




  // Field Officer
  {
    path: "/field_officer",
    element: <Field_Officer_Home />,
  },
  {
    path: "/field_officer/tasks",
    element: <Field_Officer_Tasks />,
  },
  {
    path: "/field_officer/profile",
    element: <Field_Officer_Profile />,
  },
  {
    path: "field_officer/task_details",
    element: <Field_Officer_TaskDetail />,
  },

  // Project Manager
  {
    path: "/projectmanager",
    element: <ProjectManager_Home />,
  },
  {
    path: "/projectmanager/tasks",
    element: <ProjectManager_Tasks />,
  },
  {
    path: "/projectmanager/profile",
    element: <ProjectManager_Profile />,
  },
  {
    path: "/projectmanager/task_details",
    element: <ProjectManager_TaskDetails />,
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
