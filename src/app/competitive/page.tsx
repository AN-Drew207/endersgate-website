"use client";
import React from "react";

const Competitive = () => {
  React.useEffect(() => {
    window.location.replace("https://marketplace.endersgate.gg/competitive");
  });

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center px-28 text-center text-white font-bold text-xl bg-black">
      We are migrating our competitive page to
      https://marketplace.endersgate.gg/competitive. <br /> Redirecting you
      now...
    </div>
  );
};

export default Competitive;
