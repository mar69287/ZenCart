import { Box, Heading, Text } from "@chakra-ui/react";

const WelcomeCard = () => {
  return (
    <Box textAlign="center" display='flex' justifyItems='center' justifyContent='center'>
      <Box h='100%' w='90%' bg="blue.400" py={7} borderRadius='xl'>
        <Heading textColor='white'>Welcome to ZenCart!</Heading>
        <Text mt={4} textColor='white'>Please login to view all of our products.</Text>
      </Box>
    </Box>
  );
};

export default WelcomeCard;
