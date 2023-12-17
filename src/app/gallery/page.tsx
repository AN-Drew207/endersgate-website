"use client";
import { Flex, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import gallerybg from "../assets/gallerybg.svg";
// import fade from "../assets/fade.svg";
import Heading from "@/components/Gallery/Heading";
import Filters from "@/components/Gallery/Filters";
import Card from "@/components/Gallery/Card";
import EndersGateABI from "@/contracts/EndersGate.json";
import PackContractABI from "@/contracts/packContract.json";
import { convertArrayCards } from "@/components/common/convertCards";
import { useSelector } from "react-redux";
import Web3 from "web3";
import { networkConfigs } from "@/components/helpers/networks";
import { useRouter } from "next/navigation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { useLocation } from "react-router-dom";

const Gallery = () => {
  const [cardType, setCardType] = React.useState("all");
  const [sort, setSort] = React.useState({
    value: "price-high-low",
    label: "Price High-Low",
  });
  const [filters, setFilters] = React.useState<any>({
    avatar: [],
    cardRole: [],
    cardRace: [],
    cardElement: [],
    owned: [],
  });
  const [search, setSearch] = React.useState("");
  const [cards, setCards] = React.useState<any>([]);
  const [balance, setBalance] = React.useState<any>([]);
  const [connected, setConnected] = React.useState(false);

  const [page, setPage] = React.useState(0);

  const { endersGate, pack } = useSelector(
    (state: any) => state.blockchain.addresses,
  );
  const router = useRouter();

  const { network, networkName } = useSelector(
    (state: any) => state.blockchain,
  );

  const { ethAddress: account, provider } = useSelector(
    (state: any) => state.blockchain.user,
  );

  React.useEffect(() => {
    setCards(
      convertArrayCards().filter(
        (card) => card.name !== "Shinobi Guardian",
      ) as any,
    );
  }, []);

  React.useEffect(() => {
    if (account && cards) {
      connectWallet();
    }
  }, [account, cards]);

  const handleSort = (a: any, b: any) => {
    if (sort.value === "price-low-high") {
      return a.properties?.id?.value - b.properties?.id?.value;
    } else if (sort.value === "price-high-low") {
      return b.properties?.id?.value - a.properties?.id?.value;
    } else if (sort.value === "gold-low-high") {
      return a.properties?.gold?.value - b.properties?.gold?.value;
    } else if (sort.value === "gold-high-low") {
      return b.properties?.gold?.value - a.properties?.gold?.value;
    } else if (sort.value === "attack-high-low") {
      return b.properties?.attack?.value - a.properties?.attack?.value;
    } else if (sort.value === "health-high-low") {
      return b.properties?.hp?.value - a.properties?.hp?.value;
    } else {
      return a.properties?.id?.value - b.properties?.id?.value;
    }
  };

  const filterCards = (card: any) => {
    let passed = false;
    if (cardType === "all") {
      if (
        filters.avatar.length === 0 &&
        filters.cardRace.length === 0 &&
        filters.cardRole.length === 0 &&
        filters.cardElement.length === 0 &&
        filters.owned.length === 0
      ) {
        return true;
      }
      if (filters.cardElement.length > 0) {
        if (
          filters.cardElement?.includes(
            card?.properties?.element?.value?.toLowerCase(),
          )
        ) {
          passed = true;
        } else {
          return false;
        }
      }
      if (filters.cardRace.length > 0) {
        if (
          filters.cardRace?.includes(
            card?.properties?.race?.value?.toLowerCase(),
          )
        ) {
          passed = true;
        } else {
          return false;
        }
      }
      if (filters.cardRole.length > 0) {
        if (
          filters.cardRole?.includes(
            card?.properties?.role?.value?.toLowerCase(),
          )
        ) {
          passed = true;
        } else {
          return false;
        }
      }
      if (filters.avatar.length > 0) {
        if (filters.avatar?.includes("avatars")) {
          if (card?.typeCard === "avatar") {
            passed = true;
          } else {
            return false;
          }
        }
        if (filters.avatar?.includes("guardians")) {
          if (card?.properties?.isGuardian?.value === true) {
            passed = true;
          } else {
            return false;
          }
        }
        if (filters.avatar?.includes("reaction cards")) {
          if (card.typeCard == "reaction") {
            passed = true;
          } else {
            return false;
          }
        }
        if (filters.avatar?.includes("action cards")) {
          if (card.typeCard == "action") {
            passed = true;
          } else {
            return false;
          }
        }
        if (filters.avatar?.includes("ghost cards")) {
          if (card?.name === "Shinobi Guardian") {
            passed = true;
          } else {
            return false;
          }
        }
      }
      if (filters.owned.includes("owned")) {
        if (balance[card?.properties?.id?.value]?.balance != 0) {
          console.log("owned");
          passed = true;
        }
      }
      if (filters.owned.includes("non_owned")) {
        if (balance[card?.properties?.id?.value]?.balance == 0) {
          passed = true;
        }
      }
    } else {
      if (cardType === card.typeCard) {
        if (
          filters.avatar.length === 0 &&
          filters.cardRace.length === 0 &&
          filters.cardRole.length === 0 &&
          filters.cardElement.length === 0 &&
          filters.owned.length === 0
        ) {
          return true;
        }
        if (filters.cardElement.length > 0) {
          if (
            filters.cardElement?.includes(
              card?.properties?.element?.value?.toLowerCase(),
            )
          ) {
            passed = true;
          } else {
            return false;
          }
        }
        if (filters.cardRace.length > 0) {
          if (
            filters.cardRace?.includes(
              card?.properties?.race?.value?.toLowerCase(),
            )
          ) {
            passed = true;
          } else {
            return false;
          }
        }
        if (filters.cardRole.length > 0) {
          if (
            filters.cardRole?.includes(
              card?.properties?.role?.value?.toLowerCase(),
            )
          ) {
            passed = true;
          } else {
            return false;
          }
        }
        if (filters.avatar.length > 0) {
          if (filters.avatar?.includes("avatars")) {
            if (card?.properties?.isGuardian?.value === true) {
              passed = true;
            } else {
              return false;
            }
          }
          if (filters.avatar?.includes("guardians")) {
            if (card?.properties?.isGuardian?.value === true) {
              passed = true;
            } else {
              return false;
            }
          }
          if (filters.avatar?.includes("reaction cards")) {
            if (card.typeCard == "reaction") {
              passed = true;
            } else {
              return false;
            }
          }
          if (filters.avatar?.includes("action cards")) {
            if (card.typeCard == "reaction") {
              passed = true;
            } else {
              return false;
            }
          }
          if (filters.avatar?.includes("ghost cards")) {
            if (card?.name === "Shinobi Guardian") {
              passed = true;
            } else {
              return false;
            }
          }
        }
        if (filters.owned.includes("owned")) {
          if (balance[card?.properties?.id?.value]?.balance !== 0) {
            passed = true;
          }
        }
        if (filters.owned.includes("non_owned")) {
          if (balance[card?.properties?.id?.value]?.balance === 0) {
            passed = true;
          }
        }
      }
    }
    if (search === "") {
      return passed;
    } else if (card?.name.toLowerCase().includes(search.toLowerCase())) {
      return passed;
    } else {
      return false;
    }
  };

  const onGetAssets = async (address: any) => {
    try {
      const web3 = new Web3(networkConfigs[network].rpc);
      const cardsContract: any = new web3.eth.Contract(
        EndersGateABI,
        endersGate,
      );
      const packsContract: any = new web3.eth.Contract(PackContractABI, pack);
      const packsIds = [0, 1, 2, 3];
      const cardsIdsPreFilter: any = Object.values(cards);
      const cardsIds = cardsIdsPreFilter
        .reduce((acc: any, cur: any) => acc.concat(cur), [])
        .map((card: any, i: any) =>
          card.properties?.id?.value !== undefined
            ? card.properties?.id?.value
            : i,
        );

      const balancePacks = await packsContract.methods
        .balanceOfBatch(
          packsIds.map(() => address),
          packsIds,
        )
        .call();
      const balanceCards = await cardsContract.methods
        .balanceOfBatch(
          cardsIds.map(() => address),
          cardsIds,
        )
        .call();

      return {
        balanceCards: cardsIds.map((id: any, i: any) => ({
          id,
          balance: balanceCards[i],
          cardType: cards[i]?.typeCard ? cards[i].typeCard : "",
        })),
        balancePacks: packsIds.map((id, i) => ({
          id,
          balance: balancePacks[i],
        })),
      };
    } catch (err) {
      console.log({ err });
      throw err;
    }
  };

  const login = () => {};

  const connectWallet = async () => {
    // setIsLoading(true);
    try {
      // Use web3 to get the user's accounts.
      const web3 = new Web3(networkConfigs[network].rpc);
      const assets: any = await onGetAssets(account);
      setBalance(assets.balanceCards);
      setConnected(true);
      console.log(assets);
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
    }
  };

  return (
    <>
      <Flex
        flexDir="column"
        pb={10}
        bgImage={`url(./assets/gallerybg.svg)`}
        minH="100vh"
        w="100%"
        maxW="100%"
        overflowX="hidden"
      >
        <Heading connected={account} connectWallet={login} />
        <Flex
          alignItems="flex-start"
          zIndex={22}
          w="full"
          h="36"
          bgImage={`url(./assets/fade.svg)`}
        >
          <Filters
            length={cards?.length}
            connected={account}
            connectWallet={login}
            filters={filters}
            setFilters={setFilters}
            sort={sort}
            setSort={setSort as any}
            setSearch={setSearch}
            cardType={cardType}
            setCardType={setCardType}
            setPage={setPage}
          />
        </Flex>
        <Grid
          w="full"
          overflowX="hidden"
          mt={[12, 12, 0, 0]}
          px={10}
          gap="10"
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(7,1fr)",
          ]}
        >
          {cards
            .sort((a: any, b: any) => handleSort(a, b))
            .filter((card: any) => filterCards(card))
            .filter(
              (sale: any, i: any) => i < (page + 1) * 35 && i >= page * 35,
            )
            .map((card: any) => (
              <GridItem key={card?.properties?.id?.value} w="100%">
                <Card
                  card={card}
                  id={card?.properties?.id?.value}
                  cardType={card?.typeCard}
                  name={card?.properties?.name?.value}
                  rarity={card?.properties?.rarity?.value}
                  description={card?.description}
                  image={card?.image}
                  balance={
                    (balance as any).filter(
                      (item: any) => item.id === card?.properties?.id?.value,
                    )[0]?.balance
                  }
                />
              </GridItem>
            ))}
        </Grid>
        {cards.filter((card: any) => filterCards(card)).length > 35 && (
          <div className="flex w-full items-center justify-center gap-2 pt-8">
            <div
              className="rounded-full flex items-center bg-secondary text-white p-4 cursor-pointer"
              onClick={() => {
                if (page > 0) {
                  setPage((prev) => {
                    return prev - 1;
                  });
                }
              }}
            >
              <LeftOutlined />
            </div>
            <div className="p-3 px-5 flex items-center justify-center rounded-full bg-overlay border border-primary text-[#fff]">
              {page + 1}
            </div>
            <div
              className="rounded-full flex items-center bg-secondary text-white p-4 cursor-pointer"
              onClick={() => {
                if (
                  page <
                  Math.floor(
                    cards.filter((card: any) => filterCards(card)).length / 35,
                  )
                ) {
                  setPage((prev) => {
                    return prev + 1;
                  });
                }
              }}
            >
              <RightOutlined />
            </div>
          </div>
        )}
      </Flex>
    </>
  );
};

export default Gallery;
