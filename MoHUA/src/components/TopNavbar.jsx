import React from "react";
import { Link } from "react-router-dom";

function topNavbar() {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#e65100] text-white flex justify-between items-center p-2">
          <div className="flex space-x-4">
            <Link to="/" className="text-sm">
              Skip to Main Content
            </Link>
            <Link to="/" className="text-sm">
              Screen Reader Access
            </Link>
          </div>
          <div className="flex space-x-2">
            <button className="bg-[#e65100] text-white border border-white px-2">
              A-
            </button>
            <button className="bg-[#e65100] text-white border border-white px-2">
              A
            </button>
            <button id="google_translate_element" className="bg-[#e65100] text-white px-2"> </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default topNavbar;
