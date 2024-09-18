import React from "react";
import MoHUA_Logo from "../assets/MoHUA_LOGO.png";
import G20 from "../assets/g20.png";
import logo_main from "../assets/logo_main.png";
import All from "../assets/header-logo.png";

function MiddleNavbar() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-400">
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
    </>
  );
}

export default MiddleNavbar;
