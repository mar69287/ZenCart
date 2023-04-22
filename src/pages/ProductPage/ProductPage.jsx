import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProduct } from "../../utilities/products-api";
import { Grid, GridItem, Text, Image, HStack, Heading, Box, Button, Stack, Center, useBreakpointValue, Show } from "@chakra-ui/react";
import SideDrawer from "../../components/SideDrawer";
import ReactStars from "react-rating-stars-component";
import Logo from "../../components/Logo";
import RightSideNav from "../../components/RightSideNav";
import { useMediaQuery } from '@chakra-ui/react';

const ProductPage = ({ isDrawerOpen, setIsDrawerOpen, handleUser }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [showRatingsCount, setShowRatingsCount] = useState(false);
    const boxWidth = useBreakpointValue({ base: "95%", md: "50%" });
    const size = useBreakpointValue({ base: 'sm', md: 'lg' });
    const imageSize = useBreakpointValue({ base: "250px", sm: "350px" });
    const [isSmallerScreen] = useMediaQuery("(max-width: 600px)");


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
              templateRows='100px 1fr'
              templateColumns="1fr 1fr"
              height="100vh"
              >
                <GridItem colSpan={2}>
                    <HStack justifyContent={"space-between"} padding={'10px'}>
                      <Logo />
                      <RightSideNav setIsDrawerOpen={setIsDrawerOpen} />
                      <SideDrawer 
                        isOpen={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                        handleUser={handleUser}
                      />
                    </HStack>
                </GridItem>
                <GridItem colSpan={2} justifySelf="center" alignSelf="center">
                  <Heading paddingBottom={6}>{product.title}</Heading>
                  <Stack direction={['column', 'row']} spacing='24px' align="center" justify='center'>
                      <Center w={boxWidth}>
                        <Image src={product.image} boxSize={imageSize} align='' />
                      </Center>
                      <Box w={boxWidth}>
                        <Text>{product.description}</Text>
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
                            <Button colorScheme="blue" size={size}>
                              Add to Cart
                            </Button>
                          </HStack>
                        </Box>
                      </Box>
                    </Stack>
                </GridItem>
              </Grid> 
          ) : (
            <p>is Loading</p>
          )}
        </>
      );
      
}      

export default ProductPage

