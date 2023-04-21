import {  GiHamburgerMenu } from 'react-icons/gi';
import {  BsFillCartFill } from 'react-icons/bs';
import { HStack, Box } from "@chakra-ui/react";

const RightSideNav = ({ setIsDrawerOpen }) => {
  return (
    <HStack spacing={4}>
        <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
            <BsFillCartFill size={30} />
        </Box>
        <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
            <GiHamburgerMenu size={30} onClick={() => setIsDrawerOpen(true)} />
        </Box>
    </HStack>
  )
}

export default RightSideNav