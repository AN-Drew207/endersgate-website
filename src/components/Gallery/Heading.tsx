/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import clsx from "clsx";

const Heading = ({ connected, connectWallet }: any) => {
  return (
    <Flex
      className="relative"
      textAlign="center"
      px={2}
      borderBottom="2px solid gold"
      h="56"
      bg="rgba(0, 0, 0, 0.2)"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      w="full"
    >
      <Text
        color="white"
        fontSize={["3xl", "3xl", "4xl", "5xl"]}
        fontWeight="semibold"
        as="h1"
      >
        CARD GALLERY
      </Text>
      <Text
        fontSize={["lg", "lg", "xl", "2xl"]}
        fontWeight="semibold"
        color="white"
      >
        Explore our collection of 230+ unique hand drawn cards{" "}
      </Text>
      <div
        className={clsx(
          "w-36 absolute mr-10 bottom-0 right-0 flex flex-col gap-2",
        )}
      >
        {!connected && (
          <div
            className={clsx(
              "w-36 text-xs text-center border border-[#ffdb8a] p-2 text-white",
            )}
          >
            {"Don't have a metamask wallet? Click"}{" "}
            <a
              href="https://endersgate.gitbook.io/endersgate/welcome/getting-started/metamask-browser-extension-wallet"
              target={"_blank"}
              className={clsx("text-[#ffdb8a]")}
            >
              {" "}
              here for a walk through to get one
            </a>
          </div>
        )}
        <img
          // style={{ marginRight: "5px" }}
          className={clsx({ "cursor-pointer": !connected }, "w-36")}
          src={
            connected
              ? "./assets/WALLET_CONNECTED.png"
              : "./assets/CONNECT_WALLET.png"
          }
          alt="wallet_button"
          onClick={connected ? undefined : connectWallet}
        />
      </div>
    </Flex>
  );
};

export default Heading;
