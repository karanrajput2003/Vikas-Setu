import React from 'react'
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Admin from "../../components/CentralAdmin/Sidebar_Admin";
import { CgProfile } from "react-icons/cg";

function Department_Profile() {
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
        <CgProfile className="h-5 w-5" />
          <div class="grid gap-1">
            {/* <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Profile
            </h3> */}
          </div>
        </div>
        <div class="p-6 grid gap-4">
          <div class="grid grid-cols-2 gap-4">
          <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Name</div>
              <div class="text-4xl font-bold">Sample</div>
            </div>
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Email:</div>
              <div class="text-4xl font-bold">admin@gmail.com</div>
            </div>
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Mobile No:</div>
              <div class="text-4xl font-bold">9377883377</div>
            </div>
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Aadhar No:</div>
              <div class="text-4xl font-bold">7870 6544 5655</div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Pan No</div>
              <div class="text-4xl font-bold">GJS82902</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Department_Profile