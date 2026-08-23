import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdOutlineTableBar } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-4 h-16 flex justify-around">
      <button className="flex justify-center  text-[#f5f5f5] w-[200px] rounded-[20px]">
        <FaHome size={20} className="inline mr-2" /> <p>Home</p>
      </button>
      <button className="flex justify-center text-[#f5f5f5] w-[200px] rounded-[20px]">
        <MdOutlineReorder size={20} className="inline mr-2" /> <p>Orders</p>
      </button>
      <button className="flex justify-center  text-[#f5f5f5] w-[200px] rounded-[20px]">
        <MdOutlineTableBar size={20} className="inline mr-2" /> <p>Tables</p>
      </button>
      <button className="flex justify-center  text-[#f5f5f5] w-[200px]  rounded-[20px]">
        <CgMoreO size={20} className="inline mr-2" /> <p>More</p>
      </button>
      <button className="text-[#f5f5f5] bg-yellow-400 rounded-full p-2 absolute items-center bottom-6 ">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};
