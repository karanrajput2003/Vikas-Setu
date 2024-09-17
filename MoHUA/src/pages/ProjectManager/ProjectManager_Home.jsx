import React from "react";
import { Link } from "react-router-dom";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";

function ProjectManager_Home() {
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
            to="/projectmanager"
            className="hover:text-blue-600 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/projectmanager/tasks"
            className="hover:text-blue-600 transition duration-300"
          >
            My Tasks
          </Link>
          <Link
            to="/projectmanager/profile"
            className="hover:text-blue-600 transition duration-300"
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Task Overview Card */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-gray-200 bg-white shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-blue-600"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Task Overview
                </h3>
                <p className="text-gray-500">View the status of all active tasks</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Total Tasks
                </div>
                <div className="text-4xl font-bold text-blue-600">1</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Completed Tasks
                </div>
                <div className="text-4xl font-bold text-blue-600">0</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Ongoing Tasks
                </div>
                <div className="text-4xl font-bold text-green-600">1</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Upcoming Tasks
                </div>
                <div className="text-4xl font-bold text-yellow-600">0</div>
              </div>
            </div>
          </div>

          {/* Another Card or Section */}
          {/* You can add more sections here */}
        </div>
      </div>
    </>
  );
}

export default ProjectManager_Home;
