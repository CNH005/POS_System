import React from "react";

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
        <div className=""></div>
      </div>
    </div>
  );
};

export default PopularDishes;
