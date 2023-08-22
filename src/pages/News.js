import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
// import { useState } from "react";
// import { Link } from 'react-router-dom'
// import gallerybg from "../assets/gallerybg.svg"
// import Card from '@/components/home/News/Card'

const News = () => {
  //   const [activeTab, setActiveTab] = useState("news");

  return (
    <Flex
      flexDir="column"
      w="100vw"
      minH="100vh"
      bgImage={`url(${gallerybg})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      py={20}
    >
      {/* <Flex px={[4,4,4,10]} w="full" bg="#080813" borderBottom="1px solid darkgray" minH="40vh" alignItems="flex-end" >
            <Flex w="full" flexDir="column" >
                <Flex w="full" mb={[4,4,4,0]} justifyContent="space-between" alignItems="center" >
                    <Text fontWeight="semibold" fontSize={["md", "md", "md", "xl"]} color="#3A3B4B" >2, MAY 2022</Text>
                    <Flex bg="#3a3b4a" px={4} >
                        <Text fontSize={["md", "md", "md", "xl"]} color="white"  >FEATURED POST</Text>
                    </Flex>
                </Flex>
                <Text fontSize={["3xl", "3xl", "3xl", "5xl"]} color="white" >poop or scoop</Text>
                <Text mt={[4,4,4,0]} fontWeight="semibold" fontSize={["md", "md", "md", "xl"]} color="#3A3B4B" >READ MORE</Text>
                <Flex mt={4} >
                    <Button _focus={{border: "none"}} onClick={() => setActiveTab("news")} size="lg" mr={2} rounded="none" bg={activeTab === "news" ? "#3a3b4a" : "#1d1c2b"} color={activeTab === "news" ? "white" : "#3A3B4B" } _hover={{bg: activeTab === "news" ? "#3a3b4a" : "#1d1c2b"}} >NEWS</Button>
                    <Button _focus={{border: "none"}} onClick={() => setActiveTab("game")} size="lg" rounded="none" bg={activeTab === "game" ? "#3a3b4a" : "#1d1c2b"}  color={activeTab === "game" ? "white" : "#3A3B4B" } _hover={{bg: activeTab === "game" ? "#3a3b4a" : "#1d1c2b"}} >GAME UPDATES</Button>
                </Flex>
            </Flex>  
        </Flex>
        <Grid mt={20} gap="1rem" px={[4,4,4,20]} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]} >
            {activeTab === "news" ? (
                <>
                    <GridItem>
                        <Link to="/news/1" >
                            <Card/>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link to="/news/1" >
                            <Card/>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link to="/news/1" >
                            <Card/>
                        </Link>
                    </GridItem>
                </>
            ) : (
                <>
                    <GridItem>
                        <Link to="/news/game-updates/1" >
                            <Card/>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link to="/news/game-updates/1" >
                            <Card/>
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link to="/news/game-updates/1" >
                            <Card/>
                        </Link>
                    </GridItem>
                </>
            )}
        </Grid> */}
    </Flex>
  );
};

export default News;
