import {  HStack, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeNav = () => {
    const padding = useBreakpointValue({ base: '10px', md: '20px', lg: '30px' })
    const height = useBreakpointValue({ base: "80px", md: "90px" });

  return (
    <HStack bg="blue.900" justifyContent="space-between" padding={padding} height={height}>
        <Text fontWeight="bold" color={'white'} fontSize={'3xl'} fontFamily={'Montserrat, sans-serif'}>ZenCart</Text>
        <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
              <Link to="/auth" style={{ color: "white", fontFamily: "Lato", fontSize: "1.2rem" }} >Account</Link>
        </Box>
    </HStack>
  )
}

export default HomeNav