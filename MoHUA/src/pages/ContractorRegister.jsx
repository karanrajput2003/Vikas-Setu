import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import MiddleNavbar from "../components/MiddleNavbar";
import MainNavbar from "../components/MainNavbar";
import { useForm } from "react-hook-form";

function ContractorRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage("");
  
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Redirect to the dashboard or login page after successful registration
        navigate("/contractorlogin");
        console.log("signedUp")
        //navigate("/dashboard"); // Adjust the path as necessary
      } else {
        // Handle errors, e.g., show a message to the user
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <MainNavbar />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register to new account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username:
              </label>
              <div className="mt-2">
                <input
                  {...register("username")}
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address:
              </label>
              <div className="mt-2">
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mobile_no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile No:
              </label>
              <div className="mt-2">
                <input
                  {...register("mobile_no")}
                  type="number"
                  autoComplete="mobile_no"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="aadhar_no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Aadhar Card No:
              </label>
              <div className="mt-2">
                <input
                  {...register("aadhar_no")}
                  type="number"
                  autoComplete="aadhar_no"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="pan_no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pan Card No:
              </label>
              <div className="mt-2">
                <input
                  {...register("pan_no")}
                  type="number"
                  autoComplete="pan_no"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2">
                <input
                  {...register("photo")}
                  type="file"
                  autoComplete="photo"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              {errorMessage && (
                <div
                  class="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <span class="block sm:inline">{errorMessage}</span>
                </div>
              )}
              {isLoading ? (
                <button
                  disabled={isLoading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Loading...
                </button>
              ) : (
                <button
                  disabled={isLoading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              )}
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Account Already Exists?{" "}
            <Link
              to="/contractorlogin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ContractorRegister;
