import React from "react";
import { popularDishes } from "../../constant";

const PopularDishes = () => {
  return (
    <div className="mt-6 px-6">
      <div className="bg-[#1f1f1f] w-full rounded-lg">
        <div className="flex justify-normal items-center px-5 py-5">
          <h1 className="text-white text-md font-semibold tracking-wide">Popular Dishes</h1>

          <a className="text-[#094bff] text-sm font-semibold tracking-wide ml-auto" href="#">
            View All
          </a>
        </div>
        <div className="overflow-auto h-[680px]">
          {popularDishes.map((dish) => {
            return (
              <div className="flex items-center gap-4 bg-[#4e4d4d] rounded-md px-6 py-2 mx-6 mt-3">
                <h1 className="text-white font-semibold text-xl">{dish.id < 10 ? "0" + dish.id : dish.id}</h1>
                <img src={dish.image} alt={dish.name} className="w-[60px] h-[60px] rounded-xl"></img>
                <div>
                  <h1 className="text-white font-semibold text-lg">{dish.name}</h1>
                  <p className="text-gray-400 text-md">{dish.numberOfOrders} orders</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
