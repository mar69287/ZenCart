import {  GiHamburgerMenu } from 'react-icons/gi';
import {  BsFillCartFill } from 'react-icons/bs';
import { HStack, Box, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RightSideNav = ({ setIsDrawerOpen, countCart }) => {
  return (
    <HStack spacing={4}>
      <Link to="/cart">
        <Box position="relative" _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
          <Badge colorScheme="red" borderRadius="full" position="absolute" top="-12px" right="-12px" fontSize="sm" px={2}>
            {countCart}
          </Badge>
          <BsFillCartFill size={30} />
        </Box>
      </Link>
      <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
        <GiHamburgerMenu size={30} onClick={() => setIsDrawerOpen(true)} />
      </Box>
    </HStack>
  )
}

export default RightSideNav