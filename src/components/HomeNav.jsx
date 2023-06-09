import {  HStack, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeNav = () => {
    const padding = useBreakpointValue({ base: '10px', md: '20px', lg: '30px' })
    const height = useBreakpointValue({ base: "80px", md: "90px" });
    const linkFontSize = useBreakpointValue({ base: "1.1rem", md: "1.4rem" });

  return (
    <HStack bg="teal.600" justifyContent="space-between" padding={padding} height={height} >
        <Text fontWeight="bold" color={'white'} fontSize={{ base: "2xl", md: "3xl" }} fontFamily={'Montserrat, sans-serif'}>ZenCart</Text>
        <Box
          _hover={{
            cursor: 'pointer',
            color: 'gray.500',
            transition: 'color 0.2s ease-in-out',
            textDecoration: 'underline',
          }}
        >
          <Link to="/auth" style={{ color: 'white', fontFamily: 'Lato', fontSize: linkFontSize }}>
            Account
          </Link>
        </Box>
    </HStack>
  )
}

export default HomeNav