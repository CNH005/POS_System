import React from "react";
import Greeting from "../components/home/Greeting";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";

const home = () => {
  return (
    <section className="bg-black h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left div */}
      <div className="flex-[3] bg-[#323232]">
        <Greeting />
        <div className="flex items-center w-full gap-3 px-8 py-8">
          <MiniCard title="Total Earning" icon={<BsCashCoin />} number={512} footerNum={1.6} />
          <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.5} />
        </div>
      </div>
      {/* Right div */}
      <div className="flex-[1.5] bg-blue-600"></div>
    </section>
  );
};

export default home;
