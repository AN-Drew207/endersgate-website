import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Checkbox,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import Select, { components } from "react-select";
import { FiFilter } from "react-icons/fi";

const Filters = ({
  cardType,
  setCardType,
  setSearch,
  sort,
  setSort,
  filters,
  setFilters,
  connectWallet,
  length,
  connected,
}) => {
  //   const length = Object.entries(cards).map(card => card[1].length).reduce((a, b) => a + b, 0)
  const [open, setOpen] = useState(false);
  const { Option, SingleValue } = components;
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");

  const options = [
    { value: "price-high-low", label: "Price High-Low" },
    { value: "price-low-high", label: "Price Low-High" },
    { value: "gold-high-low", label: "Gold High-Low" },
    { value: "gold-low-high", label: "Gold Low-High" },
    { value: "attack-high-low", label: "Attack High-Low" },
    { value: "health-high-low", label: "Health High-Low" },
  ];

  const CustomOption = (props) => (
    <Option {...props}>
      {/* <Flex cursor="pointer" _hover={{border: "1px solid #fff"}} transition=".5s all ease" border="1px solid gold" borderRadius="none" justifyContent="center" alignItems="center" px={2} h="10" bg="transparent" > */}
      {/* <Text mr={1} color="#FFDB8A" >Sorting: </Text> */}
      <AiOutlineSortAscending color="#FFDB8A" />
      <Text mr={4} ml={2} color="#FFDB8A">
        {props.data.label}
      </Text>
      {props.isSelected === true && (
        <Image w="5" h="5" src={"./assets/selectedoptionarrow.svg"} />
      )}
      {/* <RiArrowDownSFill color= "yes" :"#FFDB8A" /> */}
      {/* </Flex> */}
    </Option>
  );

  const customSelectedValue = (props) => (
    <SingleValue {...props}>
      <Text mr={2} color="#FFDB8A">
        Sort:{" "}
      </Text>
      <AiOutlineSortAscending color="#FFDB8A" />
      <Text ml={2} color="#FFDB8A">
        {props.data.label}
      </Text>
    </SingleValue>
  );

  const sortStyle = {
    control: (base) => ({
      ...base,
      border: "1px solid gold",
      width: "15rem",
      height: "2rem",
      background: "transparent",
      borderRadius: "none",
      "&:hover": {
        border: "1px solid gold",
      },
    }),
    dropdownIndicatorContainer: (base) => ({
      ...base,
      display: "none",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      display: "none",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#fff",
    }),
    option: (base, state) => ({
      ...base,
      background: "transparent",
      width: "15rem",
      display: "flex",
      border: "1px solid gold",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        background: "#4f3f1e",
      },
    }),
    menu: (base) => ({
      ...base,
      background: "rgba(0,0,0,0.5)",
      zIndex: 222,
    }),
    singleValue: (base, state) => ({
      ...base,
      display: "flex",
      alignItems: "center",
    }),
  };

  const handleCardsFilterChange = (type) => {
    if (cardType === type) {
      setCardType("all");
    } else {
      setCardType(type);
    }
  };

  const handleAvatarChange = (checked, value) => {
    if (checked) {
      setFilters({ ...filters, avatar: [...filters.avatar, value] });
    } else {
      let arr = [...filters.avatar];
      const index = arr.findIndex((item) => item === value);
      arr.splice(index, 1);
      setFilters({ ...filters, avatar: arr });
    }
  };

  const handleRaceChange = (checked, value) => {
    if (checked) {
      setFilters({ ...filters, cardRace: [...filters.cardRace, value] });
    } else {
      let arr = [...filters.cardRace];
      const index = arr.findIndex((item) => item === value);
      arr.splice(index, 1);
      setFilters({ ...filters, cardRace: arr });
    }
  };

  const handleRoleChange = (checked, value) => {
    if (checked) {
      setFilters({ ...filters, cardRole: [...filters.cardRole, value] });
    } else {
      let arr = [...filters.cardRole];
      const index = arr.findIndex((item) => item === value);
      arr.splice(index, 1);
      setFilters({ ...filters, cardRole: arr });
    }
  };

  const handleElementChange = (checked, value) => {
    if (checked) {
      setFilters({ ...filters, cardElement: [...filters.cardElement, value] });
    } else {
      let arr = [...filters.cardElement];
      const index = arr.findIndex((item) => item === value);
      arr.splice(index, 1);
      setFilters({ ...filters, cardElement: arr });
    }
  };

  const handleOwnedChange = (checked, value) => {
    if (checked) {
      setFilters({ ...filters, owned: [...filters.owned, value] });
    } else {
      let arr = [...filters.owned];
      const index = arr.findIndex((item) => item === value);
      arr.splice(index, 1);
      setFilters({ ...filters, owned: arr });
    }
  };

  return (
    <>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        px={10}
        alignItems={["center", "center", "flex-start", "flex-start"]}
        w="full"
        justifyContent="space-between"
      >
        <Select
          onChange={(e) => setSort(e)}
          value={sort}
          components={{
            Option: CustomOption,
            SingleValue: customSelectedValue,
          }}
          styles={sortStyle}
          options={options}
        />
        <Text
          position={["relative", "relative", "absolute", "absolute"]}
          left={["0", "0", "50%", "50%"]}
          transform={["none", "none", "translate(-50%)", "translate(-50%)"]}
          my={[2, 2, 0, 2]}
          color="gray.300"
        >
          {length} Results
        </Text>
        {isDesktop ? (
          <Flex>
            <Flex
              onClick={() => handleCardsFilterChange("wood")}
              flexShrink={0}
              cursor="pointer"
              _hover={{ border: "1px solid #fff" }}
              transition=".5s all ease"
              border={`1px solid gold`}
              bg={cardType === "wood" ? "#fff" : "transparent"}
              rounded="none"
              w="10"
              h="10"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="50%" src={"./assets/woodfilter.svg"} />
            </Flex>
            <Flex
              onClick={() => handleCardsFilterChange("stone")}
              flexShrink={0}
              cursor="pointer"
              _hover={{ border: "1px solid #fff" }}
              transition=".5s all ease"
              border={`1px solid gold`}
              bg={cardType === "stone" ? "#fff" : "transparent"}
              rounded="none"
              w="10"
              h="10"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="50%" src={"./assets/silverfilter.svg"} />
            </Flex>
            <Flex
              onClick={() => handleCardsFilterChange("iron")}
              flexShrink={0}
              cursor="pointer"
              _hover={{ border: "1px solid #fff" }}
              transition=".5s all ease"
              border={`1px solid gold`}
              bg={cardType === "iron" ? "#fff" : "transparent"}
              rounded="none"
              w="10"
              h="10"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="50%" src={"./assets/ironfilter.svg"} />
            </Flex>
            <Flex
              onClick={() => handleCardsFilterChange("gold")}
              flexShrink={0}
              cursor="pointer"
              _hover={{ border: "1px solid #fff" }}
              transition=".5s all ease"
              border={`1px solid gold`}
              bg={cardType === "gold" ? "#fff" : "transparent"}
              rounded="none"
              w="10"
              h="10"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="50%" src={"./assets/goldfilter.svg"} />
            </Flex>
            <Flex
              onClick={() => handleCardsFilterChange("legendary")}
              flexShrink={0}
              cursor="pointer"
              _hover={{ border: "1px solid #fff" }}
              transition=".5s all ease"
              border={`1px solid gold`}
              bg={cardType === "legendary" ? "#fff" : "transparent"}
              rounded="none"
              w="10"
              h="10"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="50%" src={"./assets/legendfilter.svg"} />
            </Flex>
            <Flex
              onClick={() => setOpen(true)}
              flexShrink={0}
              ml={4}
              cursor="pointer"
              _hover={{ border: "1px solid #fff" }}
              transition=".5s all ease"
              border="1px solid gold"
              borderRadius="none"
              justifyContent="center"
              alignItems="center"
              px={2}
              h="10"
              bg="transparent"
            >
              <FiFilter color="#FFDB8A" />
              <Text ml={2} color="#FFDB8A">
                Filters
              </Text>
            </Flex>
            <InputGroup ml={4} flexShrink={0}>
              <InputLeftElement>
                <AiOutlineSearch color="#FFDB8A" />
              </InputLeftElement>
              <Input
                onChange={(e) => setSearch(e.target.value)}
                _placeholder={{ color: "#FFDB8A" }}
                color="#FFDB8A"
                focusBorderColor="#fff"
                rounded="none"
                borderColor="gold"
                variant="outline"
                placeholder="Search"
                w="36"
              />
            </InputGroup>
          </Flex>
        ) : (
          <MobileCardType
            setOpen={setOpen}
            setSearch={setSearch}
            cardType={cardType}
            handleCardsFilterChange={handleCardsFilterChange}
          />
        )}
      </Flex>

      <Flex
        className="filter-container"
        position="fixed"
        transition=".5s all ease"
        zIndex={124}
        w="56"
        overflowX="hidden"
        top={20}
        overflowY="scroll"
        left={`${open === true ? "0" : "-100%"}`}
        bg="#080813"
        h="100vh"
        flexDir="column"
        pl={4}
        pt={4}
        pb={20}
      >
        <Flex flexDir="column" mb={4}>
          <div style={{ display: "flex" }}>
            <Text mb={4} color="#FFDB8A" fontSize="xl" fontWeight="semibold">
              CARD TYPE
            </Text>{" "}
            <AiOutlineClose
              style={{ marginLeft: "55px", marginTop: "5px", fontSize: "20px" }}
              cursor="pointer"
              onClick={() => setOpen(false)}
              color="#FFDB8A"
            />
          </div>
          <Checkbox
            fontWeight="semibold"
            color="#FFDB8A"
            onChange={(e) => handleAvatarChange(e.target.checked, "avatars")}
            colorScheme="#fff"
            mb={2}
          >
            AVATARS
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            color="#FFDB8A"
            onChange={(e) => handleAvatarChange(e.target.checked, "guardians")}
            colorScheme="#fff"
            mb={2}
          >
            GUARDIANS
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            color="#FFDB8A"
            onChange={(e) =>
              handleAvatarChange(e.target.checked, "reaction cards")
            }
            colorScheme="#fff"
            mb={2}
          >
            REACTION CARDS
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            color="#FFDB8A"
            onChange={(e) =>
              handleAvatarChange(e.target.checked, "action cards")
            }
            colorScheme="#fff"
            mb={2}
          >
            ACTION CARDS
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            color="#FFDB8A"
            onChange={(e) =>
              handleAvatarChange(e.target.checked, "ghost cards")
            }
            colorScheme="#fff"
            mb={2}
          >
            GHOST CARDS
          </Checkbox>

          {/* <Checkbox isChecked={filters.avatar[0] === "no" ? true : false} onChange={e => handleAvatarChange(e.target.checked, "no")} colorScheme="#fff" color="#FFDB8A"  > 
                No
            </Checkbox> */}
        </Flex>
        <Flex flexDir="column" mb={4}>
          <Text mb={4} color="#FFDB8A" fontSize="xl" fontWeight="semibold">
            GUARDIAN ROLE
          </Text>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRoleChange(e.target.checked, "fighter")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Fighter
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRoleChange(e.target.checked, "mage")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Mage
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRoleChange(e.target.checked, "assassin")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Assassin
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRoleChange(e.target.checked, "tank")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Tank
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRoleChange(e.target.checked, "support")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Support
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRoleChange(e.target.checked, "healer")}
            colorScheme="#fff"
            color="#FFDB8A"
          >
            Healer
          </Checkbox>
        </Flex>
        <Flex flexDir="column" mb={4}>
          <Text mb={4} color="#FFDB8A" fontSize="xl" fontWeight="semibold">
            GUARDIAN RACE
          </Text>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "human")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Human
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "dwarf")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Dwarf
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "beast")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Beast
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "goblin")}
            mb={2}
            colorScheme="#fff"
            color="#FFDB8A"
          >
            Goblin
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "ogre")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Ogre
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "zombie")}
            mb={2}
            colorScheme="#fff"
            color="#FFDB8A"
          >
            Zombie
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "vampire")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Vampire
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "demon")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Demon
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "undead")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Undead
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "insect")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Insect
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "elemental")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Elemental
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "golem")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Golem
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "cephalo")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Cephalo
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "spirit")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Spirit
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "monster")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Monster
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "ascended")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Ascended
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "giant")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Giant
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "sentinel")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            Sentinel
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleRaceChange(e.target.checked, "shark")}
            colorScheme="#fff"
            color="#FFDB8A"
          >
            Shark
          </Checkbox>
        </Flex>
        <Flex flexDir="column" mb={4}>
          <Text mb={4} color="#FFDB8A" fontSize="xl" fontWeight="semibold">
            ELEMENT
          </Text>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleElementChange(e.target.checked, "void")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            VOID
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleElementChange(e.target.checked, "mystic")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            MYSTIC
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleElementChange(e.target.checked, "earth")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            EARTH
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleElementChange(e.target.checked, "venom")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            VENOM
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleElementChange(e.target.checked, "fire")}
            colorScheme="#fff"
            mb={2}
            color="#FFDB8A"
          >
            FIRE
          </Checkbox>
          <Checkbox
            fontWeight="semibold"
            onChange={(e) => handleElementChange(e.target.checked, "water")}
            colorScheme="#fff"
            color="#FFDB8A"
          >
            WATER
          </Checkbox>
        </Flex>
        {connected && (
          <Flex flexDir="column" mb={4}>
            <Text mb={4} color="#FFDB8A" fontSize="xl" fontWeight="semibold">
              OWNED
            </Text>
            <Checkbox
              fontWeight="semibold"
              onChange={(e) => handleOwnedChange(e.target.checked, "owned")}
              colorScheme="#fff"
              mb={2}
              color="#FFDB8A"
            >
              OWNED
            </Checkbox>
            <Checkbox
              fontWeight="semibold"
              onChange={(e) => handleOwnedChange(e.target.checked, "non_owned")}
              colorScheme="#fff"
              mb={2}
              color="#FFDB8A"
            >
              NON-OWNED
            </Checkbox>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Filters;

const MobileCardType = ({
  handleCardsFilterChange,
  cardType,
  setOpen,
  setSearch,
}) => {
  return (
    <Flex flexDir="column">
      <Flex w="full" justifyContent="center" mb={2}>
        <Flex
          onClick={() => handleCardsFilterChange("wood")}
          flexShrink={0}
          cursor="pointer"
          _hover={{ border: "1px solid #fff" }}
          transition=".5s all ease"
          border={`1px solid ${cardType === "wood" ? "#fff" : "gold"}`}
          bg={cardType === "wood" ? "#fff" : "transparent"}
          rounded="none"
          w="10"
          h="10"
          justifyContent="center"
          alignItems="center"
        >
          <Image w="50%" src={"./assets/woodfilter.svg"} />
        </Flex>
        <Flex
          onClick={() => handleCardsFilterChange("silver")}
          flexShrink={0}
          cursor="pointer"
          _hover={{ border: "1px solid #fff" }}
          transition=".5s all ease"
          border={`1px solid ${cardType === "silver" ? "#fff" : "gold"}`}
          bg={cardType === "silver" ? "#fff" : "transparent"}
          rounded="none"
          w="10"
          h="10"
          justifyContent="center"
          alignItems="center"
        >
          <Image w="50%" src={"./assets/silverfilter.svg"} />
        </Flex>
        <Flex
          onClick={() => handleCardsFilterChange("iron")}
          flexShrink={0}
          cursor="pointer"
          _hover={{ border: "1px solid #fff" }}
          transition=".5s all ease"
          border={`1px solid ${cardType === "iron" ? "#fff" : "gold"}`}
          bg={cardType === "iron" ? "#fff" : "transparent"}
          rounded="none"
          w="10"
          h="10"
          justifyContent="center"
          alignItems="center"
        >
          <Image w="50%" src={"./assets/ironfilter.svg"} />
        </Flex>
        <Flex
          onClick={() => handleCardsFilterChange("gold")}
          flexShrink={0}
          cursor="pointer"
          _hover={{ border: "1px solid #fff" }}
          transition=".5s all ease"
          border={`1px solid ${cardType === "gold" ? "#fff" : "gold"}`}
          bg={cardType === "gold" ? "#fff" : "transparent"}
          rounded="none"
          w="10"
          h="10"
          justifyContent="center"
          alignItems="center"
        >
          <Image w="50%" src={"./assets/goldfilter.svg"} />
        </Flex>
        <Flex
          onClick={() => handleCardsFilterChange("legend")}
          flexShrink={0}
          cursor="pointer"
          _hover={{ border: "1px solid #fff" }}
          transition=".5s all ease"
          border={`1px solid ${cardType === "legend" ? "#fff" : "gold"}`}
          bg={cardType === "legend" ? "#fff" : "transparent"}
          rounded="none"
          w="10"
          h="10"
          justifyContent="center"
          alignItems="center"
        >
          <Image w="50%" src={"./assets/legendfilter.svg"} />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          onClick={() => setOpen(true)}
          flexShrink={0}
          ml={4}
          cursor="pointer"
          _hover={{ border: "1px solid #fff" }}
          transition=".5s all ease"
          border="1px solid gold"
          borderRadius="none"
          justifyContent="center"
          alignItems="center"
          px={2}
          h="10"
          bg="transparent"
        >
          <FiFilter color="#FFDB8A" />
          <Text ml={2} color="#FFDB8A">
            Filters
          </Text>
        </Flex>
        <InputGroup ml={4} flexShrink={0}>
          <InputLeftElement>
            <AiOutlineSearch color="#FFDB8A" />
          </InputLeftElement>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            _placeholder={{ color: "#FFDB8A" }}
            color="#FFDB8A"
            focusBorderColor="#fff"
            rounded="none"
            borderColor="gold"
            variant="outline"
            placeholder="Search"
            w="36"
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};
