import React from "react";
import { Link } from "react-router-dom";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";
import { CgProfile } from "react-icons/cg";

function Field_Officer_Profile() {
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
          <img src={All} alt="G20 logo" className="h-20 w-auto hidden md:block" />
        </div>
      </header>

      {/* Navigation Section */}
      <div className="w-full bg-white shadow-md py-4">
        <div className="flex justify-center space-x-8 text-lg font-semibold">
          <Link to="/field_officer" className="hover:text-blue-600 transition duration-300">
            Dashboard
          </Link>
          <Link to="/field_officer/tasks" className="hover:text-blue-600 transition duration-300">
            My Tasks
          </Link>
          <Link to="/field_officer/profile" className="hover:text-blue-600 transition duration-300">
            Profile
          </Link>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg max-w-4xl">
        <div className="flex items-center space-x-4 pb-4 border-b mb-6">
          <CgProfile className="text-4xl text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Field Officer Profile</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-sm font-semibold text-gray-600">Name</div>
            <div className="text-xl font-bold text-gray-800">Sample</div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-sm font-semibold text-gray-600">Email</div>
            <div className="text-xl font-bold text-gray-800">admin@gmail.com</div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-sm font-semibold text-gray-600">Mobile No</div>
            <div className="text-xl font-bold text-gray-800">9377883377</div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-sm font-semibold text-gray-600">Aadhar No</div>
            <div className="text-xl font-bold text-gray-800">7870 6544 5655</div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md col-span-1 sm:col-span-2">
            <div className="text-sm font-semibold text-gray-600">Pan No</div>
            <div className="text-xl font-bold text-gray-800">GJS82902</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Field_Officer_Profile;
