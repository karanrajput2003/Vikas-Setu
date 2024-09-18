import React from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <div className="w-full">
      <div className="bg-white/30 backdrop-blur-lg text-black flex justify-between items-center p-4 shadow-md">
        <div className="flex space-x-6">
          <Link
            to="/department"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Department
          </Link>
          <Link
            to="/admin"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Admin
          </Link>
          <Link
            to="/field_officer"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Field Officer
          </Link>
          <Link
            to="/projectmanager"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Project Manager
          </Link>
        </div>
        <div className="flex space-x-4">
          {/* <Link
            to="/login"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Central Login
          </Link>
          <Link
            to="/departmentlogin"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Department Login
          </Link>
          <Link
            to="/contractorlogin"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            Contractor Login
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
