import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

import Tilt from "react-parallax-tilt";

const Card = ({ card, image, description, cardType, balance }: any) => {
  const router = useRouter();

  const display = () => {
    router.push(`/card?id=${card?.properties?.id?.value}`);
  };
  return (
    <Tooltip
      w="56"
      className="h-max"
      bg="gray.800"
      border={`1px solid ${
        cardType === "wood"
          ? "#9f8a7e"
          : cardType === "gold"
          ? "gold"
          : cardType === "iron"
          ? "#b9c6c7"
          : cardType === "legend"
          ? "#8cffaf"
          : cardType === "silver"
          ? "#b9c6c7"
          : "white"
      }`}
      openDelay={500}
      placement="top"
      label={
        <Flex alignItems="center">
          <Text>{description}</Text>
        </Flex>
      }
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        cursor={"pointer"}
      >
        <Tilt>
          <Image
            onClick={() => display()}
            src={image}
            objectFit="contain"
            alt={card?.properties?.name?.value}
          />
        </Tilt>
        <Box className="card-bottom" w="full" h="2px" />
        <Box boxShadow="0px 15px 30px 5px white" w="50%" />

        <Flex w="full" mt={1} alignItems="center" justifyContent="center">
          {(cardType === "wood" ||
            cardType === "gold" ||
            cardType === "iron" ||
            cardType === "legendary" ||
            cardType === "stone") && (
            <Image
              w="5"
              h="5"
              alt="filter"
              src={
                cardType === "wood"
                  ? "./assets/woodfilter.svg"
                  : cardType === "gold"
                  ? "./assets/goldfilter.svg"
                  : cardType === "iron"
                  ? "./assets/ironfilter.svg"
                  : cardType === "legendary"
                  ? "./assets/legendfilter.svg"
                  : cardType === "stone"
                  ? "./assets/silverfilter.svg"
                  : ""
              }
            />
          )}
          <Text mx={1} color="gray.300">
            {balance ? balance : 0}
          </Text>
          <Text color="gray.500">owned</Text>
        </Flex>
      </Flex>
    </Tooltip>
  );
};

export default Card;
