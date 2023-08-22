import React from "react";
import { useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";

const navItems = [
  { title: "Trading Cards", value: "Trading Cards" },
  { title: "Packs", value: "Packs" },
];

const Inventory = () => {
  React.useEffect(() => {
    window.location.replace(
      "https://marketplace.endersgate.gg/profile/inventory",
    );
  });

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center px-28 text-center text-white font-bold text-xl">
      We are migrating our inventory to
      https://marketplace.endersgate.gg/profile/inventory. <br /> Redirecting
      you now...
    </div>
  );
};

export default Inventory;
