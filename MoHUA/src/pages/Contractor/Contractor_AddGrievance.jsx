import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contractor_AddGrievance() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [characterCount, setCharacterCount] = useState(500);
  const [file, setFile] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    console.log(file);
    reset();
    // Here you would typically send the data to your server
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-primary">Grievance / Suggestions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium">Name *</label>
          <input
            id="name"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Mobile Number */}
        <div className="space-y-2">
          <label htmlFor="mobileNumber" className="block font-medium">Mobile Number *</label>
          <input
            id="mobileNumber"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("mobileNumber", { required: "Mobile number is required" })}
          />
          {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="emailId" className="block font-medium">Email ID *</label>
          <input
            id="emailId"
            className="border border-gray-300 p-2 rounded w-full"
            type="email"
            {...register("emailId", { required: "Email is required" })}
          />
          {errors.emailId && <p className="text-red-500 text-sm">{errors.emailId.message}</p>}
        </div>

        {/* District */}
        <div className="space-y-2">
          <label htmlFor="district" className="block font-medium">District *</label>
          <select
            id="district"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("district", { required: "District is required" })}
          >
            <option value="">Select district</option>
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
          </select>
          {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
        </div>

        {/* Taluka */}
        <div className="space-y-2">
          <label htmlFor="taluka" className="block font-medium">Taluka *</label>
          <select
            id="taluka"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("taluka", { required: "Taluka is required" })}
          >
            <option value="">Select taluka</option>
            <option value="taluka1">Taluka 1</option>
            <option value="taluka2">Taluka 2</option>
          </select>
          {errors.taluka && <p className="text-red-500 text-sm">{errors.taluka.message}</p>}
        </div>

        {/* Department */}
        <div className="space-y-2">
          <label htmlFor="department" className="block font-medium">Department *</label>
          <select
            id="department"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("department", { required: "Department is required" })}
          >
            <option value="">Select department</option>
            <option value="dept1">Department 1</option>
            <option value="dept2">Department 2</option>
          </select>
          {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}
        </div>

        {/* Scheme */}
        <div className="space-y-2">
          <label htmlFor="schemeName" className="block font-medium">Scheme Name *</label>
          <select
            id="schemeName"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("schemeName", { required: "Scheme is required" })}
          >
            <option value="">Select scheme</option>
            <option value="scheme1">Scheme 1</option>
            <option value="scheme2">Scheme 2</option>
          </select>
          {errors.schemeName && <p className="text-red-500 text-sm">{errors.schemeName.message}</p>}
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label htmlFor="category" className="block font-medium">Category *</label>
          <select
            id="category"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Grievance Type */}
        <div className="space-y-2">
          <label htmlFor="grievanceType" className="block font-medium">Grievance / Suggestions Type *</label>
          <select
            id="grievanceType"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("grievanceType", { required: "Type is required" })}
          >
            <option value="">Select type</option>
            <option value="grievance">Grievance</option>
            <option value="suggestion">Suggestion</option>
          </select>
          {errors.grievanceType && <p className="text-red-500 text-sm">{errors.grievanceType.message}</p>}
        </div>

        {/* Academic Year */}
        <div className="space-y-2">
          <label htmlFor="academicYear" className="block font-medium">Select Academic Year *</label>
          <select
            id="academicYear"
            className="border border-gray-300 p-2 rounded w-full"
            {...register("academicYear", { required: "Academic year is required" })}
          >
            <option value="">Select year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          {errors.academicYear && <p className="text-red-500 text-sm">{errors.academicYear.message}</p>}
        </div>
      </div>

      {/* Comments */}
      <div className="space-y-2">
        <label htmlFor="comments" className="block font-medium">Comments *</label>
        <textarea
          id="comments"
          className="border border-gray-300 p-2 rounded w-full min-h-[100px]"
          {...register("comments", { 
            required: "Comments are required", 
            maxLength: { value: 500, message: "Max 500 characters" } 
          })}
          onChange={(e) => setCharacterCount(500 - e.target.value.length)}
        ></textarea>
        <p className="text-sm text-muted-foreground">Number of characters left: {characterCount}</p>
        {errors.comments && <p className="text-red-500 text-sm">{errors.comments.message}</p>}
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <label htmlFor="screenshot" className="block font-medium">Upload Screenshot (If any)</label>
        <input 
          id="screenshot" 
          type="file" 
          className="border border-gray-300 p-2 rounded w-full" 
          onChange={handleFileChange} 
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Note: If necessary, your Grievance can be forwarded to the Department or authorities office, so do not use profanity words Otherwise your Grievance will not be considered.
      </p>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Submit Grievance / Suggestion</button>
    </form>
  );
}
