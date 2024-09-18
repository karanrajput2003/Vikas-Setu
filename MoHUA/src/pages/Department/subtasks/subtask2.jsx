import React, { useState } from "react";
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
  };

  const { id } = useParams();
  const projectData = {
    name: "Conduct feasibility studies, route alignment, project tendering",
    description: "Launching our revolutionary new product line across multiple markets.",
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

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8 p-6" style={{ position: "relative", top: "-380px" }}>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{projectData.name}</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {projectData.status}
          </span>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Description</h3>
          <p className="text-gray-600">{projectData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">Department</h3>
            <p className="text-gray-600">{projectData.department}</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">End Date</h3>
            <p className="text-gray-600">{projectData.endDate}</p>
          </div>
        </div>

        {/* Contractor Assignment Form */}
        <div className="mt-8">
          <h3 className="font-semibold text-2xl mb-4 text-gray-900">Assign Contractor</h3>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Task ID</label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("project_id", { required: true })}
                />
                {errors.project_id && <span className="text-red-600">This field is required</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contractor Name</label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("contractor_name", { required: true })}
                />
                {errors.contractor_name && <span className="text-red-600">This field is required</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Contractor ID</label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("contractor_id", { required: true })}
                />
                {errors.contractor_id && <span className="text-red-600">This field is required</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("contractor_contact", { required: true })}
                />
                {errors.contractor_contact && <span className="text-red-600">This field is required</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Approval Document</label>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                {...register("approval_doc", { required: true })}
              />
              {errors.approval_doc && <span className="text-red-600">This field is required</span>}
            </div>

            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Assign Contractor
            </button>
          </form>
        </div>

        {/* Project Manager Assignment Form */}
        <div className="mt-10">
          <h3 className="font-semibold text-2xl mb-4 text-gray-900">Assign Project Manager</h3>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Manager Name</label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("pm_name", { required: true })}
                />
                {errors.pm_name && <span className="text-red-600">This field is required</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Manager ID</label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  {...register("pm_id", { required: true })}
                />
                {errors.pm_id && <span className="text-red-600">This field is required</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("pm_contact", { required: true })}
              />
              {errors.pm_contact && <span className="text-red-600">This field is required</span>}
            </div>

            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Assign Project Manager
            </button>
          </form>
        </div>

        {/* <div className="mt-10">
          <h3 className="font-semibold text-2xl mb-4 text-gray-900">Images / Documents Related to the Task</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={Hardcodeimg} alt="Road construction" className="rounded-lg shadow-md" />
            <img src={Hardcode} alt="Task related document" className="rounded-lg shadow-md" />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Subtask2;
