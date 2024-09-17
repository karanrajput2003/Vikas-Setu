import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo_main from "../../assets/logo_main.png";
import MoHUA_Logo from "../../assets/MoHUA_LOGO.png";
import All from "../../assets/header-logo.png";
import { Send } from 'lucide-react';

function ProjectManager_TaskDetail() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
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

  // Handle form submission
  const onSubmit = (data) => {
    const files = Array.from(data.documents).map(file => ({
      file,
      uploadDate: currentDate
    }));
    setUploadedFiles(files);
    reset();
  };

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

  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg">
        <div className="flex items-start space-x-4">
          <img
            src={logo_main}
            alt="Government of India logo"
            className="h-20 w-20"
          />
        </div>
        <div className="flex items-end space-x-4">
          <img src={MoHUA_Logo} alt="MoHUA Logo" className="h-20 w-36" />
          <img
            src={All}
            alt="G20 logo"
            className="h-20 w-auto hidden md:block"
          />
        </div>
      </header>

      {/* Navigation Section */}
      <div className="w-full bg-white shadow-md py-4">
        <div className="flex justify-center space-x-8 text-lg font-semibold">
          <Link
            to="/projectmanager"
            className="hover:text-blue-600 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/projectmanager/tasks"
            className="hover:text-blue-600 transition duration-300"
          >
            My Tasks
          </Link>
          <Link
            to="/projectmanager/profile"
            className="hover:text-blue-600 transition duration-300"
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="mt-6 px-4 md:px-6 py-4">
        <section className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {projectData.name}
          </h2>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mb-4">
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
              <p className="text-gray-600 text-base">{projectData.endDate}</p>
            </div>
          </div>
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
      </main>
    </>
  );
}

export default ProjectManager_TaskDetail;
