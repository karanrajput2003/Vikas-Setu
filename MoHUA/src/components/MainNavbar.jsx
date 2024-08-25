import React from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#808080] text-white flex justify-between items-center p-2">
          <div className="flex space-x-4">
            <Link to="/" className="text-sm">
              LLLLL
            </Link>
            <Link to="/" className="text-sm">
              FFFFF
            </Link>
            <Link to="/" className="text-sm">
              KKKKK
            </Link>
          </div>
          <div className="flex space-x-2">
            <Link to="/login" className="text-sm">
              Central Login
            </Link>
            <Link to="/departmentlogin" className="text-sm">
              Department Login
            </Link>
            <Link to="/contractorlogin" className="text-sm">
              Contractor Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
