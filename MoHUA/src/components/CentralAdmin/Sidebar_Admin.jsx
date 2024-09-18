import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { TbReportSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { FaExclamationCircle } from "react-icons/fa";

function Sidebar_Admin() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="sm:hidden flex justify-between items-center px-4 py-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-30 top-0 left-0 h-full w-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static sm:w-48 sm:flex sm:flex-col shadow-xl`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col h-full justify-between">
          {/* Navigation links */}
          <nav className="mt-6">
            <Link
              className="flex items-center gap-3 px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-colors"
              to="/admin"
            >
              <FaHome className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-colors"
              to="/admin/projects"
            >
              <GrProjects className="h-5 w-5" />
              <span>Projects</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-colors"
              to="/admin/calendar"
            >
              <SlCalender className="h-5 w-5" />
              <span>Calendar</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-colors"
              to="/admin/reports"
            >
              <TbReportSearch className="h-5 w-5" />
              <span>Reports</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-colors"
              to="/admin/grievances"
            >
              <FaExclamationCircle className="h-5 w-5" />
              <span>Grievances</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-colors"
              to="/admin/profile"
            >
              <IoSettings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Logout link */}
          <nav className="mb-4">
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-2 text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <FiLogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar_Admin;
