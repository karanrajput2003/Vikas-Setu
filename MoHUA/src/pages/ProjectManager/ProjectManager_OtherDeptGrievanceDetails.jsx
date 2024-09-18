import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Manager_Navbar from "../../components/ProjectManager/Manager_Navbar.jsx";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectManager_OtherDeptGrievanceDetails() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [grievances, setGrievances] = useState([]);
  const [newGrievanceMessage, setNewGrievanceMessage] = useState({});
  const [characterCount, setCharacterCount] = useState(500);

  const projectData = {
    name: "Land Acquisition & Environmental Clearances",
    department_level: "NA",
    status: "Ongoing",
    type: "Grievance",
    Other_Department: "NHAI",
    Comments: "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets.",
  };

  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    // Fetch grievances from an API or state management
    // This is a placeholder for demonstration
    const fetchedGrievances = [
      {
        grievanceId: 1,
        taskId: "12346",
        name: "Kksdad Djdk",
        mobileNumber: "9876543210",
        emailId: "Kksdad@example.com",
        department: "dept1",
        grievanceType: "grievance",
        otherDept: "NHAI",
        comments: "Delay in receiving environmental clearances.",
        status: "Pending",
      },
    ];
    setGrievances(fetchedGrievances);
  }, []);

  // Handle form submission for uploading documents
  const onSubmit = (data) => {
    const files = Array.from(data.documents).map((file) => ({
      file,
      uploadDate: currentDate,
    }));
    setUploadedFiles(files);
    reset();
  };

  // Handle sending a new chat message
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          sender: "Manager", // This should be dynamic based on the user role
          content: newMessage,
          timestamp: new Date(),
        },
      ]);
      setNewMessage("");
    }
  };

  // Handle sending a response to a grievance
  const sendGrievanceMessage = (id) => {
    if (newGrievanceMessage[id]?.trim()) {
      const updatedGrievances = grievances.map((grievance) =>
        grievance.grievanceId === id
          ? {
              ...grievance,
              comments: newGrievanceMessage[id],
              status: "Resolved",
            }
          : grievance
      );
      setGrievances(updatedGrievances);
      setNewGrievanceMessage({ ...newGrievanceMessage, [id]: "" });
    }
  };

  const handleFileChange = (e) => {
    // Handle file change
  };

  return (
    <>
      <Manager_Navbar />
      {/* Main Content Section */}
      <main className="mt-6 px-4 md:px-6 py-4">
      <h1 className="text-4xl mb-6 text-center">
      GRIEVANCE DETAILS
            </h1>
            <hr></hr>
        <section className="bg-white p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {projectData.name}
          </h2>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mb-4">
            {projectData.status}
          </span>
          {/* q */}
          {/* <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Type
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {projectData.type}
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Department
              </h3>
              <p className="text-gray-600 text-base mb-5">{projectData.Other_Department}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Documents(If any)
              </h3>
              <p className="text-gray-600 text-base">{projectData.Other_Department}</p>
            </div>
          </div> */}
        </section>


        {/* Grievances Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 -mt-10">
          <h2 className="text-xl font-semibold mb-4">Grievances</h2>
          <div className="space-y-6">
            {grievances.map((grievance) => (
              <div
                key={grievance.grievanceId}
                className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Task ID: {grievance.taskId}
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Name:</strong> {grievance.name}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Mobile Number:</strong> {grievance.mobileNumber}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Email ID:</strong> {grievance.emailId}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Department:</strong> {grievance.otherDept}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Type:</strong> {grievance.grievanceType}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Comments:</strong> {grievance.comments}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Status:</strong> {grievance.status}
                </p>

                {grievance.status !== "Resolved" && (
                  <div className="mt-4">
                    <textarea
                      placeholder="Add your response here..."
                      value={newGrievanceMessage[grievance.grievanceId] || ""}
                      onChange={(e) =>
                        setNewGrievanceMessage({
                          ...newGrievanceMessage,
                          [grievance.grievanceId]: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                    ></textarea>
                    <div className="space-y-2 mb-6">
                      <label htmlFor="screenshot" className="block font-medium">
                        Upload Documents/Imagess (If any)
                      </label>
                      <input
                        id="screenshot"
                        type="file"
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleFileChange}
                      />
                    </div>
                    <button
                      onClick={() =>
                        sendGrievanceMessage(grievance.grievanceId)
                      }
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 mt-2 rounded-md hover:from-blue-700 hover:to-purple-700 transition duration-200"
                    >
                      Submit Response
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default ProjectManager_OtherDeptGrievanceDetails;
