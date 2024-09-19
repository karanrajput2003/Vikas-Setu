import React from "react";
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Department from "../../components/Department/Sidebar_Department";

function Department_Home() {
  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <Sidebar_Department />
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm md:absolute md:left-64 md:top-64 w-full md:w-[500px] p-4"
      >
        <div className="space-y-1.5 p-6 flex flex-row items-center gap-4">
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
            className="w-8 h-8"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <div className="grid gap-1">
            <h3 className="whitespace-nowrap text-xl md:text-2xl font-semibold leading-none tracking-tight">
              Project Under Department
            </h3>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Total Projects</div>
              <div className="text-4xl font-bold">1</div>
            </div>
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Completed Projects</div>
              <div className="text-4xl font-bold">0</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Ongoing Projects</div>
              <div className="text-4xl font-bold">1</div>
            </div>
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Upcoming</div>
              <div className="text-4xl font-bold">0</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm md:absolute md:left-[800px] md:top-64 w-full md:w-[500px] p-4"
      >
        <div className="space-y-1.5 p-6 flex flex-row items-center gap-4">
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
            className="w-8 h-8"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <div className="grid gap-1">
            <h3 className="whitespace-nowrap text-xl md:text-2xl font-semibold leading-none tracking-tight">
              Task Under Department
            </h3>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Total Tasks</div>
              <div className="text-4xl font-bold">20</div>
            </div>
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Completed Tasks</div>
              <div className="text-4xl font-bold">3</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Ongoing</div>
              <div className="text-4xl font-bold">3</div>
            </div>
            <div className="bg-accent rounded-lg p-4">
              <div className="text-sm font-semibold">Upcoming</div>
              <div className="text-4xl font-bold">14</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Department_Home;
