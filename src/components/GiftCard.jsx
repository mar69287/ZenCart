import { useEffect, useState } from "react";
import { getCategory } from "../utilities/products-api";
import ProductCard from './ProductCard'
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GiftCard = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getAll() {
            const category = `men's clothing`
            const products = await getCategory(category);
            setProducts(products)
        }
        getAll()
    }, [])

  return (
    <Box textAlign="center">
      <Box h='100%' w='100%' bg="teal.300" py={7}>
        <Center flexDirection={{base: 'column', md: 'row'}}>
            <Box m={4} minW='20rem' >
                <Heading textColor='gray.700' py={2}>Gifts he'll love</Heading>
                <Text textColor='gray.700' fontWeight='medium' m={2}>Find the perfect gift to show Dad how much you care.</Text>
            </Box>
            <Box  display="flex" overflowX="auto" whiteSpace="nowrap" mx={4} w={{base: '90%', md: '75%'}}>
                {products.slice(0,3).map(product => (
                <Link key={product.id} to={`/auth`}>
                    <Box m={2} minW='25rem' >
                        <ProductCard product={product} />
                    </Box>
                </Link>
                ))}
            </Box>
        </Center>
      </Box>
    </Box>
  )
}

export default GiftCard;
