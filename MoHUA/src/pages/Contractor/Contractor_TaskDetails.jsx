import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Contractor_Navbar from "../../components/Contractor/Contractor_Navbar";

function Contractor_TaskDetails() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const projectData = {
    name: "Land Acquisition & Environmental Clearances",
    description:
      "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets.",
    startDate: "July 1, 2024",
    endDate: "June 30, 2025",
    status: "Ongoing",
    department: "National Highways Authority of India (NHAI)",
  };

  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  // Handle form submission
  const onSubmit = (data) => {
    const files = Array.from(data.documents);
    setUploadedFiles(files);
    reset();
  };

  return (
    <>
      <Contractor_Navbar />
      {/* Main Content Section */}
      <main className="mt-6 px-4 md:px-6 py-4">
        <h1 className="text-4xl mb-6 text-center">TASK DETAILS</h1>
        <hr></hr>
        <section className="bg-white p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {projectData.name}
          </h2>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mb-4">
            {projectData.status}
          </span>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Department
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {projectData.department}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Description
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {projectData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Start Date
              </h3>
              <p className="text-gray-600 text-base">{projectData.startDate}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                End Date
              </h3>
              <p className="text-gray-600 text-base mb-5">
                {projectData.endDate}
              </p>
            </div>
          </div>
          <Link
            to="/contractor/addgrievance?id=123"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            Add Grievance
          </Link>
        </section>

        {/* Upload Section */}
        <section className="mt-8 bg-white p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Upload Documents / Photos
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Task ID Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Task ID
              </label>
              <input
                type="text"
                {...register("task_id", { required: true })}
                placeholder="Enter Task ID"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-300"
              />
              {errors.task_id && (
                <span className="text-red-500 text-sm mt-1 block">
                  Task ID is required.
                </span>
              )}
            </div>

            {/* File Upload Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Documents/Photos
              </label>
              <input
                type="file"
                {...register("documents", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-300"
                multiple
              />
              {errors.documents && (
                <span className="text-red-500 text-sm mt-1 block">
                  Uploading files is required.
                </span>
              )}
            </div>

            {/* Current Date & Submit Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <p className="text-gray-600 mb-4 sm:mb-0">
                <span className="font-semibold">Current Date: </span>
                {currentDate}
              </p>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              >
                Upload
              </button>
            </div>
          </form>

          {/* Display Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Uploaded Files
              </h4>
              <ul className="list-disc list-inside">
                {uploadedFiles.map((file, index) => (
                  <li key={index} className="text-gray-600">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Contractor_TaskDetails;
