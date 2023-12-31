/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import Footer from "@/components/newComponents/home/footer";
import Navbar from "@/components/newComponents/floatingMenu/floatingMenu";
import Table from "@/components/newComponents/table/table";
import HomeTop from "@/components/newComponents/carosel/HomeTop";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col relative">
        <HomeTop />
        <Table />
        <Flex
          bg="black"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="auto"
          flexDir="column"
          position="relative"
        >
          <Box
            w={["90%", "80%", "70%", "60%"]}
            h={["auto", "400px", "600px"]}
            mt={["150px"]}
            m={[4, 8]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth="1240px"
            border="1px solid #626262"
            zIndex="999"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YmxknzO-2-k?si=LxQs_TnxbbjeRIbz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Box w={["70%", "60%"]} zIndex="2" p={[4, 6]} maxWidth={"1000px"}>
            <Text
              fontSize={["16px", "24px", "28px", "34px"]}
              fontFamily="Inter"
              fontWeight="bold"
              textAlign="center"
              color="white"
              textShadow="0px 4px 10px #000000"
              mb={[4]}
            >
              Play for Free. <br /> Own what you earn
            </Text>
            <Text
              color="white"
              fontSize={["12px", "14px", "15px", "20px"]}
              fontFamily="Inter"
              fontWeight="300"
              textAlign="center"
              textShadow="0px 4px 10px #000000"
              zIndex="2"
            >
              Enders Gate is a Free to Play trading card game. Players can
              collect, trade, and battle using custom card decks made of up to
              230 digital cards. Enders Gate offers a dynamic and engaging
              community where players can connect, exchange strategies, and
              participate in tournaments and events. Join our passionate player
              base as you explore the ever-expanding universe of Enders Gate.
            </Text>
          </Box>

          <Box
            w={["90%", "80%", "70%", "60%"]}
            zIndex="2"
            display={["none", "none", "flex"]}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          ></Box>

          <Flex
            w={["80%", "60%"]}
            display="flex"
            flexDirection={["column", "column", "row"]}
            justifyContent="center"
            alignItems="center"
            m={[4, 8]}
            mb="20px"
            zIndex="1"
          >
            <Box
              display={["none", "none", "flex"]}
              flexDirection={["row"]}
              justifyContent="center"
              alignItems={["center", "center", "flex-start"]}
              w={["80%", "90%"]}
              mt={[4, 0]}
              flexWrap="nowrap"
              zIndex="2"
            >
              <Link
                target={"_blank"}
                href="https://endersgate.app"
                mr={[4, 4, 8]}
              >
                <Image
                  src={"./assets/storeLogos/pc.png"}
                  alt="PC Logo"
                  w={["140px", "250px"]}
                  h="auto"
                />
              </Link>
              <Link
                target={"_blank"}
                href=" https://testflight.apple.com/join/pUbzHdCV"
                mr={[4, 4, 8]}
              >
                <Image
                  src={"./assets/storeLogos/apple.png"}
                  alt="Apple Store Logo"
                  w={["140px", "250px"]}
                  h="auto"
                />
              </Link>
              <Link
                target={"_blank"}
                href="https://play.google.com/store/apps/details?id=com.FiveHeadGames.EndersGateTCG"
              >
                <Image
                  src={"./assets/storeLogos/android.png"}
                  alt="Android Store Logo"
                  w={["140px", "250px"]}
                  h="auto"
                />
              </Link>
            </Box>
            <Box position="absolute" bottom="0" left="0" zIndex="1">
              <Image
                src={"./assets/footerimages/char1.png"}
                alt="Character 1"
                w="1000px"
                h="auto"
              />
            </Box>

            <Box position="absolute" bottom="0" right="0" zIndex="1">
              <Image
                src={"./assets/footerimages/char2.png"}
                alt="Character 2"
                w="1000px"
                h="auto"
              />
            </Box>
          </Flex>
        </Flex>

        <Flex
          justify="center"
          alignItems="center"
          bg="black"
          flexDir={["column", "row"]}
        >
          <Box bg="black" p="4">
            <Flex flexDir="column" alignItems="center">
              <Flex
                w={["100%", "90%", "85%", "80%"]}
                h={["auto", "auto", "auto", "350px"]}
                display="flex"
                flexDirection={["column", "column", "column", "row"]}
                justifyContent="space-between"
                alignItems={"center"}
                bg="black"
                p="6"
                my="4"
                gap={4}
                borderRadius="lg"
                mx={[0, "100px"]}
                mb="-20px"
                border="1px solid #626262"
              >
                <Box
                  w={["100%", "100%", "100%", "50%"]}
                  display="flex"
                  flexDirection={["column"]}
                  justifyContent="center"
                  px="4"
                  mr={[0, 4]}
                >
                  <Text
                    fontSize={["lg", "xl"]}
                    fontWeight="bold"
                    color="white"
                    fontFamily="Inter"
                    textShadow="0px 4px 10px #000000"
                    textAlign={["center", "center", "center", "left"]}
                  >
                    POWERED BY POLYGON!
                  </Text>
                  <Text
                    fontWeight="bold"
                    color="#B8B8B8"
                    fontFamily="Inter"
                    textShadow="0px 4px 10px #000000"
                    mt="2"
                    textAlign={["center", "center", "center", "left"]}
                  >
                    We are proud to say Enders Gate is now officially partnered
                    with Polygon! Access Enders Gate TCG on the MATIC network.
                    Enjoy an enhanced blockchain gaming experience with seamless
                    transactions and security. <br />
                    <br /> Stay tuned for more updates and exciting developments
                    as we continue to expand our offerings and improve your
                    gaming experience.
                  </Text>
                </Box>
                <Box
                  w={["100%", "50%"]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={[4, 0]}
                >
                  <Image
                    src={"./assets/logos/Polygon.svg"}
                    alt="Polygon logo"
                    width={["200px", "350px"]}
                    height={["auto", "auto"]}
                  />
                </Box>
              </Flex>
              <Flex
                w={["100%", "90%", "85%", "80%"]}
                h={["auto", "auto", "auto", "350px"]}
                justifyContent="space-between"
                alignItems={"center"}
                flexDirection={["column", "column", "column", "row"]}
                bg="black"
                p="6"
                my="4"
                gap={4}
                borderRadius="lg"
                mx={[0, "100px"]}
                border="1px solid #626262"
                mt="40px"
              >
                <Box
                  w={["100%", "100%", "100%", "50%"]}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  px="4"
                  mr={[0, 4]}
                >
                  <Text
                    fontSize={["lg", "xl"]}
                    fontWeight="bold"
                    color="white"
                    fontFamily="Inter"
                    textShadow="0px 4px 10px #000000"
                    textAlign={["center", "center", "center", "left"]}
                  >
                    JOIN OUR COMMUNITY!
                  </Text>
                  <Text
                    fontWeight="bold"
                    color="#B8B8B8"
                    fontFamily="Inter"
                    textShadow="0px 4px 10px #000000"
                    mt="2"
                    textAlign={["center", "center", "center", "left"]}
                  >
                    Discover the latest updates, engage with fellow enthusiasts,
                    and stay tuned for exclusive content. Join us on the Enders
                    Gate Discord server, where adventure awaits at every turn.
                    Don't miss out on the opportunity to be part of our thriving
                    community! Dive into a world of epic card battles and
                    camaraderie as you forge new friendships and test your
                    skills in the ever-evolving world of Enders Gate. Join us
                    today!
                  </Text>
                </Box>
                <Box
                  w={["100%", "50%"]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={[4, 0]}
                >
                  <Image
                    src={"./assets/links/link5.png"}
                    width={["200px", "350px"]}
                    height={["auto", "auto"]}
                    alt="Join Discord"
                  />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
