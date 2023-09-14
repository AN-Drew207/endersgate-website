/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";

function Navbar() {
  const [crossedThreshold, setCrossedThreshold] = useState(false);

  useEffect(() => {
    const threshold = 100;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setCrossedThreshold(currentScrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`app_wrapper lg:!w-[75%] !w-[90%] px-4.5 py-3 md:py-1 navbar-fixed ${
        crossedThreshold ? "crossed-threshold" : ""
      }`}
      style={{ height: "88px" }}
    >
      <div
        className="menu_row rounded-lg text-b8b8b8 flex items-center"
        style={{
          backgroundImage: `url(./assets/navbar/floatingBackground.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button className="hamburger mr-auto block md:hidden text-white text-2xl">
          <i className="fas fa-bars"></i>
        </button>
        <Link
          href="/"
          className="menuItem logo py-1.5 px-11.5 rounded-lg border border-grayish dark-bg logo-container"
          style={{
            border: "1px solid #626262",
            borderRadius: "10px",
          }}
        >
          <img
            src={"./assets/logos/ender'sgatenew.png"}
            alt="Logo"
            className="logo-size"
            style={{ height: "25px", width: "100px" }}
          />
        </Link>
        <Link
          href="/shop"
          className="menuItem lg:text-[16px] text-sm py-1.5 px-2 uppercase font-bold border-gray-600 transition duration-200 hover:bg-gray-700 flex-1 text-center"
        >
          EG shops
        </Link>
        <Link
          href="/inventory"
          className="menuItem lg:text-[16px] text-sm py-1.5 px-2 uppercase font-bold border-gray-600 transition duration-200 hover:bg-gray-700 flex-1 text-center"
        >
          Inventory
        </Link>
        <a
          href="https://marketplace.endersgate.gg/pack_opening"
          target="_blank"
          className="menuItem lg:text-[16px] text-sm py-1.5 px-2 uppercase font-bold border-gray-600 transition duration-200 hover:bg-gray-700 flex-1 text-center"
        >
          My packs
        </a>
        <Link
          href="/gallery"
          className="menuItem lg:text-[16px] text-sm py-1.5 px-2 uppercase font-bold border-gray-600 transition duration-200 hover:bg-gray-700 flex-1 text-center"
        >
          Gallery
        </Link>
        <a
          href="https://solidity.finance/audits/EndersgateNFT/"
          target="_blank"
          rel="noopener noreferrer"
          className="menuItem lg:text-[16px] text-sm py-1.5 px-2 uppercase font-bold border-gray-600 transition duration-200 hover:bg-gray-700 flex-1 text-center"
        >
          Audit
        </a>
        <a
          href="https://marketplace.endersgate.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="menuItem lg:text-[16px] text-sm py-1.5 px-2 uppercase font-bold border-gray-600 transition duration-200 hover:bg-gray-700 flex-1 text-center"
        >
          Marketplace
        </a>
        <a
          href="https://endersgate.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="menuItem play py-1.5 px-2 uppercase font-bold border-gray-600 transition duration-200 hover:bg-gray-700 flex-1 text-center"
        >
          <i className="fas fa-play"></i>
          <span className="ml-2 lg:text-[16px] text-sm hidden md:inline-block">
            Play now
          </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
