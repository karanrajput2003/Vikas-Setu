import React from "react";
import MoHUA_Logo from "../assets/MoHUA_LOGO.png";
import G20 from "../assets/g20.png";
import All from "../assets/header-logo.png";

function MiddleNavbar() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-black">
        <div className="flex items-center space-x-4">
          <div></div>
        </div>
        <div className="flex items-end space-x-4">
          <img
            src={MoHUA_Logo}
            alt="Government of India logo"
            className="h-20 w-36"
          />
          <img src={All} alt="G20 logo" className="h-20 w-auto" />
        </div>
      </header>
    </>
  );
}

export default MiddleNavbar;
