import React from "react";
import Manager_Navbar from "../../components/ProjectManager/Manager_Navbar.jsx"
function ProjectManager_Home() {
  return (
    <>
      
      <Manager_Navbar />
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Task Overview Card */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-gray-200 bg-white shadow-lg p-6">
            <div className="flex items-center space-x-4">
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
                <div className="text-4xl font-bold text-blue-600">2</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Completed Tasks
                </div>
                <div className="text-4xl font-bold text-red-600">1</div>
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
          <div className="rounded-lg border border-gray-200 bg-white shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Grievance Overview
                </h3>
                <p className="text-gray-500">View the status of all active Grievances</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Total Grievances
                </div>
                <div className="text-4xl font-bold text-blue-600">1</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Completed Grievances
                </div>
                <div className="text-4xl font-bold text-blue-600">0</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Ongoing Grievances
                </div>
                <div className="text-4xl font-bold text-green-600">1</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-gray-600">
                  Upcoming Grievances
                </div>
                <div className="text-4xl font-bold text-yellow-600">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectManager_Home;
