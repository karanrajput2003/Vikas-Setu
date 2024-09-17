import React, { useState, useEffect } from "react";
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Admin from "../../components/CentralAdmin/Sidebar_Admin";
import Header_Admin from "../../components/CentralAdmin/Header_Admin";
import { useParams, Link } from "react-router-dom";
import Task_Header_Admin from "../../components/CentralAdmin/Task_Header_Admin";
import { CalendarIcon, ClockIcon } from "lucide-react";
import map from "../../assets/map.png";

// G Map
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Admin_Project_Details() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const projectData = {
    name: "Delhi-Mumbai Expressway",
    description:
      "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. ",
    department: "Ministry of Road Transport and Highways (MoRTH)",
    location: "Global",
    startDate: "2024-01-01",
    endDate: "2029-01-01",
    budget: "₹1,00,000 Crores",
    status: "Upcoming",
  };

  useEffect(() => {
    // Just Sample......  U can use your api call to get data from database...............
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProject();
  }, [id]);

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
              <span class="">
                + Add Task
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
              {projectData.department}
            </span>
          </div>
          <h3 className="font-semibold mb-2">Project Location</h3>
          {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerClassName="w-full h-64 rounded-lg"
              center={{ lat: 40.7128, lng: -74.006 }} // New York coordinates
              zoom={10}
            >
              <Marker position={{ lat: 40.7128, lng: -74.006 }} />
            </GoogleMap>
          </LoadScript> */}
          <Link to="https://www.google.com/maps/place/Delhi+-+Mumbai+Expy/@21.0541683,73.0535835,14.38z/data=!4m6!3m5!1s0x3be03916c2847f7d:0x6cddc58fbf14207c!8m2!3d21.0521522!4d73.0546788!16s%2Fg%2F11f5l8m367?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D">
            <img src={map} className="rounded-lg" />
          </Link>
        </div>
        <div className="px-6 py-4">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-700 text-sm">{projectData.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 py-4">
            <div>
              <h3 className="font-semibold mb-2">Start Date</h3>
              <p className="text-gray-700 text-sm">{projectData.startDate}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">End Date</h3>
              <p className="text-gray-700 text-sm">{projectData.endDate}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Budget</h3>
              <p className="text-gray-700 text-sm">{projectData.budget}</p>
            </div>
          </div>
        </div>
        <main class="grid flex-1 flex-col items-start p-4 ">
          <div class="p-6">
            <div class="">
              <table class="caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                  <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Tasks
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                      Status
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      Start Date
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      End Date
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody class="[&amp;_tr:last-child]:border-0">
                  <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                      Project Planning & Initiation
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
                      January 1, 2024
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      June 30, 2024
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
                      Land Acquisition & Environmental Clearances
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                      <div
                        class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                        data-v0-t="badge"
                      >
                        Ongoing
                      </div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      July 1, 2024
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      June 30, 2025
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Link
                        to="/admin/task_details2"
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
                      Pre-Construction Activities
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
                      July 1, 2025
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      December 31, 2026
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Link
                        to="/admin/task_details3"
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
                      Main Construction Phase
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
                      January 1, 2026
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      December 31, 2027
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Link
                        to="/admin/task_details4"
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
                      Finalization & Quality Checks
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
                      January 1, 2028
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      June 30, 2028
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Link
                        to="/admin/task_details5"
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
                      Integration & Handover
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
                      July 1, 2028
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      December 31, 2028
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Link
                        to="/admin/task_details6"
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
                      Highway Inauguration & Operation
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
                      January 1, 2030
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                      -
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <Link
                        to="/admin/task_details7"
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
    </>
  );
}

export default Admin_Project_Details;
