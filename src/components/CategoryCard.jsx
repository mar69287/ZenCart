import { Box, Center, Flex, HStack, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import MenShirt from '../images/menshirt.png'
import WomenShirt from '../images/women-jacket.png'
import JewelryImage from '../images/jewelry.png'
import ElectronicImage from '../images/tv-model.jpg'

const images = [MenShirt, WomenShirt, JewelryImage, ElectronicImage];

const CategoryCard = () => {
  const boxSize = useBreakpointValue({ base: "5rem", md: "6rem" });
  
  return (
    <Flex align="center" justify="center" mx='1rem' mt='1rem'>
      <VStack align="flex-start">
        <Text fontWeight="bold" fontSize="lg" >
          Shop by Category
        </Text>
        <HStack flexWrap="wrap" justify="space-evenly" >
          {images.map((image, index) => (
            <VStack key={index}>
              <Box
                w={boxSize}
                h={boxSize}
                borderRadius="50%"
                overflow="hidden"
                boxShadow="md"
                bgColor="white"
                mx='1rem'
                border="4px" borderColor="blue.900"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.1)' }}
              >
                <Link to="/auth">
                  <Image src={image} objectFit='cover' h="100%" />
                </Link>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="gray.800" marginBottom='1rem'>
                  {index === 0 ? "Men's" :
                    index === 1 ? "Women's" :
                    index === 2 ? "Jewelry" :
                    "Electronics"
                  }
                </Text>
              </Box>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Flex>
  )
}

export default CategoryCard;
