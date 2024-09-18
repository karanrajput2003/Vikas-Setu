import React from "react";
import Manager_Navbar from '../../components/ProjectManager/Manager_Navbar';

function ProjectManager_MyGrievanceDetails() {
  const projectData = {
    name: "Land Acquisition & Environmental Clearances",
    department_level: "NA",
    status: "Ongoing",
    type: "Grievance",
    Other_Department: "NHAI",
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
      <Manager_Navbar />
      {/* Main Content Section */}
      <main className="mt-6 px-4 md:px-6 py-4">
      <h1 className="text-4xl mb-6 text-center">
      GRIEVANCE DETAILS
            </h1>
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
              Department
              </h3>
              <p className="text-gray-600 text-base mb-5">{projectData.Other_Department}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Documents(If any)
              </h3>
              <p className="text-gray-600 text-base">{projectData.Other_Department}</p>
            </div>
          </div>
        </section>

        {/* Manager's Response Section */}
        <section className="p-6 md:p-8 mt-6 border-t border-gray-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Other Dept Manager's Response</h3>
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

export default ProjectManager_MyGrievanceDetails;
