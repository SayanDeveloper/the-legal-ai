import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.png"
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <Flex position="fixed" top="0" left="0" w="100vw" h="80px" justifyContent={{base: "center", md:"space-between"}} alignItems="center"
            px="50px" boxShadow="0px 0px 10px rgba(0, 0, 0, 0.288)" backdropFilter="blur(3px)" bg="rgba(255, 255, 255, 0.699)"
            zIndex={10}
            >
            <Image src={logo} alt="logo" height={"200px"} />
            <Flex gap="25px" display={{base: "none", md: "flex"}}>
                <a href='#'>Home</a>
                <a href='#'>Legal Areas</a>
                <a href='#'>Vision</a>
            </Flex>
        </Flex>
    )
}

export default Navbar
