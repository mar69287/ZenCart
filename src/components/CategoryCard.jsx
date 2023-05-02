import MenShirt from '../images/menshirt.png'
import WomenShirt from '../images/women-jacket.png'
import JewelryImage from '../images/jewelry.png'
import ElectronicImage from '../images/tv-model.jpg'
import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";

const images = [MenShirt, WomenShirt, JewelryImage, ElectronicImage];

const CategoryCard = () => {
  return (
    <Center>
      <VStack align="flex-start">
        <Text fontWeight="bold" fontSize="lg" mb="1rem">
          Shop by Category
        </Text>
        <HStack spacing={10}>
          {images.map((image, index) => (
            <VStack key={index}>
              <Box
                w="8rem"
                h="8rem"
                borderRadius="50%"
                overflow="hidden"
                boxShadow="md"
                bgColor="white"
                mb=".5rem"
                border="4px" borderColor="blue.900"
              >
                <Image src={image} objectFit='cover' h="100%" />
              </Box>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                {index === 0 ? "Men's Clothing" :
                 index === 1 ? "Women's Clothing" :
                 index === 2 ? "Jewelry" :
                 "Electronics"
                }
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Center>
  )
}

export default CategoryCard;
