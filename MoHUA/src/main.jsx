import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// Pages
import Login from './pages/Login.jsx'
import DepartmentLogin from './pages/departmentLogin.jsx'
import ContractorLogin from './pages/ContractorLogin.jsx'
import ContractorRegister from './pages/ContractorRegister.jsx'

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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
