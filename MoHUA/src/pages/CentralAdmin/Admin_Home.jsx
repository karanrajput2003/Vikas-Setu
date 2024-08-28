import React from "react";
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Admin from "../../components/CentralAdmin/Sidebar_Admin";
import Header_Admin from "../../components/CentralAdmin/Header_Admin";
import Project_Admin from "../../components/CentralAdmin/Project_Admin";

function Admin_Home() {
  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <Sidebar_Admin />
      <Header_Admin />
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
        style={{
          position: "absolute",
          left: "200px",
          top: "250px",
          width: "500px",
        }}
      >
        <div class="space-y-1.5 p-6 flex flex-row items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <div class="grid gap-1">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Project Overview
            </h3>
            <p class="text-sm text-muted-foreground">
              View the status of all active projects.
            </p>
          </div>
        </div>
        <div class="p-6 grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Active Projects</div>
              <div class="text-4xl font-bold">12</div>
            </div>
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Completed Projects</div>
              <div class="text-4xl font-bold">8</div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">On-Time Projects</div>
              <div class="text-4xl font-bold">10</div>
            </div>
            <div class="bg-accent rounded-lg p-4">
              <div class="text-sm font-semibold">Overdue Projects</div>
              <div class="text-4xl font-bold">2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" style={{
          position: "absolute",
          left: "800px",
          top: "250px",
          width: "500px",
        }} data-v0-t="card">
      <div class="space-y-1.5 p-6 flex flex-row items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-8 h-8"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <div class="grid gap-1">
          <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Task Management</h3>
          <p class="text-sm text-muted-foreground">Create, assign, and track tasks for your projects.</p>
        </div>
      </div>
      <div class="p-6 grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-accent rounded-lg p-4">
            <div class="text-sm font-semibold">Total Tasks</div>
            <div class="text-4xl font-bold">142</div>
          </div>
          <div class="bg-accent rounded-lg p-4">
            <div class="text-sm font-semibold">Completed Tasks</div>
            <div class="text-4xl font-bold">98</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-accent rounded-lg p-4">
            <div class="text-sm font-semibold">High Priority Tasks</div>
            <div class="text-4xl font-bold">24</div>
          </div>
          <div class="bg-accent rounded-lg p-4">
            <div class="text-sm font-semibold">Overdue Tasks</div>
            <div class="text-4xl font-bold">12</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Admin_Home;
