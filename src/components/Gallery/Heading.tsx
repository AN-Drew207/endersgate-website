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
      h={["350px", "350px", "300px", "56"]}
      bg="rgba(0, 0, 0, 0.2)"
      alignItems="center"
      justifyContent={["start", "start", "start", "center"]}
      pt={["20%", "20%", "20%", "0"]}
      paddingX="10%"
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
    </Flex>
  );
};

export default Heading;
