import React from "react";
import { Ordercards } from "../components/orders/Ordercards";

const orders = () => {
  return (
    <section className="bg-[#323232] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex justify-between items-center px-8 mt-5">
        <h1 className="text-[#fffafa] text-2xl font-semibold tracking-wider">Recent Orders </h1>
        <div className="flex gap-4">
          <button className="text-lg text-[#f5f5f5] font-semibold bg-[#4a4a4a] hover:bg-[#5a5a5a] px-5 py-2 rounded-lg">
            All
          </button>
          <button className="text-lg text-[#f5f5f5]">In Progress</button>
          <button className="text-lg text-[#f5f5f5]">Ready</button>
          <button className="text-lg text-[#f5f5f5]">Completed</button>
        </div>
      </div>

      <div className="px-4 py-5 flex">
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
      </div>
    </section>
  );
};

export default orders;
