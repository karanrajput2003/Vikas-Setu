import React, { useState, useEffect } from "react";
import TopNavbar from "../../../components/TopNavbar";
import MiddleNavbar from "../../../components/MiddleNavbar";
import Sidebar_Admin from "../../../components/CentralAdmin/Sidebar_Admin";
import Header_Admin from "../../../components/CentralAdmin/Header_Admin";
import { useParams, Link } from "react-router-dom";
import Task_Header_Admin from "../../../components/CentralAdmin/Task_Header_Admin";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Hardcodeimg from "../../../assets/hardcode_images/road-construction.jpg";
import Hardcode from "../../../assets/hardcode_images/KK.jpg";


// G Map
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function subtask3() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const projectData = {
    name: "Oversee the construction of the highway, coordinate with contractors",
    description:
      "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. ",
    startDate: "January 1, 2024",
    endDate: "June 30, 2024",
    status: "Ongoing",
    department: "National Highways Authority of India (NHAI)"
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
              <h3 className="font-semibold mb-2">Department</h3>
              <p className="text-gray-700 text-sm">{projectData.department}</p>
            </div>
          </div>

          <h3 className="font-semibold mt-4">Images / Documents Related to the Task</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div>
              <img src={Hardcodeimg}></img>
            </div>
            <div>
              <img src={Hardcode}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default subtask3;
