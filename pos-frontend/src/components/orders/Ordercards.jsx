import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

export const Ordercards = () => {
  return (
    <div className=" w-[450px] mb-4 ml-5 p-5 rounded-lg bg-[#4a4a4a]">
      <div className="flex items-center gap-4">
        <button className="bg-[#f67119] text-white p-3 font-bold rounded-lg">AM</button>

        <div className="flex-1 flex items-center justify-between ">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-lg font-bold text-white tracking-wide">Matthew Mike</h1>
            <p className="text-gray-300 text-sm">#102 | Dine In</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-green-600 px-2 py-1 bg-green-900 rounded-lg">
              <FaCheckDouble className="inline mr-2" />
              Ready
            </p>
            <p className="text-gray-300 text-sm">
              <FaCircle className="inline mr-2 text-green-600" />
              Ready to service
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-gray-300">
        <p> September 15, 2026 1:30 PM</p>
        <p>5 items</p>
      </div>
      <hr className="mt-2" />
      <div className="flex items-center justify-between mt-2 text-gray-300">
        <h1 className="font-bold text-xl">Total</h1>
        <p className="font-semibold text-xl">$28.00</p>
      </div>
    </div>
  );
};
