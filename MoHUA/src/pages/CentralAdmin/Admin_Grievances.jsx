import React from "react";
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Admin from "../../components/CentralAdmin/Sidebar_Admin";
import { FaExclamationCircle } from "react-icons/fa";
import GrievanceList from "../../components/GrievanceList";

function Admin_Grievances() {
  return (
    <div>
      <TopNavbar />
      <MiddleNavbar />
      <Sidebar_Admin />
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
        style={{
          position: "absolute",
          left: "200px",
          top: "200px",
        }}
      >
        <div class="space-y-1.5 p-6 flex flex-row items-center gap-4">
          {/* <FaExclamationCircle className="h-5 w-5" /> */}
          <div>
            <GrievanceList />
          </div>
          <div class="grid gap-1">
            {/* <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Profile
            </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Grievances;
