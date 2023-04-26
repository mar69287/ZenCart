import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProduct } from "../../utilities/products-api";
import { Grid, GridItem, Text, Image, HStack, Heading, Box, Button, Stack, Center, useBreakpointValue, Show, useToast, Spinner } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { useMediaQuery } from '@chakra-ui/react';
import MiniNav from "../../components/MiniNav";

const ProductPage = ({ cart, setCart, isDrawerOpen, setIsDrawerOpen, handleUser, setCountCart, countCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [showRatingsCount, setShowRatingsCount] = useState(false);
    const boxWidth = useBreakpointValue({ base: "95%", md: "50%" });
    const size = useBreakpointValue({ base: 'sm', md: 'lg' });
    const imageSize = useBreakpointValue({ base: "250px", sm: "350px" });
    const [isSmallerScreen] = useMediaQuery("(max-width: 600px)");
    const toast = useToast();

    useEffect(() => {
      setCountCart(cart.length);
  
    }, [cart]);


    useEffect(() => {
        async function getProductById() {
            const product = await getProduct(productId);
            setProduct(product);
        }
        getProductById();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowRatingsCount((prev) => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const addToCart = () => {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        setCart((prevCart) => [...prevCart, cartItem]);
      }
    
      toast({
        title: "Product added to cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };
    
    
    
    

    return (
        <>
          {product ? (
              <Grid
              templateRows='100px 1fr'
              templateColumns="1fr 1fr"
              height="100vh"
              >
                <GridItem colSpan={2}>
                  <MiniNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleUser} countCart={countCart} />
                </GridItem>
                <GridItem colSpan={2} justifySelf="center" alignSelf="center">
                  <Heading paddingBottom={6}>{product.title}</Heading>
                  <Stack direction={['column', 'row']} spacing='24px' align="center" justify='center'>
                      <Center w={boxWidth}>
                        <Image src={product.image} boxSize={imageSize} align='' />
                      </Center>
                      <Box w={boxWidth}>
                        <Text fontFamily={'Roboto'}>{product.description}</Text>
                        <Box mt="4">
                          <HStack spacing={4} justifyContent={'center'}>
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
                                size={isSmallerScreen ? 16 : 24}
                                edit={false}
                              />
                              <Text color="gray.500" fontSize="sm">
                                {showRatingsCount ? `(${product.rating.count} ratings)` : `(${product.rating.rate} rating)`}
                              </Text>
                            </Box>
                            <Show above="lg">
                              <Box>
                                <Text color="gray.500" fontSize="sm">
                                  In Stock
                                </Text>
                              </Box>
                            </Show>
                            <Button colorScheme="blue" size={size} onClick={addToCart}>
                              Add to Cart
                            </Button>
                          </HStack>
                        </Box>
                      </Box>
                    </Stack>
                </GridItem>
              </Grid> 
          ) : (
            <>
              <MiniNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleUser} countCart={countCart} />
              <Spinner />
            </>

          )}
        </>
      );
      
}      

export default ProductPage

