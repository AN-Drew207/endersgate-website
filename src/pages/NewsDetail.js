import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import gallerybg from "../assets/gallerybg.svg"
import newsdetailarrowback from "../assets/newsdetailarrowback.svg"
import ggh from "../assets/ggh.svg"
import { Link } from 'react-router-dom'

const Arrow = ({width, height}) => (
    <img alt='details' width={width} height={height} src={newsdetailarrowback} />
)

const NewsDetail = () => {
  return (
    <Flex py={20} bgImage={`url(${gallerybg})`} bgSize="cover" w="100vw" minH="100vh" flexDir="column" >
        <Flex minH="40vh" bg="#080813" flexDir={["column", "column", "row", "row"]} borderBottom="1px solid grey" w="full" px={6} py={10} >
            <Link to="/news" >
                <Button bg="#3a3b4a" color="white" border="1px solid white" rounded="none" leftIcon={<Arrow width="15rem" />} >BACK</Button>
            </Link>
            <Flex textAlign="center" mt={[10,10,4,0]} justifyContent="center" flexDir="column" w={["full", "full", "50%", "50%"]} mx="auto"  alignItems="center" >
                <Text color="white" fontSize={["3xl", "3xl", "4xl", "5xl"]} fontWeight="semibold" >EARLY INVITE COMPETITION!</Text>
                <Text color="#3A3B4B" fontSize={["md", "md", "lg", "xl"]} fontWeight="semibold" >2, MAY 2022</Text>
                <Flex mt={10} w="full" h="72" bgImage={`url(${ggh})`} bgSize="cover" bgPos="center" />
            </Flex>
        </Flex>
        <Flex w={["90%", "90%", "50%", "40%"]} mx="auto" flexDir="column" py={10} >
            
            <Text color="white" fontSize="xl" >
            An early invite competition is here! Grab a free card with only
            3 invites exc ex,c exc exc exc exc exc exc exc exc .exc exc exc 
            exc exc exc exc exc exc exc exc exc.</Text>
            <Text color="white" mt={4} fontSize="xl" >
            exc exc exc exc exc. exc exc exc exc exc exc exc ex,c exc exc
            exc exc exc exc exc exc exc exc, exc exc exc exc exc exc exc
            exc exc exc exc exc exc exc exc exc exc exc exc exc exc exc
            </Text>
        </Flex>
    </Flex>
  )
}

export default NewsDetail