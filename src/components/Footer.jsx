import { Box, Center, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center as="footer" py="1.5rem" bg="gray.200" color="white" height="100%">
      <Box >
        <Text textColor='Black' fontSize="sm">©2023 ZenCart, Inc. All rights reserved.</Text>
      </Box>
    </Center>
  );
};

export default Footer;

