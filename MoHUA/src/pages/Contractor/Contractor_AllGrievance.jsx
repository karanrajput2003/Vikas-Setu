import React from 'react'
import Contractor_Navbar from '../../components/Contractor/Contractor_Navbar'
import { Link } from 'react-router-dom'

function Contractor_AllGrievance() {
  return (
    <>
    <Contractor_Navbar />
    <main className="flex flex-col items-start p-4">
        <div className="p-6 w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b text-gray-600 uppercase text-xs font-semibold">
                  <th className="py-3 px-4">Task ID</th>
                  <th className="py-3 px-4 hidden sm:table-cell">Department Level</th>
                  <th className="py-3 px-4 ">Status</th>
                  <th className="py-3 px-4 text-center">All Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b transition-colors hover:bg-gray-100">
                  <td className="py-4 px-4 font-medium text-blue-600">
                    <Link to={`/contractor/grievance_details?id=${123}`}>
                      123
                    </Link>
                  </td>
                  <td className="py-4 px-4 hidden sm:table-cell">
                    Inter Department
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                      Ongoing
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      to={`/contractor/grievance_details?id=${123}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-gray-100">
                  <td className="py-4 px-4 font-medium text-blue-600">
                    <Link to={`/contractor/grievance_details?id=${124}`}>
                      132
                    </Link>
                  </td>
                  <td className="py-4 px-4 hidden sm:table-cell">
                    Other Department
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                      Completed
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      to={`/contractor/grievance_details?id=${124}`}
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
  )
}

export default Contractor_AllGrievance