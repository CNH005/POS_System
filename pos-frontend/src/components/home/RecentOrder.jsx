import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrder = () => {
  return (
    <div className="px-8 py-2">
      <div className="bg-[#1f1f1f] w-full h-[450px] rounded-lg">
        <div className="flex justify-normal items-center px-5 py-5">
          <h1 className="text-white text-lg font-semibold tracking-wide">Recent Orders</h1>

          <a className="text-[#094bff] text-sm font-semibold tracking-wide ml-auto" href="#">
            View All
          </a>
        </div>
        <div className="flex items-center gap-4 rounded-[15px] px-6 py-3 mx-8 bg-[#616060]">
          <FaSearch className="text-white" />

          <input type="text" placeholder="Search" className="bg-[#616060] outline-none text-white" />
        </div>

        <div className="px-8 mt-4 overflow-auto h-[300px]">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
