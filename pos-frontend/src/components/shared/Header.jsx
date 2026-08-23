import React from "react";
import logo from "../../assets/resources/logo.png";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-black">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img src={logo} className="h-8 w-8" alt="logo" />
        <h1 className="text-lg font-semibold text-white">Restro</h1>
      </div>
      {/* Search bar */}
      <div className="flex items-center gap-4 rounded-[15px] px-5 py-2 bg-[#222222] w-[300px]">
        <FaSearch className="text-white" />
        <input type="text" placeholder="Search" className="bg-[#222222] outline-none text-white" />
      </div>

      {/* Login detail */}
      <div className="flex items-center gap-3">
        <div className="bg-black rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-white text-xl" />
        </div>
        <div className="flex cursor-pointer">
          <FaUserCircle className="text-white text-2xl" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-md text-white font-semibold">Matthew</h1>
          <p className="text-xs text-[#cec3c3]">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
