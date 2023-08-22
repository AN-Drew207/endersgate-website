import React, { useState, useEffect } from "react";
// import ShopABI from "@/contracts/ClockAuction.json";
import { LoadingOutlined } from "@ant-design/icons";
import clsx from "clsx";

const Test = () => {
  return (
    <>
      <div
        className="w-full h-full flex items-center justify-center bg-[#000000] relative overflow-hidden shop"
        style={{ minHeight: "100vh" }}
      >
        <img
          src="./assets/inventory/background.png"
          className="sm:block hidden w-screen h-screen absolute top-0"
          alt=""
        />
        <iframe
          src="https://widget.xp.network/?widget=true&wsettings=true&wid=create"
          frameborder="0"
          height={"600px"}
          width="1000px"
          className="relative z-10"
        ></iframe>
      </div>
    </>
  );
};

export default Test;
