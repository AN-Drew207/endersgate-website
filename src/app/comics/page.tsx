"use client";
import React from "react";

const Comics = () => {
  React.useEffect(() => {
    window.location.replace("https://marketplace.endersgate.gg/comics");
  });

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center px-28 text-center text-white font-bold text-xl bg-black">
      We are migrating our comics to https://marketplace.endersgate.gg/comics.{" "}
      <br /> Redirecting you now...
    </div>
  );
};

export default Comics;
