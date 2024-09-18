import React from "react";
import Contractor_Navbar from '../../components/Contractor/Contractor_Navbar';

function Contractor_GrievanceDetails() {
  const projectData = {
    name: "Land Acquisition & Environmental Clearances",
    department_level: "Inter Department",
    status: "Ongoing",
    type: "Grievance",
    Other_Department: "NA",
    Comments: "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets.",
  };

  // Simulating a response from the project manager
  const managerResponse = {
    managerName: "Kashd hjsd",
    responseDate: "2024-09-15",
    response: "Thank you for your grievance. We are actively looking into the issue and will provide updates as soon as possible. Please feel free to contact me if you have further concerns.",
  };

  return (
    <>
      <Contractor_Navbar />
      {/* Main Content Section */}
      <main className="mt-6 px-4 md:px-6 py-4">
        <section className="bg-white p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {projectData.name}
          </h2>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mb-4">
            {projectData.status}
          </span>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Comments
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {projectData.Comments}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Type
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {projectData.type}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Department Level
              </h3>
              <p className="text-gray-600 text-base mb-5">{projectData.department_level}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Other Department
              </h3>
              <p className="text-gray-600 text-base">{projectData.Other_Department}</p>
            </div>
          </div>
        </section>

        {/* Manager's Response Section */}
        <section className="p-6 md:p-8 mt-6 border-t border-gray-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Manager's Response</h3>
          <div className="">
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold">Project Manager:</span> {managerResponse.managerName}
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold">Date:</span> {managerResponse.responseDate}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600 text-base leading-relaxed">
              {managerResponse.response}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contractor_GrievanceDetails;
