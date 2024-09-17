import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { TbReportSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaExclamationCircle } from "react-icons/fa";

function Sidebar_Contractor() {
  return (
    <>
      <aside
        className="left-10 z-10 hidden w-48 flex-col border-r bg-background sm:flex"
        style={{ top: "157px" }}
      >
        <nav className="flex flex-col items-start gap-4 px-2 sm:py-5">
          <Link
            className="flex items-center gap-2 p-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            to="/contractor"
          >
            <FaHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            className="flex items-center gap-2 p-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            to="/contractor/projects"
          >
            <GrProjects className="h-5 w-5" />
            <span>Tasks</span>
          </Link>
          <Link
            className="flex items-center gap-2 p-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            to="/contractor"
          >
            <SlCalender className="h-5 w-5" />
            <span>Calendar</span>
          </Link>
          <Link
            className="flex items-center gap-2 p-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            to="/contractor"
          >
            <TbReportSearch className="h-5 w-5" />
            <span>Reports</span>
          </Link>
          <Link
            className="flex items-center gap-2 p-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            to="/contractor/grievances"
          >
            <FaExclamationCircle className="h-5 w-5" />
            <span>Grievances</span>
          </Link>
          <Link
            className="flex items-center gap-2 p-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            to="/contractor/profile"
          >
            <IoSettings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
        <nav className="mt-auto flex flex-col items-start gap-4 px-2 sm:py-5">
          <Link
            to="/"
            className="flex items-center gap-2 p-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <FiLogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar_Contractor;
