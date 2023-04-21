import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import { HStack, Text } from "@chakra-ui/react";
import SearchInput from "../SearchInput";
import {  BsFillCartFill } from 'react-icons/bs';
import {  GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <HStack padding="10px">
            <Text fontSize={'2xl'} fontFamily={'monospace'}>ZenCart</Text>
            <SearchInput />
            <HStack spacing={4}>
                <BsFillCartFill size={30} />
                <GiHamburgerMenu size={30} />
            </HStack>
        </HStack>
    )
}

{/* <Link to="" onClick={handleLogOut}>Log Out</Link> */}