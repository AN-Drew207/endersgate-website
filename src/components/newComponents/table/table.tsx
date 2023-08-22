import React from "react";
import Link from "next/link";

const Table = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center px-4 sm:px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 md:gap-16 mb-8">
          <a
            href="https://marketplace.endersgate.gg/shop"
            target={"_blank"}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative">
              <img
                src={"./assets/links/link1.png"}
                alt="Game 1"
                className="w-24rem sm:w-25.2rem h-auto mb-2"
              />
            </div>
            <p
              className="text-lg sm:text-xs md:text-base text-white text-center md:text-center leading-tight overflow-hidden h-16"
              style={{ color: "#B8B8B8" }}
            >
              Discover a collection of over 230 unique, hand-drawn playing
              cards.
            </p>
          </a>
          <div className="flex flex-col items-center justify-center relative">
            <div className="w-24rem sm:w-25.2rem h-auto mb-2 relative">
              <img
                src="/assets/coming_soon.png"
                className="absolute h-full w-full"
                alt=""
              />
              <img
                src={"./assets/links/link2.png"}
                alt="Game 2"
                className="w-full"
              />
            </div>
            <p
              className="text-lg sm:text-xs md:text-base text-white text-center md:text-center leading-tight overflow-hidden h-16"
              style={{ color: "#B8B8B8" }}
            >
              Collect the lore & enjoy original stories for free or mint a copy.
            </p>
          </div>
          <a
            href="https://marketplace.endersgate.gg/marketplace"
            target={"_blank"}
            className="flex flex-col items-center justify-center relative"
          >
            <img
              src={"./assets/links/link3.png"}
              alt="Game 3"
              className="w-24rem sm:w-25.2rem h-auto mb-2"
            />
            <p
              className="text-lg sm:text-xs md:text-base text-white text-center md:text-center leading-tight overflow-hidden h-16"
              style={{ color: "#B8B8B8" }}
            >
              Search through our collection of over 300 unique hand-drawn cards.
            </p>
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 md:gap-16">
          <div className="flex flex-col items-center justify-center">
            <div className="w-24rem sm:w-25.2rem h-auto mb-2 relative">
              <img
                src="/assets/coming_soon.png"
                className="absolute h-full w-full"
                alt=""
              />
              <img
                src={"./assets/links/link4.png"}
                alt="Game 4"
                className="w-full"
              />
            </div>
            <p
              className="text-lg sm:text-xs md:text-base text-white text-center md:text-center leading-tight  h-16"
              style={{ color: "#B8B8B8" }}
            >
              Find out more about Enders Gate, join community events, giveaways,
              airdrops and more!
            </p>
          </div>
          <a
            href="https://discord.com/invite/endersgate"
            target={"_blank"}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={"./assets/links/link5.png"}
              alt="Game 5"
              className="w-24rem sm:w-25.2rem h-auto mb-2"
            />
            <p
              className="text-lg sm:text-xs md:text-base text-white text-center md:text-center leading-tight overflow-hidden h-16"
              style={{ color: "#B8B8B8" }}
            >
              Discover a collection of over 230 unique, hand-drawn playing
              cards.
            </p>
          </a>
          <Link
            href="/gallery"
            className="flex flex-col items-center justify-center"
          >
            <img
              src={"./assets/links/link6.png"}
              alt="Game 6"
              className="w-24rem sm:w-25.2rem h-auto mb-2"
            />
            <p
              className="text-lg sm:text-xs md:text-base text-white text-center md:text-center leading-tight overflow-hidden h-16"
              style={{ color: "#B8B8B8" }}
            >
              Discover a collection of over 230 unique, hand-drawn playing
              cards.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Table;
