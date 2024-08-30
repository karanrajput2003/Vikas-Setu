import React, { useState, useEffect } from "react";
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Admin from "../../components/CentralAdmin/Sidebar_Admin";
import Header_Admin from "../../components/CentralAdmin/Header_Admin";
import { useParams, Link } from "react-router-dom";
import Task_Header_Admin from "../../components/CentralAdmin/Task_Header_Admin";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Hardcodeimg from "../../assets/hardcode_images/road-construction.jpg";
import Hardcode from "../../assets/hardcode_images/KK.jpg";


// G Map
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Department_Task_Details() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const projectData = {
    name: "Project Planning & Initiation",
    description:
      "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. ",
    startDate: "January 1, 2024",
    endDate: "June 30, 2024",
    status: "Completed",
  };

  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <Sidebar_Admin />
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
                      Conduct feasibility studies, route alignment, project tendering
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Completed
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      National Highways Authority of India (NHAI)
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      March 2025 - June 2025  
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <Link
                          to="/department/subtask_details2"
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

export default Department_Task_Details;
