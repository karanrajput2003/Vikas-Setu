import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";

function Contractor_Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility for mobile devices
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="bg-white shadow-md py-4 md:flex md:justify-center md:space-x-8">
        <div className="flex justify-between items-center px-4 md:hidden">
          {/* Mobile menu button */}
          <span className="text-2xl font-bold text-gray-700">Contractor</span>
          <button
            onClick={toggleMenu}
            className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-8 mt-2 md:mt-0 text-lg font-semibold`}
        >
          <Link
            to="/contractor"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/contractor/tasks"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            Tasks
          </Link>
          <Link
            to="/contractor/grievance"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            Grievances
          </Link>
          <Link
            to="/contractor/profile"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            User Profile
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contractor_Navbar;
