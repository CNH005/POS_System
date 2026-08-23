import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex item-center gap-5 mb-4">
      <button className="bg-[#f67119] text-white p-3 font-bold rounded-lg">AM</button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-lg font-bold text-white tracking-wide">Matthew Mike</h1>
          <p className="text-gray-300 text-sm">7 Items</p>
        </div>
        <div>
          <h1 className="text-yellow-500 font-semibold border border-yellow-500 px-4 py-2 rounded-md">Table No: 5</h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-green-600 px-4">
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
  );
};

export default OrderList;
