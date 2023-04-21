import { HStack, Text, Box } from "@chakra-ui/react";
import SearchInput from "../SearchInput";
import {  BsFillCartFill } from 'react-icons/bs';
import {  GiHamburgerMenu } from 'react-icons/gi';
import SideDrawer from "../SideDrawer";
import Logo from "../Logo";

export default function NavBar({ isDrawerOpen, setIsDrawerOpen, handleUser, setSearchText }) {

    return (
        <HStack padding="10px">
            <Logo />
            <SearchInput setSearchText={setSearchText}/>
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
                handleUser={handleUser}
            />
        </HStack>
        
    )
}
