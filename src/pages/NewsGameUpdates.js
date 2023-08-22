import React from 'react'
import {Flex, Text, Box} from "@chakra-ui/react"
import newsdetailarrowback from "../assets/newsdetailarrowback.svg"
import { Link } from 'react-router-dom'

const Arrow = ({width, height, ...props}) => (
    <img alt='update' width={width} height={height} {...props} src={newsdetailarrowback} />
)

const NewsGameUpdates = () => {
  return (
    <Flex pt={20} w="100vw" minH={["auto", "auto", "auto", "100vh"]} bg="#080813"  >
        <Flex justifyContent="center" flexDir="column" py={10} px={[8,8,10,14]} w="full" pos="relative" h="full" >
            <button
            style={{
                position: "absolute",
                right: "2rem",
                top: "2rem",
                display: "flex",
                flexDirection: "column",
                paddingLeft: ".3rem",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                paddingRight: ".3rem",
                border: "1px solid white",
                justifyContent: "center",
                alignItems: "center",
                background: "#3a3b4a",
            }}
            >
                <Arrow width="15rem" style={{transform: "rotate(90deg)", marginBottom: ".5rem"}} />
                <Text color="white" >
                    UP
                </Text>
            </button>
            {/* <Button  pos="absolute" right={10} top={[4,4,20,20]} py={8} display="flex" flexDir="column" w="12" bg="#3a3b4a" color="white" border="1px solid white" rounded="none" >
                
                
            </Button> */}
            <Link to="/news" >
                {/* <Button h="10" fontSize="2xl" w="32" bg="#3a3b4a" color="white" border="1px solid white" rounded="none" leftIcon={<Arrow width="15rem" />} >BACK</Button> */}
                <button className='news-button' >
                    <Arrow width="15rem" />
                    <Text ml={2} fontWeight="semibold" > BACK </Text>
                </button>
            </Link>
            <Box w={["full", "full", "50%", "35%"]} >
                <Text fontSize="4xl" fontWeight="semibold" mt={4} color="white" >GAME UPDATES: </Text>
                <Text mt={2} color="white" >Update name: The not so interesting one</Text>
                <Text mt={2} color="white" >Publisher: TheWolfDuro</Text>
                <Text mb={4} mt={2} color="white" >Date: 2. MAY 2022</Text>
                <Text mt={2} color="white" >
                Game effects changes:<br/>-E=MC[]exc ex,c exc exc exc exc exc exc exc exc .exc exc exc exc exc exc exc release me of this pain exc exc exc exc exc. <br/> 
                -exc exc exc exc exc <br/> 
                -exc exc exc exc exc. exc exc exc exc exc exc exc ex,c exc exc exc exc exc exc exc exc exc exc, exc exc<br/> exc exc exc exc exc <br/>
                -exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc -exc exc exc exc exc. exc exc exc exc ex<br/>c exc exc ex,c exc exc <br/> 
                -exc exc exc exc exc exc exc exc, exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc <br/>exc exc exc exc exc exc <br/> 
                -exc exc exc exc exc. exc exc exc exc exc exc exc ex,c exc exc <br/> 
                -exc exc exc exc exc exc exc<br/> exc, exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc<br/><br/>
                Website bug fixes:<br/> -exc exc exc exc exc. exc exc exc exc exc exc exc ex,c exc exc -exc exc exc exc exc exc exc<br/>
                </Text>
            </Box>
        </Flex>
        {/* <Flex justifyContent="center" py={10} w={["full","full", "full", '50%']} h="full" bg="rgba(50, 153, 79, 0.2);" >
            <Text fontSize="4xl" mt={4} color="white" >ADDITIONAL FILES: </Text>
        </Flex> */}
    </Flex>
  )
}

export default NewsGameUpdates