import { Box, Center, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center as="footer" py="1.5rem" bg="blue.900" color="white" height="100%" marginTop="1rem">
      <Box>
        <Text fontSize="sm">©2023 ZenCart Supplies, Inc. All rights reserved.</Text>
      </Box>
    </Center>
  );
};

export default Footer;

