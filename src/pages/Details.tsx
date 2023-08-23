import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import cards from "@/metadata/cards.json";
import { MdOutlineLoop } from "react-icons/md";
import { convertArrayCards } from "@/components/common/convertCards";

const Details = () => {
  const [allCards, setAllCards] = useState([]);
  const [synergiesCards, setSynergiesCards] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [cardType, setCardType] = useState("");
  const [isCardFlipped, setisCardFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const SYNERGIES = location.state.card?.synergies;

  const classes = ["Fighter", "Mage", "Assassin", "Tank", "Support", "Healer"];

  const handleSetRole = () => {
    classes.map((item, i) => {
      if (location.state.card.description?.includes(item)) {
        setRole(classes[i]);
      }
    });
  };

  const handleSetAllCards = () => {
    let allCards_: any = [];
    Object.entries(cards).map(([key, value]) =>
      value.map((card) => allCards_.push(card)),
    );
    setAllCards(allCards_);
  };

  const findSynergies = () => {
    let arr: any = [];
    SYNERGIES?.map((syn: any) => {
      arr.push(convertArrayCards().find((c) => c?.name === syn));
    });
    setSynergiesCards(arr);
  };

  const changeIsCardFlipped = () => {
    setisCardFlipped((isCardFlipped) => !isCardFlipped);
  };

  const handleFlippedCard = () => {
    const cardType = location.state.card.typeCard;
    console.log(cardType, location, "macaracuay");
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
  }, [SYNERGIES, allCards]);

  useEffect(() => {
    handleSetRole();
  }, []);

  // useEffect(() => {
  //   findCardType();
  // }, []);

  useEffect(() => {
    if (isCardFlipped === true) {
      handleFlippedCard();
    }
  }, [isCardFlipped, location.state.name]);

  // const arr = ["Elf", "Beast"]

  // const text = "[Beast | Support] Passive: +10 HP to all Ally Guardians. Activate: Execute 1 Enemy champ under 10% health."

  // const currentClass = arr.map((t,i) => {
  //     if(text.includes(t)){
  //         return i
  //     }
  // })

  // console.log(currentClass)

  return (
    <Flex
      flexDir="column"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage={`url(./assets/gallerybg.svg)`}
      minHeight="100vh"
    >
      <Flex
        borderBottom="2px solid #c08c34"
        bg="rgba(0,0,0, .5)"
        mt="79px"
        h="10vh"
        w="100vw"
        alignItems="center"
        color="white"
      >
        <Button
          borderRadius="none"
          onClick={() => {
            navigate("/gallery");
          }}
          marginLeft={[4, 4, 4, 10]}
          colorScheme="grey.700"
          border="1px solid gold"
        >
          <Image
            w="4"
            src={"./assets/arrowleftdetailspage.svg"}
            style={{ marginRight: ".5rem" }}
          />
          <Text color="galleryGold">BACK</Text>
        </Button>
        <Text fontSize={["xl", "2xl", "3xl", "3xl"]} color="grey.500" mx={5}>
          {location.state.name?.toUpperCase()}
        </Text>
        <Text
          fontSize="24px"
          color={
            cardType === "gold"
              ? "gold"
              : cardType === "iron"
              ? "#CFE0EE"
              : cardType === "wood"
              ? "#C88943"
              : cardType === "stone"
              ? "#BDB8AD"
              : cardType === "legendary"
              ? "#86DE5E"
              : "#c08c34"
          }
          mx={1}
        >
          {cardType?.toUpperCase()}
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
                src={location.state.imge}
                alt=""
              />
              <Image
                css={{
                  width: "270px",
                  boxShadow: "0px 37px 36px -38px white",
                  marginBottom: "0px",
                  display: isCardFlipped ? "inline-block" : "none",
                }}
                src={flippedCard}
                alt=""
              />
            </Tilt>
            <Box className="card-bottom" style={{ height: "3px" }}></Box>
            {location?.state?.card.artist && (
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
                  href={location.state.card.artist.link}
                >
                  {location.state.card.artist.name}
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
                <Text ml={4}>{location.state.name}</Text>
              </Flex>

              <Flex px={4} w="50%" py={2}>
                <Text>ID:</Text>
                <Text ml={4}>{location.state.id}</Text>
              </Flex>
            </Flex>
            <Flex border="1px solid #c08c34" px={4} w="full" py={2}>
              <Text>Rarity:</Text>
              <Text ml={4}>
                {location.state.card?.properties?.rarity
                  ? location.state.card?.properties?.rarity?.value
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
              <Text ml={4}>
                {location.state.card?.properties?.element?.value}
              </Text>
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
              <Text ml={4}>{location.state.card?.properties?.race?.value}</Text>
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
                  {location.state.card?.properties?.attack
                    ? location.state.card?.properties?.attack?.value
                    : "N/A"}
                </Text>
              </Flex>
              <Flex pl={[0, 0, 4, 4]}>
                <Text color="green">Health (hp)</Text>
                <Text ml={4}>
                  {location.state.card?.properties?.hp
                    ? location.state.card?.properties?.hp?.value
                    : "N/A"}
                </Text>
              </Flex>
              <Flex pl={[0, 0, 4, 4]}>
                <Text color="yellow">Gold Cost:</Text>
                <Text ml={4}>
                  {location?.state?.card?.properties?.gold
                    ? location?.state?.card?.properties?.gold?.value
                    : "N/A"}
                </Text>
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
                <Text color="sm">{location.state.card?.description}</Text>
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
                      navigate("/gallery/detailpage", {
                        state: {
                          desc: item?.description,
                          imge: item?.properties?.image?.value,
                          ctype: cardType,
                          name: item?.name,
                          rarity: item?.properties?.rarity?.value,
                          card: item,
                          cardType: item.typeCard,
                        },
                      })
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
                    src={item?.properties?.image?.value}
                  />
                ))}
              </Flex>
            ) : synergiesCards?.length === 1 ? (
              <Flex w="full" justifyContent="center">
                <Image
                  onClick={() =>
                    navigate("/gallery/detailpage", {
                      state: {
                        desc: synergiesCards[0]?.description,
                        imge: synergiesCards[0]?.properties?.image?.value,
                        ctype: cardType,
                        name: synergiesCards[0]?.name,
                        rarity: synergiesCards[0]?.properties?.rarity?.value,
                        card: synergiesCards[0],
                        cardType: synergiesCards[0].typeCard,
                      },
                    })
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
                  src={synergiesCards[0]?.properties?.image?.value}
                />
              </Flex>
            ) : synergiesCards?.length === 3 ? (
              <>
                <Flex pos="relative" w="full" justifyContent="center">
                  <Image
                    onClick={() =>
                      navigate("/gallery/detailpage", {
                        state: {
                          desc: synergiesCards[0]?.description,
                          imge: synergiesCards[0]?.properties?.image?.value,
                          ctype: cardType,
                          name: synergiesCards[0]?.name,
                          rarity: synergiesCards[0]?.properties?.rarity?.value,
                          card: synergiesCards[0],
                        },
                      })
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
                    src={synergiesCards[0]?.properties?.image?.value}
                  />
                  <Image
                    onClick={() =>
                      navigate("/gallery/detailpage", {
                        state: {
                          desc: synergiesCards[1]?.description,
                          imge: synergiesCards[1]?.properties?.image?.value,
                          ctype: cardType,
                          name: synergiesCards[1]?.name,
                          rarity: synergiesCards[1]?.properties?.rarity?.value,
                          card: synergiesCards[1],
                        },
                      })
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
                    src={synergiesCards[1]?.properties?.image?.value}
                  />
                  <Box
                    pos="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                    bottom="-25px"
                  >
                    <Image
                      onClick={() =>
                        navigate("/gallery/detailpage", {
                          state: {
                            desc: synergiesCards[2]?.description,
                            imge: synergiesCards[2]?.properties?.image?.value,
                            ctype: cardType,
                            name: synergiesCards[2]?.name,
                            rarity:
                              synergiesCards[2]?.properties?.rarity?.value,
                            card: synergiesCards[2],
                          },
                        })
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
                      src={synergiesCards[2]?.properties?.image?.value}
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
