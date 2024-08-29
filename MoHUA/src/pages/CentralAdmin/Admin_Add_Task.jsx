import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Admin from "../../components/CentralAdmin/Sidebar_Admin";

function Admin_Add_Task() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departments = ["Water", "Gas", "Road", "Light"];

  // Extract project ID from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const projectId = queryParams.get('id');
    if (projectId) {
      setValue('project_id', projectId); // Set the project ID in the form
    }
  }, [setValue]);

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setDepartmentsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <Sidebar_Admin />
      <main className="flex-1 p-4 lg:p-8" style={{ position: 'relative', top: "-430px" }}>
        <section className="bg-white rounded-lg p-6 lg:w-2/3 mx-auto">
          <h2 className="text-xl font-bold mb-4">Add Task</h2>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="project_id">
                Project ID
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="project_id"
                {...register("project_id", { required: true })}
                readOnly
              />
              {errors.project_id && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                Task Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="description">
                Description
              </label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="description"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="start_date">
                Start Date
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="start_date"
                type="date"
                {...register("startDate", { required: true })}
              />
              {errors.startDate && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="end_date">
                End Date
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="end_date"
                type="date"
                {...register("endDate", { required: true })}
              />
              {errors.endDate && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="grid gap-2 relative">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="departments">
                Departments
              </label>
              <button
                type="button"
                onClick={() => setDepartmentsOpen(!departmentsOpen)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>{selectedDepartment || "Select a department"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down h-4 w-4 opacity-50 ${departmentsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {departmentsOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                  {departments.map((department) => (
                    <li
                      key={department}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDepartmentSelect(department)}
                    >
                      {department}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-indigo-600 text-white"
              type="submit"
            >
              Create Task
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Admin_Add_Task;
