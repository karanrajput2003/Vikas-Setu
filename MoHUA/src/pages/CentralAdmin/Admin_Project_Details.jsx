import React, { useState, useEffect } from 'react';
import TopNavbar from "../../components/TopNavbar";
import MiddleNavbar from "../../components/MiddleNavbar";
import Sidebar_Admin from "../../components/CentralAdmin/Sidebar_Admin";
import Header_Admin from "../../components/CentralAdmin/Header_Admin";
import { useParams, Link } from 'react-router-dom';
import Task_Header_Admin from '../../components/CentralAdmin/Task_Header_Admin';

// G Map
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Admin_Project_Details() {
    const [project, setProject] = useState(null);
    const { id } = useParams();
    const projectData = {
        name: "Sample Project",
        description: "This is a sample project description. It would typically contain details about the project's goals, scope, and other relevant information.",
        location: "New York, NY",
        startDate: "2023-06-01",
        endDate: "2023-12-31",
        department: "Engineering",
        budget: "$100,000"
    }

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
            <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6" style={{ position: 'absolute', top: '180px', left: '120px' }}>
                <div class="flex items-center">
                    <div class="ml-auto flex items-center gap-2">
                        <Link to={`/admin/addtask?id=${53}`}class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 h-8 gap-1">
                            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">+ Add Task</span>
                        </Link >
                    </div>
                </div>
            </header>
            <div className="max-w-3xl mx-auto bg-white" style={{ position: 'relative', top: "-380px" }}>
                <div className="mt-6 px-6 py-4">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-bold mb-2">{projectData.name}</h2>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            {projectData.department}
                        </span>
                    </div>
                    <h3 className="font-semibold mb-2">Project Location</h3>
                    <LoadScript googleMapsApiKey="YOUR_API_KEY">
                        <GoogleMap
                            mapContainerClassName="w-full h-64 rounded-lg"
                            center={{ lat: 40.7128, lng: -74.0060 }} // New York coordinates
                            zoom={10}
                        >
                            <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className="px-6 py-4">
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-gray-700 text-sm">{projectData.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
            </div>
        </>
    );
}

export default Admin_Project_Details;
