import { useForm } from "react-hook-form";
import { useState } from "react";
import Contractor_Navbar from '../../components/Contractor/Contractor_Navbar';

export default function Contractor_AddGrievance() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [characterCount, setCharacterCount] = useState(500);
  const [file, setFile] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    console.log(file);
    reset();
    // You would typically send the data to your server here
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <Contractor_Navbar />
      {/* Background gradient */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white p-6">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">
              Grievance / Suggestions
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Task Id */}
              <div className="space-y-2">
                <label htmlFor="task_id" className="block font-medium">Task Id *</label>
                <input
                  id="task_id"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("task_id", { required: "Task id is required" })}
                />
                {errors.task_id && <p className="text-red-500 text-sm">{errors.task_id.message}</p>}
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">Name *</label>
                <input
                  id="name"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <label htmlFor="mobileNumber" className="block font-medium">Mobile Number *</label>
                <input
                  id="mobileNumber"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("mobileNumber", { required: "Mobile number is required" })}
                />
                {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="emailId" className="block font-medium">Email ID *</label>
                <input
                  id="emailId"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="email"
                  {...register("emailId", { required: "Email is required" })}
                />
                {errors.emailId && <p className="text-red-500 text-sm">{errors.emailId.message}</p>}
              </div>

              {/* Department */}
              <div className="space-y-2">
                <label htmlFor="department" className="block font-medium">Department level *</label>
                <select
                  id="department"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("department", { required: "Department is required" })}
                >
                  <option value="">Select level</option>
                  <option value="dept1">Inter Department</option>
                  <option value="dept2">Other Department</option>
                </select>
                {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}
              </div>

              {/* Grievance Type */}
              <div className="space-y-2">
                <label htmlFor="grievanceType" className="block font-medium">Grievance / Suggestions Type *</label>
                <select
                  id="grievanceType"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("grievanceType", { required: "Type is required" })}
                >
                  <option value="">Select type</option>
                  <option value="grievance">Grievance</option>
                  <option value="suggestion">Suggestion</option>
                </select>
                {errors.grievanceType && <p className="text-red-500 text-sm">{errors.grievanceType.message}</p>}
              </div>
            </div>

            {/* Other Department */}
            <div className="space-y-2 mb-6">
                <label htmlFor="Other_dept" className="block font-medium">Other Department(If any)</label>
                <input
                  id="Other_dept"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("Other_dept")}
                  placeholder="NA (If Inter Department)"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

            {/* Comments */}
            <div className="space-y-2 mb-6">
              <label htmlFor="comments" className="block font-medium">Comments *</label>
              <textarea
                id="comments"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
                {...register("comments", { 
                  required: "Comments are required", 
                  maxLength: { value: 500, message: "Max 500 characters" } 
                })}
                onChange={(e) => setCharacterCount(500 - e.target.value.length)}
              ></textarea>
              <p className="text-sm text-gray-500">Number of characters left: {characterCount}</p>
              {errors.comments && <p className="text-red-500 text-sm">{errors.comments.message}</p>}
            </div>

            {/* File Upload */}
            <div className="space-y-2 mb-6">
              <label htmlFor="screenshot" className="block font-medium">Upload Screenshot (If any)</label>
              <input 
                id="screenshot" 
                type="file" 
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
                onChange={handleFileChange} 
              />
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Note: If necessary, your Grievance can be forwarded to the Department or authorities office, so do not use profanity words. Otherwise, your Grievance will not be considered.
            </p>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md hover:from-blue-700 hover:to-purple-700 transition duration-200"
            >
              Submit Grievance / Suggestion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
