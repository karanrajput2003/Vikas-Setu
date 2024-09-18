import React from 'react'
import Contractor_Navbar from '../../components/Contractor/Contractor_Navbar'
import { CgProfile } from "react-icons/cg";

function Contractor_Profile() {
  return (
    <>
    <Contractor_Navbar />
    <div className="container mx-auto mt-10 p-6 bg-white max-w-4xl">
        <div className="flex items-center space-x-4 pb-4 border-b mb-6">
          <CgProfile className="text-4xl text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Contractor Profile</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-sm font-semibold text-gray-600">Name</div>
            <div className="text-xl font-bold text-gray-800">Sample</div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-sm font-semibold text-gray-600">Email</div>
            <div className="text-xl font-bold text-gray-800">Contractor@gmail.com</div>
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
  )
}

export default Contractor_Profile