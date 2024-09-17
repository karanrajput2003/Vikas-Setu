import React from "react";
import { Link } from "react-router-dom";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";

function Field_Officer_Tasks() {
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
            to="/field_officer"
            className="hover:text-blue-600 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/field_officer/tasks"
            className="hover:text-blue-600 transition duration-300"
          >
            My Tasks
          </Link>
          <Link
            to="/field_officer/profile"
            className="hover:text-blue-600 transition duration-300"
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <main
        className="flex flex-col items-start p-4"
        // style={{ position: "absolute", top: "180px", left: "350px" }}
      >
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full text-center text-sm table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b text-gray-600 uppercase text-xs font-semibold">
                  <th className="py-3 px-4 text-left">Project</th>
                  <th className="py-3 px-4 text-left sm:table-cell">
                    Department
                  </th>
                  <th className="py-3 px-4 text-left sm:table-cell">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left">All Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b transition-colors hover:bg-gray-100">
                  <td className="py-4 px-4 font-medium text-blue-600">
                    <Link to={`/field_officer/task_details?id=${123}`}>
                    Land Acquisition & Environmental Clearances
                    </Link>
                  </td>
                  <td className="py-4 px-4 sm:table-cell">
                  National Highways Authority of India (NHAI)
                  </td>
                  <td className="py-4 px-4 sm:table-cell">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                      Ongoing
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Link to={`/field_officer/task_details?id=${123}`} className="text-indigo-600 hover:text-indigo-800">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-gray-100">
                  <td className="py-4 px-4 font-medium text-blue-600">
                    <Link to={`/field_officer/task_details?id=${123}`}>
                      Delhi-Mumbai Expressway
                    </Link>
                  </td>
                  <td className="py-4 px-4 sm:table-cell">
                    Ministry of Road Transport and Highways (MoRTH)
                  </td>
                  <td className="py-4 px-4 sm:table-cell">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                      Completed
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Link to={`/field_officer/task_details?id=${123}`} className="text-indigo-600 hover:text-indigo-800">
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default Field_Officer_Tasks;
