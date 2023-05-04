import { Link } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import { getProducts } from "../utilities/products-api";


const Logo = () => {

  return (
    <Link to={'/products'}>
        <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
            <Text fontSize={'2xl'} fontFamily={'Montserrat, sans-serif'}>ZenCart</Text>
        </Box>
    </Link>
  )
}

export default Logo