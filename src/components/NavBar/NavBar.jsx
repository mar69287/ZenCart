import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import { HStack, Text, Box } from "@chakra-ui/react";
import SearchInput from "../SearchInput";
import {  BsFillCartFill } from 'react-icons/bs';
import {  GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import SideDrawer from "../SideDrawer";

export default function NavBar({ user, setUser }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <HStack padding="10px">
            <Text fontSize={'2xl'} fontFamily={'monospace'}>ZenCart</Text>
            <SearchInput />
            <HStack spacing={4}>
                <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
                    <BsFillCartFill size={30} />
                </Box>
                <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
                    <GiHamburgerMenu size={30} onClick={() => setIsDrawerOpen(true)} />
                </Box>
            </HStack>
            <SideDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                handleLogOut={handleLogOut}
            />
        </HStack>
        
    )
}

{/* <Link to="" onClick={handleLogOut}>Log Out</Link> */}