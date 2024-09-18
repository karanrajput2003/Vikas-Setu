import React from 'react'
import { Link } from "react-router-dom";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";
function Contractor_Navbar() {
  return (
    <>
    {/* Header Section */}
    <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg">
        <div className="flex items-start space-x-4">
          <img
            src={logo_main}
            alt="Government of India logo"
            className="h-20 w-20"
          />
        </div>
        <div className="flex items-end space-x-4">
          <img src={MoHUA_Logo} alt="MoHUA Logo" className="h-20 w-36" />
          <img
            src={All}
            alt="G20 logo"
            className="h-20 w-auto hidden md:block"
          />
        </div>
      </header>

      {/* Navigation Section */}
      <div className="w-full bg-white shadow-md py-4">
        <div className="flex justify-center space-x-8 text-lg font-semibold">
          <Link
            to="/contractor"
            className="hover:text-blue-600 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/contractor/tasks"
            className="hover:text-blue-600 transition duration-300"
          >
            My Tasks
          </Link>
          <Link
            to="/contractor/grievance"
            className="hover:text-blue-600 transition duration-300"
          >
            Grievances
          </Link>
          <Link
            to="/contractor/profile"
            className="hover:text-blue-600 transition duration-300"
          >
            Profile
          </Link>
        </div>
      </div>
    </>
  )
}

export default Contractor_Navbar