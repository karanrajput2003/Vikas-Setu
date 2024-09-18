import React from "react";
import { Link } from "react-router-dom";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";
import Officer_Navbar from '../../components/Field_Officer/Officer_Navbar.jsx'
function Field_Officer_Home() {
  return (
    <>
      <Officer_Navbar />

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

export default Field_Officer_Home;
