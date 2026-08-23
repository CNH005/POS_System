import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000); //setInterval do(()=>...) this every 1 sec(1000)
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
  };

  const fortmatTime = (date) => {
    return `${String(date.getHours()).padStart(2, "0")} : ${String(date.getMinutes()).padStart(2, "0")} :
    ${String(date.getSeconds()).padStart(2, "0")} `;
  };
  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#fffafa] text-2xl font-semibold tracking-wide">Good Morning, Mike</h1>
        <p className="text-[#b6b4b4] text-sm">Serve the Customer with Joy</p>
      </div>
      <div>
        <h1 className="text-[#fffafa] text-3xl font-bold tracking-wide">{fortmatTime(dateTime)}</h1>
        <p className="text-[#b6b4b4] text-sm font-bold tracking-wide">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greeting;
