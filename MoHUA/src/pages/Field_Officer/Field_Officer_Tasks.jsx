import React from "react";
import { Link } from "react-router-dom";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";
import Officer_Navbar from '../../components/Field_Officer/Officer_Navbar.jsx'

function Field_Officer_Tasks() {
  return (
    <>
      <Officer_Navbar />
      {/* Main Content Section */}
      <main className="flex flex-col items-start p-4">
        <div className="p-6 w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b text-gray-600 uppercase text-xs font-semibold">
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4 hidden sm:table-cell">Department</th>
                  <th className="py-3 px-4 ">Status</th>
                  <th className="py-3 px-4 text-center">All Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b transition-colors hover:bg-gray-100">
                  <td className="py-4 px-4 font-medium text-blue-600">
                    <Link to={`/field_officer/task_details?id=${123}`}>
                      Land Acquisition & Environmental Clearances
                    </Link>
                  </td>
                  <td className="py-4 px-4 hidden sm:table-cell">
                    National Highways Authority of India (NHAI)
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                      Ongoing
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      to={`/field_officer/task_details?id=${123}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-gray-100">
                  <td className="py-4 px-4 font-medium text-blue-600">
                    <Link to={`/field_officer/task_details?id=${124}`}>
                      Delhi-Mumbai Expressway
                    </Link>
                  </td>
                  <td className="py-4 px-4 hidden sm:table-cell">
                    Ministry of Road Transport and Highways (MoRTH)
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                      Completed
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      to={`/field_officer/task_details?id=${124}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
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
