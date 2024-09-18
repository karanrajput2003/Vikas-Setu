// import React from "react";
// import { Link } from "react-router-dom";

// function MainNavbar() {
//   return (
//     <div className="w-full">
//       <div className="bg-white/30 backdrop-blur-lg text-black flex justify-between items-center p-4 shadow-md">
//         <div className="flex space-x-6">
//           <Link
//             to="/department"
//             className="text-sm font-medium hover:text-red-500 transition-colors"
//           >
//             Department
//           </Link>
//           <Link
//             to="/admin"
//             className="text-sm font-medium hover:text-red-500 transition-colors"
//           >
//             Admin
//           </Link>
//           <Link
//             to="/field_officer"
//             className="text-sm font-medium hover:text-red-500 transition-colors"
//           >
//             Field Officer
//           </Link>
//           <Link
//             to="/projectmanager"
//             className="text-sm font-medium hover:text-red-500 transition-colors"
//           >
//             Project Manager
//           </Link>
//         </div>
//         <div className="flex space-x-4">
//           <Link
//             to="/login"
//             className="text-sm font-medium hover:text-red-500 transition-colors"
//           >
//             Central Login
//           </Link>
//           <Link
//             to="/departmentlogin"
//             className="text-sm font-medium hover:text-red-500 transition-colors"
//           >
//             Department Login
//           </Link>
//           <Link
//             to="/contractorlogin"
//             className="text-sm font-medium hover:text-red-500 transition-colors"
//           >
//             Contractor Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainNavbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility for mobile devices
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navigation Section */}
      <div className="bg-white shadow-md py-4 md:flex md:justify-center md:space-x-8">
        <div className="flex justify-between items-center px-4 md:hidden">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-8 mt-2 md:mt-0 text-lg font-semibold`}
        >
          <Link
            to="/department"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            Department
          </Link>
          <Link
            to="/admin"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            Admin
          </Link>
          <Link
            to="/field_officer"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            Field Officer
          </Link>
          <Link
            to="/projectmanager"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
           Project Manager
          </Link>
          <Link
            to="/contractor"
            className="block py-2 px-4 text-center md:inline hover:text-blue-600 transition duration-300"
          >
            Contractor
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
