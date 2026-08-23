import React from "react";

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-[#1f1f1f] py-5 px-5 rounded-lg w-[50%]">
      <div className="flex items-start justify-between">
        <h1 className="text-[#fffafa] text-2xl font-semibold tracking-wide">{title}</h1>
        <button
          className={`${title === "Total Earning" ? "bg-[#21f704]" : "bg-[#f67119]"}  
          p-3 rounded-lg text-white text-2xl`} //same theory with - {`hello ${title}`} (using backticks)
        >
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-[#d0c4c4] text-4xl font-bold mt-2">{number === 512 ? "$ " + number : number}</h1>
        <h1 className="text-[#d0c4c4] text-lg font-bold mt-2">
          <spam className="text-green-500">{footerNum}% </spam>than yesterday
        </h1>
      </div>
    </div>
  );
};

export default MiniCard;
