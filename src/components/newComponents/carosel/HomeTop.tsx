import React, { useState, useEffect } from "react";
import { Link, Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Carousel from "./carosel";
import MobileCarousel from "./mobileCarosel";

const cards = [1, 2, 3, 4, 5, 6, 7];

const HomeTop = () => {
  const [cardPositions, setCardPositions] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const carouselWidth = isMobile ? "100%" : "60%";

  useEffect(() => {
    const initialCardPositions = [
      {
        translateX: -360,
        rotate: -45,
        zIndex: 1,
        size: "160px",
        translateY: 115,
      },
      {
        translateX: -200,
        rotate: -30,
        zIndex: 2,
        size: "190px",
        translateY: 35,
      },
      {
        translateX: -100,
        rotate: -15,
        zIndex: 3,
        size: "200px",
        translateY: 0,
      },
      { translateX: 0, rotate: 0, zIndex: 4, size: "250px", translateY: 0 },
      { translateX: 100, rotate: 15, zIndex: 3, size: "200px", translateY: 0 },
      { translateX: 200, rotate: 30, zIndex: 2, size: "190px", translateY: 35 },
      {
        translateX: 360,
        rotate: 45,
        zIndex: 1,
        size: "160px",
        translateY: 115,
      },
    ];

    setCardPositions(initialCardPositions as any);
  }, []);

  return (
    <Flex
      bg="black"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h={["600px", "600px", "800px", "1000px"]}
      pos="relative"
      overflow="hidden"
    >
      <Box
        as="video"
        autoPlay
        muted
        loop
        objectFit="cover"
        w="100%"
        h="100%"
        pos="absolute"
        top="0"
        left="0"
      >
        <source src={"./assets/videos/background.mp4"} type="video/mp4" />
      </Box>
      <Box
        bg="rgba(0, 0, 0, 0.76)"
        pos="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
      />
      <Box
        bgImage={`url(./assets/Background 1 (1).png)`}
        bgPos="center"
        bgSize="cover"
        pos="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        display={["block", "none"]}
      />
      <Box
        pos="absolute"
        bottom="0"
        left="0"
        right="0"
        w="100%"
        h={["100px", "150px", "200px", "500px"]}
      >
        <Image
          src={"./assets/table.webp"}
          alt="Scaled Image"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>
      {!isMobile && <Carousel />}
      {isMobile && <MobileCarousel />}

      <Box
        pos="absolute"
        top={["50px", "100px"]}
        textAlign="center"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={"./assets/logos/endersGateLogo.svg"}
          alt="Ender's Gate logo"
          w={["80%", "65%", "60%"]}
          m="0"
        />
      </Box>

      <Flex
        w={carouselWidth}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={[4, 8]}
        mb="20px"
        zIndex="1"
        pos="absolute"
        bottom="0"
      >
        <Box
          w={["80%", "90%"]}
          zIndex="2"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb={["-18px", "5px"]}
        >
          <Text
            fontSize={["18px", "24px"]}
            fontFamily="Inter"
            fontWeight="bold"
            textAlign="center"
            color="white"
            textShadow="0px 4px 10px #000000"
            mb="20px"
            mr="8px"
            as={"h1"}
          >
            Play for Free.
            <br /> Own what you earn
          </Text>
        </Box>

        <Box
          display={["flex"]}
          flexDirection={["row"]}
          justifyContent="center"
          alignItems={["center", "center", "flex-start"]}
          w={["100%", "90%"]}
          mt={[4, 0]}
          flexWrap="wrap"
          zIndex="2"
          gap={[2, 4, 4, 4, 4, 8]}
        >
          <Link href="https://endersgate.app" target={"_blank"}>
            <Image
              src={"./assets/storeLogos/pc.png"}
              alt="PC Logo"
              w={["155px", "160px", "160px", "160px", "160px", "250px"]}
              h="auto"
            />
          </Link>
          <Link
            href="https://testflight.apple.com/join/pUbzHdCV"
            target={"_blank"}
          >
            <Image
              src={"./assets/storeLogos/apple.png"}
              alt="Apple Store Logo"
              w={["155px", "160px", "160px", "160px", "160px", "250px"]}
              h="auto"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.FiveHeadGames.EndersGateTCG"
            target={"_blank"}
          >
            <Image
              src={"./assets/storeLogos/android.png"}
              alt="Android Store Logo"
              w={["155px", "160px", "160px", "160px", "160px", "250px"]}
              h="auto"
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeTop;
