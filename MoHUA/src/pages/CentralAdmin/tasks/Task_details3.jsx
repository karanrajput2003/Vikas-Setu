import React, { useState, useEffect } from "react";
import TopNavbar from "../../../components/TopNavbar";
import MiddleNavbar from "../../../components/MiddleNavbar";
import Sidebar_Admin from "../../../components/CentralAdmin/Sidebar_Admin";
import { useParams, Link } from "react-router-dom";


// G Map
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Task_details3() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const projectData = {
    name: "Pre-Construction Activities",
    description:
      "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. ",
    startDate: "July 1, 2025",
    endDate: "December 31, 2025",
    status: "Upcoming",
  };

  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <Sidebar_Admin />
      <header
        class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
        style={{ position: "absolute", top: "180px", left: "190px" }}
      >
        <div class="flex items-center">
          <div class="ml-auto flex items-center gap-2">
            <Link
              to={`/admin/addtask?id=${53}`}
              class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 h-8 gap-1"
            >
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                + Add Sub Tasks
              </span>
            </Link>
          </div>
        </div>
      </header>
      <div
        className="max-w-3xl mx-auto bg-white"
        style={{ position: "relative", top: "-380px" }}
      >
        <div className="mt-6 px-6 py-4">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2">{projectData.name}</h2>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {projectData.status}
            </span>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-700 text-sm">{projectData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div>
              <h3 className="font-semibold mb-2">Start Date</h3>
              <p className="text-gray-700 text-sm">{projectData.startDate}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">End Date</h3>
              <p className="text-gray-700 text-sm">{projectData.endDate}</p>
            </div>
          </div>

          {/* <h3 className="font-semibold mt-4">Images / Documents Related to the Task</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div>
              <img src={Hardcodeimg}></img>
            </div>
            <div>
              <img src={Hardcode}></img>
            </div>
          </div> */}
          <main class="grid flex-1 flex-col items-start p-4 ">
            <div class="p-6">
              <div class="">
                <table class="caption-bottom text-sm">
                  <thead class="[&amp;_tr]:border-b">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Sub Tasks
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Status
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Department
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        Timeline
                      </th>
                      <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody class="[&amp;_tr:last-child]:border-0">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      Plan relocation of water pipelines, drainage system design
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Upcoming
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Water and Sewerage Departments
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      July 2025 - September 2025
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <Link
                          to={`/admin/task_details?id=${123}`}
                          class="text-indigo-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          aria-haspopup="true"
                          type="button"
                          id="radix-:r17:"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      Coordinate the relocation of gas pipelines, ensure safety protocols.
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Upcoming
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Gas Distribution Department
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      July 2025 - September 2025
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <Link
                          to={`/admin/task_details?id=${123}`}
                          class="text-indigo-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          aria-haspopup="true"
                          type="button"
                          id="radix-:r17:"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      Plan relocation of electrical infrastructure, street lighting plans
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Upcoming
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Electricity Boards/Departments
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      October 2025 - December 2025
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <Link
                          to={`/admin/task_details?id=${123}`}
                          class="text-indigo-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          aria-haspopup="true"
                          type="button"
                          id="radix-:r17:"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      Coordinate relocation of telecom cables, ensure network continuity
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Upcoming
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Minister of Telecommunication
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      October 2025 - December 2025
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <Link
                          to={`/admin/task_details?id=${123}`}
                          class="text-indigo-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          aria-haspopup="true"
                          type="button"
                          id="radix-:r17:"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      Design road-over-bridges (ROBs) or underpasses where the highway intersects rail lines
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Upcoming
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Indian Railways
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      October 2025 - December 2025
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <Link
                          to={`/admin/task_details?id=${123}`}
                          class="text-indigo-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                          aria-haspopup="true"
                          type="button"
                          id="radix-:r17:"
                          aria-expanded="false"
                          data-state="closed"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Task_details3;
