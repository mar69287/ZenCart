import { Box, Heading, Text } from "@chakra-ui/react";

const WelcomeCard = () => {
  return (
    <Box textAlign="center" py={7} bg={'white'}>
      <Heading>Welcome to ZenCart!</Heading>
      <Text mt={4}>Please login to view all of our products.</Text>
    </Box>
  );
};

export default WelcomeCard;
