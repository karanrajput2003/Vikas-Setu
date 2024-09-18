import React, { useState, useEffect } from "react";
import TopNavbar from "../../../components/TopNavbar";
import MiddleNavbar from "../../../components/MiddleNavbar";
import Sidebar_Department from "../../../components/Department/Sidebar_Department";
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Hardcodeimg from "../../../assets/hardcode_images/road-construction.jpg";
import Hardcode from "../../../assets/hardcode_images/KK.jpg";

function Subtask2() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., API call)
  };

  const { id } = useParams();
  const [contractor, setContractor] = useState(null); // State to track contractor assignment

  // Example project data (replace with actual data fetching logic)
  const projectData = {
    name: "Conduct feasibility studies, route alignment, project tendering",
    description:
      "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets.",
    startDate: "January 1, 2024",
    endDate: "June 30, 2024",
    status: "Completed",
    department: "National Highways Authority of India (NHAI)",
  };

  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <Sidebar_Department />

      <div className="max-w-3xl mx-auto bg-white mt-12 p-6 shadow-lg rounded-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{projectData.name}</h2>
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${projectData.status === "Completed" ? "bg-green-200 text-green-700" : "bg-gray-200 text-gray-700"}`}>
            {projectData.status}
          </span>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-gray-700 text-sm">{projectData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Department</h3>
            <p className="text-gray-700 text-sm">{projectData.department}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">End Date</h3>
            <p className="text-gray-700 text-sm">{projectData.endDate}</p>
          </div>
        </div>

        {/* Conditional Rendering Based on Contractor Assignment */}
        {!contractor ? (
          <>
            <h3 className="font-semibold mt-4 mb-2">Assign to the Contractor</h3>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Task ID */}
              <div className="grid gap-2">
                <label htmlFor="project_id" className="text-sm font-medium">
                  Task ID
                </label>
                <input
                  id="project_id"
                  {...register("project_id", { required: "Task ID is required" })}
                  className={`flex h-10 w-full rounded-md border ${
                    errors.project_id ? "border-red-500" : "border-gray-300"
                  } bg-background px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Enter Task ID"
                />
                {errors.project_id && <span className="text-red-600 text-sm">{errors.project_id.message}</span>}
              </div>

              {/* Contractor Name */}
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Contractor Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: "Contractor Name is required" })}
                  className={`flex h-10 w-full rounded-md border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } bg-background px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Enter Contractor Name"
                />
                {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
              </div>

              {/* Contractor ID */}
              <div className="grid gap-2">
                <label htmlFor="id" className="text-sm font-medium">
                  Contractor ID
                </label>
                <input
                  id="id"
                  {...register("id", { required: "Contractor ID is required" })}
                  className={`flex h-10 w-full rounded-md border ${
                    errors.id ? "border-red-500" : "border-gray-300"
                  } bg-background px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Enter Contractor ID"
                />
                {errors.id && <span className="text-red-600 text-sm">{errors.id.message}</span>}
              </div>

              {/* Contact No */}
              <div className="grid gap-2">
                <label htmlFor="contact" className="text-sm font-medium">
                  Contact No
                </label>
                <input
                  id="contact"
                  type="tel"
                  {...register("contact", {
                    required: "Contact Number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  })}
                  className={`flex h-10 w-full rounded-md border ${
                    errors.contact ? "border-red-500" : "border-gray-300"
                  } bg-background px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Enter Contact Number"
                />
                {errors.contact && <span className="text-red-600 text-sm">{errors.contact.message}</span>}
              </div>

              {/* Approval Document */}
              <div className="grid gap-2">
                <label htmlFor="approval_doc" className="text-sm font-medium">
                  Approval Document
                </label>
                <input
                  id="approval_doc"
                  type="file"
                  {...register("approval_doc", { required: "Approval Document is required" })}
                  className={`flex h-10 w-full rounded-md border ${
                    errors.approval_doc ? "border-red-500" : "border-gray-300"
                  } bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.approval_doc && <span className="text-red-600 text-sm">{errors.approval_doc.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Assign
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Contractor Name</h3>
                <p className="text-gray-700 text-sm">{contractor.name}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact No</h3>
                <p className="text-gray-700 text-sm">{contractor.contact}</p>
              </div>
            </div>
          </>
        )}

        <h3 className="font-semibold mt-6 mb-2">
          Images / Documents Related to the Task
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={Hardcodeimg} alt="Road Construction" className="w-full h-auto rounded-md" />
          </div>
          <div>
            <img src={Hardcode} alt="KK" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Subtask2;
