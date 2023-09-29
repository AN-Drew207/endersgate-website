/* eslint-disable @next/next/no-img-element */
import React from "react";

const Partners = () => {
  const partners = [
    { logo: "/icons/Findora_Logo.svg", link: "https://findora.org/" },
    { logo: "/icons/Chainlink.svg", link: "https://chain.link/" },
    { logo: "/icons/Chainstack.svg", link: "https://chainstack.com/" },
    { logo: "/icons/DappRadar.svg", link: "https://dappradar.com/" },
    { logo: "/icons/tsuburaya_logo.png", link: "https://xp.network/" },
    { logo: "/icons/PolygonLogo.svg", link: "https://polygon.technology/" },
    { logo: "/icons/XP.Network.svg", link: "https://xp.network/" },
    { logo: "/icons/magic-link.png", link: "https://magic.link/" },
  ];
  return (
    <div className="py-10 xl:px-10 px-4 flex flex-col items-center bg-[#000000]">
      <img src="/icons/5HGPARTNERS.svg" className="w-40 mb-6" alt="" />

      <div className="flex flex-wrap gap-x-10 sm:gap-y-8 gap-y-4 items-center justify-center">
        {partners.map(({ logo, link }) => (
          <a key={logo} href={link} target="_blank" rel="noreferrer">
            <img alt={logo} className="w-[10rem]" src={logo} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
