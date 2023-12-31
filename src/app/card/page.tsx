/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { MdOutlineLoop } from "react-icons/md";
import { convertArrayCards } from "@/components/common/convertCards";
import { useRouter, useSearchParams } from "next/navigation";
import { getContractCustom, getContractMetamask } from "@/web3";
import { getAddresses, mainExpected } from "@/components/common/getAddresses";
import { ChevronLeftIcon } from "@heroicons/react/solid";

const Details = () => {
  const [allCards, setAllCards] = useState([]);
  const [synergiesCards, setSynergiesCards] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [isCardFlipped, setisCardFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const router = useRouter();
  const search = useSearchParams();

  const card = convertArrayCards().find(
    (c) => c?.properties?.id?.value == search.get("id"),
  );

  const cards = convertArrayCards();

  const classes = ["Fighter", "Mage", "Assassin", "Tank", "Support", "Healer"];

  const handleSetRole = () => {
    classes.forEach((item, i) => {
      if (card?.properties?.description?.value?.includes(item)) {
        setRole(classes[i]);
      }
    });
  };

  const handleSetAllCards = () => {
    let allCards_: any = [];
    Object.entries(cards).forEach((value) =>
      value.map((card: any) => allCards_.push(card)),
    );
    setAllCards(allCards_);
  };

  const findSynergies = () => {
    let arr: any = [];
    card?.synergies?.forEach((item: any) => {
      console.log(
        cards.find((card) => card.name == item),
        item,
        "synergy",
      );
      arr.push(cards.find((card) => card.name == item));
    });
    setSynergiesCards(arr);
  };

  const getTotalSupply = async (id: any) => {
    const {
      matic: { endersGate },
    } = getAddresses();
    const contract = getContractCustom(
      "EndersGate",
      endersGate,
      mainExpected()
        ? "https://polygon-mainnet.g.alchemy.com/v2/kRM3PkCdafzPawH6DziNlah5olIrcNfl"
        : "https://polygon-mumbai.g.alchemy.com/v2/Hwke9vGNdDbeQFI0s6-NRLNdGh34Phvb",
    );
    const totalSupply = await contract.methods.totalSupply(parseInt(id)).call();
    console.log(totalSupply, id, "supply");
    setTotalSupply(parseInt(totalSupply));
  };

  const changeIsCardFlipped = () => {
    setisCardFlipped((isCardFlipped) => !isCardFlipped);
  };

  const handleFlippedCard = () => {
    const cardType = card.typeCard;
    if (cardType === "iron") {
      console.log("iron");
      setFlippedCard("./assets/cardsilver.png");
    }
    if (cardType === "gold") {
      console.log("gold");
      setFlippedCard("./assets/CardBack.png");
    }
    if (cardType === "legendary") {
      console.log("legendary");
      setFlippedCard("./assets/redback.png");
    }
    if (cardType === "stone") {
      console.log("stone");
      setFlippedCard("./assets/CardStoneBack.png");
    }
    if (cardType === "wood") {
      console.log("wood");
      setFlippedCard("./assets/bert_kurtback.png");
    }
    if (cardType === "silver") {
      console.log("silver");
      setFlippedCard("./assets/cardsilver.png");
    }
    if (cardType === "action") {
      console.log("action");
      setFlippedCard("./assets/ACTION_REACTION_CARD_BACK.png");
    }

    if (cardType === "reaction") {
      console.log("reaction");
      setFlippedCard("./assets/ACTION_REACTION_CARD_BACK.png");
    }

    if (cardType === "avatar") {
      console.log("avatar");
      setFlippedCard("./assets/backAvatar.png");
    }
  };

  useEffect(() => {
    handleSetAllCards();
  }, []);

  useEffect(() => {
    findSynergies();
  }, [allCards, search.get("id")]);

  useEffect(() => {
    if (search.get("id")) {
      getTotalSupply(search.get("id"));
    }
  }, [search.get("id")]);

  useEffect(() => {
    handleSetRole();
  }, []);

  useEffect(() => {
    if (isCardFlipped === true) {
      handleFlippedCard();
    }
  }, [isCardFlipped, card]);

  return (
    <Flex
      flexDir="column"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={`url(./assets/gallerybg.svg)`}
      minHeight="100vh"
      w={"100%"}
      overflowX={"hidden"}
    >
      <Flex
        borderBottom="2px solid #c08c34"
        bg="rgba(0,0,0, .5)"
        minH="10vh"
        py={"20px"}
        w="100vw"
        alignItems="center"
        color="white"
      >
        <Button
          borderRadius="none"
          onClick={() => {
            router.push("/gallery");
          }}
          marginLeft={[4, 4, 4, 10]}
          colorScheme="grey.700"
          border="1px solid gold"
        >
          <ChevronLeftIcon className="flex w-6 text-yellow-500" />
          <Text color="galleryGold">BACK</Text>
        </Button>
        <Text fontSize={["xl", "2xl", "3xl", "3xl"]} color="grey.500" mx={5}>
          {card?.properties?.name?.value.toUpperCase()}
        </Text>
        <Text
          fontSize="24px"
          color={
            card?.cardType === "gold"
              ? "gold"
              : card?.cardType === "iron"
              ? "#CFE0EE"
              : card?.cardType === "wood"
              ? "#C88943"
              : card?.cardType === "stone"
              ? "#BDB8AD"
              : card?.cardType === "legendary"
              ? "#86DE5E"
              : "#c08c34"
          }
          mx={1}
        >
          {card?.cardType?.toUpperCase()}
        </Text>
      </Flex>
      <Box color="white">
        <Flex
          flexDir={["column", "column", "column", "row"]}
          minH="80vh"
          w="100vw"
          justifyContent="center"
          alignItems="center"
        >
          <Box m="35px 50px 0px 70px">
            <Tilt>
              <Image
                css={{
                  width: "270px",
                  boxShadow: "0px 37px 36px -38px white",
                  marginBottom: "0px",
                  display: isCardFlipped ? "none" : "inline-block",
                }}
                src={card?.properties?.image?.value}
                alt=""
              />
              <Image
                css={{
                  width: "270px",
                  boxShadow: "0px 37px 36px -38px white",
                  marginBottom: "0px",
                  display: isCardFlipped ? "inline-block" : "none",
                }}
                src={card?.properties?.back?.value}
                alt=""
              />
            </Tilt>
            <Box className="card-bottom mt-1" style={{ height: "3px" }}></Box>
            {card?.artist && (
              <Text
                fontSize="12px"
                color="galleryGold"
                opacity={0.7}
                textAlign="center"
                marginTop="10px"
              >
                Art by:{" "}
                <a
                  className="text-primary font-bold"
                  target="_blank"
                  href={card?.artist.link}
                >
                  {card?.artist.name}
                </a>
              </Text>
            )}
            <Text
              onClick={changeIsCardFlipped}
              cursor="pointer"
              textAlign="center"
              color="galleryGold"
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop={2}
            >
              Flip the card <MdOutlineLoop style={{ marginLeft: ".5rem" }} />{" "}
            </Text>
            <Flex>{/* <GiCycle /> */}</Flex>
          </Box>
          <Flex flexDir="column" w={["90%", "90%", "90%", "40%"]} mt="35px">
            <Flex
              border="1px solid #c08c34"
              bg="rgba(255,255,255,0.1)"
              px={4}
              w="full"
              justify={"space-between"}
              py={2}
            >
              <Flex px={4} w="50%" py={2} borderRight="1px solid #c08c34">
                <Text>Name:</Text>
                <Text ml={4}>{card?.properties?.name?.value}</Text>
              </Flex>

              <Flex px={4} w="50%" py={2}>
                <Text>ID:</Text>
                <Text ml={4}>{card?.properties?.id?.value}</Text>
              </Flex>
            </Flex>
            <Flex border="1px solid #c08c34" px={4} w="full" py={2}>
              <Text>Rarity:</Text>
              <Text ml={4}>
                {card?.properties?.name?.rarity
                  ? card?.properties?.rarity?.value
                  : "N/A"}
              </Text>
            </Flex>
            <Flex
              border="1px solid #c08c34"
              bg="rgba(255,255,255,0.1)"
              px={4}
              w="full"
              py={2}
            >
              <Text>Element:</Text>
              <Text ml={4}>{card?.properties?.element?.value}</Text>
            </Flex>
            <Flex border="1px solid #c08c34" px={4} w="full" py={2}>
              <Flex w="50%" borderRight="1px solid #c08c34">
                <Text>Pack:</Text>
                <Text ml={4}>Gen 0</Text>
              </Flex>
              <Flex w="50%" pl={4}>
                <Text>Class:</Text>
                <Text ml={4}>{role}</Text>
              </Flex>
            </Flex>
            <Flex
              border="1px solid #c08c34"
              bg="rgba(255,255,255,0.1)"
              px={4}
              w="full"
              py={2}
            >
              <Text>Race:</Text>
              <Text ml={4}>{card?.properties?.race?.value}</Text>
            </Flex>
            <Flex
              flexDir={["column", "column", "row", "row"]}
              justifyContent="space-between"
              border="1px solid #c08c34"
              px={4}
              w="full"
              py={2}
            >
              <Flex>
                <Text color="red">Attack(ATK):</Text>
                <Text ml={4}>
                  {card?.properties?.attack
                    ? card?.properties?.attack?.value
                    : "N/A"}
                </Text>
              </Flex>
              <Flex pl={[0, 0, 4, 4]}>
                <Text color="green">Health (hp)</Text>
                <Text ml={4}>
                  {card?.properties?.hp ? card?.properties?.hp?.value : "N/A"}
                </Text>
              </Flex>
              <Flex pl={[0, 0, 4, 4]}>
                <Text color="yellow">Gold Cost:</Text>
                <Text ml={4}>
                  {card?.properties?.gold
                    ? card?.properties?.gold?.value
                    : "N/A"}
                </Text>
              </Flex>
              <Flex pl={[0, 0, 4, 4]}>
                <Text color="pink">Total Supply:</Text>
                <Text ml={4}>{totalSupply}</Text>
              </Flex>
            </Flex>

            <Flex w="100%" justifyContent="center" mt="15px">
              <Stack
                background="rgba(255,255,255,0.1)"
                px={2}
                py={2}
                w="85%"
                border="1px solid #c08c34"
              >
                <Text textAlign="center">Card Description</Text>
                <Text color="sm">{card?.description}</Text>
              </Stack>
            </Flex>
          </Flex>
          <Box
            border="1px solid #c08c34"
            background="rgba(255,255,255,0.1)"
            h="26rem"
            w={["90%", "90%", "90%", "25%"]}
            m={[
              "2rem 0 2rem 0",
              "2rem 0 2rem 0",
              "2rem 0 2rem 0",
              "35px 70px 0px 50px",
            ]}
          >
            <Flex m="30px" alignItems="center" justifyContent="center">
              <Text>KNOWN SYNERGIES:</Text>
            </Flex>
            {synergiesCards?.length === 2 ? (
              <Flex w="full" justifyContent="center">
                {synergiesCards?.map((item: any) => (
                  <Image
                    cursor="pointer"
                    key={item?.name}
                    onClick={() =>
                      router.push(`/card?id=${item?.properties?.id?.value}`)
                    }
                    objectFit="contain"
                    _hover={{
                      filter:
                        "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)",
                    }}
                    w="140px"
                    h="180px"
                    alt={item?.description}
                    mx={2}
                    src={item?.image}
                  />
                ))}
              </Flex>
            ) : synergiesCards?.length === 1 ? (
              <Flex w="full" justifyContent="center">
                <Image
                  onClick={() =>
                    router.push(
                      `/card?id=${synergiesCards[0]?.properties?.id?.value}`,
                    )
                  }
                  cursor="pointer"
                  _hover={{
                    filter:
                      "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)",
                    // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                  }}
                  objectFit="contain"
                  w="140px"
                  h="180px"
                  alt={synergiesCards[0]?.description}
                  src={synergiesCards[0]?.image}
                />
              </Flex>
            ) : synergiesCards?.length === 3 ? (
              <>
                <Flex pos="relative" w="full" justifyContent="center">
                  <Image
                    onClick={() =>
                      router.push(
                        `/card?id=${synergiesCards[0]?.properties?.id?.value}`,
                      )
                    }
                    cursor="pointer"
                    _hover={{
                      filter:
                        "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)",
                      // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                    }}
                    objectFit="contain"
                    w="140px"
                    h="180px"
                    alt={synergiesCards[0].description}
                    src={synergiesCards[0]?.image}
                  />
                  <Image
                    onClick={() =>
                      router.push(
                        `/card?id=${synergiesCards[1]?.properties?.id?.value}`,
                      )
                    }
                    cursor="pointer"
                    _hover={{
                      filter:
                        "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)",
                      // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                    }}
                    objectFit="contain"
                    w="140px"
                    h="180px"
                    alt={synergiesCards[1].description}
                    src={synergiesCards[1]?.image}
                  />
                  <Box
                    pos="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                    bottom="-25px"
                  >
                    <Image
                      onClick={() =>
                        router.push(
                          `/card?id=${synergiesCards[2]?.properties?.id?.value}`,
                        )
                      }
                      cursor="pointer"
                      _hover={{
                        filter:
                          "sepia(100%) brightness(111%) hue-rotate(12deg) saturate(1000%) invert(20%)",
                        // filter: "invert(3%) opacity(100%) sepia(94%) saturate(571%) hue-rotate(2deg) brightness(100%) contrast(100%)"
                      }}
                      objectFit="contain"
                      w="140px"
                      h="180px"
                      alt={synergiesCards[2].description}
                      src={synergiesCards[2]?.image}
                    />
                  </Box>
                </Flex>
              </>
            ) : (
              <>
                <Flex w="full" justifyContent="center" pos="relative">
                  <Text>N/A</Text>
                </Flex>
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Details;
