import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Manager_Navbar from "../../components/ProjectManager/Manager_Navbar.jsx";
import { Send } from 'lucide-react';
import { Link } from "react-router-dom";

function ProjectManager_TaskDetail() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [grievances, setGrievances] = useState([]);
  const [newGrievanceMessage, setNewGrievanceMessage] = useState({});
  const [characterCount, setCharacterCount] = useState(500);

  const projectData = {
    name: "Land Acquisition & Environmental Clearances",
    description:
      "Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets. Launching our revolutionary new product line across multiple markets.",
    startDate: "July 1, 2024",
    endDate: "June 30, 2025",
    status: "Ongoing",
    department: "National Highways Authority of India (NHAI)"
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
        name: "John Doe",
        mobileNumber: "9876543210",
        emailId: "john@example.com",
        department: "dept1",
        grievanceType: "grievance",
        otherDept: "",
        comments: "Delay in receiving environmental clearances.",
        status: "Pending",
      },
      {
        grievanceId: 2,
        taskId: "12346",
        name: "Jane Smith",
        mobileNumber: "1234567890",
        emailId: "jane@example.com",
        department: "dept2",
        grievanceType: "suggestion",
        otherDept: "Department of Forestry",
        comments: "Issues with land acquisition process.",
        status: "In Progress",
      },
    ];
    setGrievances(fetchedGrievances);
  }, []);

  // Handle form submission for uploading documents
  const onSubmit = (data) => {
    const files = Array.from(data.documents).map(file => ({
      file,
      uploadDate: currentDate
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
          sender: 'Manager', // This should be dynamic based on the user role
          content: newMessage,
          timestamp: new Date(),
        },
      ]);
      setNewMessage('');
    }
  };

  // Handle sending a response to a grievance
  const sendGrievanceMessage = (id) => {
    if (newGrievanceMessage[id]?.trim()) {
      const updatedGrievances = grievances.map(grievance =>
        grievance.grievanceId === id
          ? { ...grievance, comments: newGrievanceMessage[id], status: "Resolved" }
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
      {/* <h1 className="text-4xl mb-6 text-center">TASK DETAILS</h1>
        <hr></hr> */}
        <section className="bg-white p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {projectData.name}
          </h2>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mb-4">
            {projectData.status}
          </span>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Department
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {projectData.department}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Description
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {projectData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Start Date
              </h3>
              <p className="text-gray-600 text-base">{projectData.startDate}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                End Date
              </h3>
              <p className="text-gray-600 text-base mb-5">
                {projectData.endDate}
              </p>
            </div>
          </div>
          <Link
            to="/contractor/addgrievance?id=123"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            Add Grievance to Other Department
          </Link>
        </section>

        {/* Documents Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
          <div className="space-y-4">
            {uploadedFiles.length > 0 ? (
              uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{file.file.name}</span>
                  <span className="text-gray-500 text-sm">{file.uploadDate}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No documents uploaded yet.</p>
            )}
          </div>
        </section>

        {/* Chat section */}
        <div className="border rounded-lg p-4 mt-8 bg-white shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Project Chat</h2>
          <div className="h-[300px] overflow-y-auto mb-4 p-2 bg-gray-100 rounded-lg">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div key={index} className={`mb-4 p-3 rounded-lg ${message.sender === 'Contractor' ? 'bg-gray-200 text-gray-800 self-end' : 'bg-gray-200 text-gray-700 self-start'}`}>
                  <div className="flex items-center mb-1">
                    <span className="font-semibold">{message.sender}: </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p>{message.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No messages yet.</p>
            )}
          </div>
          <div className="flex items-center border-t pt-2 mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-grow border rounded-lg px-3 py-2 text-gray-700"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
            </button>
          </div>
        </div>

        {/* Grievances Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Grievances</h2>
          <div className="space-y-6">
            {grievances.map((grievance) => (
              <div key={grievance.grievanceId} className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Task ID: {grievance.taskId}</h3>
                <p className="text-gray-600 mb-2"><strong>Name:</strong> {grievance.name}</p>
                <p className="text-gray-600 mb-2"><strong>Mobile Number:</strong> {grievance.mobileNumber}</p>
                <p className="text-gray-600 mb-2"><strong>Email ID:</strong> {grievance.emailId}</p>
                <p className="text-gray-600 mb-2"><strong>Department:</strong> {grievance.department}</p>
                <p className="text-gray-600 mb-2"><strong>Type:</strong> {grievance.grievanceType}</p>
                <p className="text-gray-600 mb-2"><strong>Other Department:</strong> {grievance.otherDept}</p>
                <p className="text-gray-600 mb-4"><strong>Comments:</strong> {grievance.comments}</p>
                <p className="text-gray-600 mb-2"><strong>Status:</strong> {grievance.status}</p>
                
                {grievance.status !== "Resolved" && (
                  <div className="mt-4">
                    <textarea
                      placeholder="Add your response here..."
                      value={newGrievanceMessage[grievance.grievanceId] || ''}
                      onChange={(e) => setNewGrievanceMessage({
                        ...newGrievanceMessage,
                        [grievance.grievanceId]: e.target.value
                      })}
                      className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                    ></textarea>
                    <button
                      onClick={() => sendGrievanceMessage(grievance.grievanceId)}
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

export default ProjectManager_TaskDetail;
