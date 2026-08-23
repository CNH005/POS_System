import React from "react";
import Greeting from "../components/home/Greeting";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrder from "../components/home/RecentOrder";
import PopularDishes from "../components/home/PopularDishes";

const home = () => {
  return (
    <section className="bg-[#323232] h-[calc(100vh-5rem)] overflow-hidden flex">
      {/* Left div */}
      <div className="flex-[3] bg-[#323232]">
        <Greeting />
        <div className="flex items-center w-full gap-3 px-8 py-8">
          <MiniCard title="Total Earning" icon={<BsCashCoin />} number={512} footerNum={1.6} />
          <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.5} />
        </div>
        <RecentOrder />
      </div>
      {/* Right div */}
      <div className="flex-[1.5]">
        <PopularDishes />
      </div>
    </section>
  );
};

export default home;
