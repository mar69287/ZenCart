import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProduct } from "../../utilities/products-api";
import { Grid, GridItem, Text, Image, HStack, Heading, Box, Button } from "@chakra-ui/react";
import {  BsFillCartFill } from 'react-icons/bs';
import {  GiHamburgerMenu } from 'react-icons/gi';
import SideDrawer from "../../components/SideDrawer";
import ReactStars from "react-rating-stars-component";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

const ProductPage = ({ isDrawerOpen, setIsDrawerOpen, handleUser }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [showRatingsCount, setShowRatingsCount] = useState(false);

    useEffect(() => {
        async function getProductById() {
            const product = await getProduct(productId);
            setProduct(product);
            console.log(product)
        }
        getProductById();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowRatingsCount((prev) => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
          {product ? (
            <Grid
              templateRows="1fr 1fr 1fr"
              templateColumns="1fr 1fr"
              height="100vh"
            >
              <GridItem colSpan={2}>
                <HStack justifyContent={"space-between"} padding={'10px'}>
                  <Logo />
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
              </GridItem>
              <GridItem colSpan={2}>
                <Heading>{product.title}</Heading>
              </GridItem>
              <GridItem colSpan={1} justifySelf="center" alignSelf="center">
                <Image src={product.image} boxSize="350px" />
              </GridItem>
              <GridItem colSpan={1} justifySelf="center" alignSelf="center">
                <Text>{product.description}</Text>
                <Box mt="4">
                    <HStack  spacing={4} justifyContent={'center'}>
                        <Box>
                            <Text fontSize="2xl" fontWeight="semibold">
                            ${product.price}
                            </Text>
                            <Text color="gray.500" fontSize="sm">
                            Price
                            </Text>
                        </Box>
                        <Box>
                            <ReactStars
                            count={5}
                            value={product.rating.rate}
                            size={24}
                            edit={false}
                            />
                            <Text color="gray.500" fontSize="sm">
                            {showRatingsCount ? `(${product.rating.count} ratings)` : `(${product.rating.rate} rating)`}
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize="2xl" fontWeight="semibold">
                            {product.count}
                            </Text>
                            <Text color="gray.500" fontSize="sm">
                            In Stock
                            </Text>
                        </Box>
                        <Button colorScheme="blue" size="lg">
                            Add to Cart
                        </Button>
                    </HStack>
                </Box>
              </GridItem>
            </Grid>
          ) : (
            <p>is Loading</p>
          )}
        </>
      );
      
}      

export default ProductPage
