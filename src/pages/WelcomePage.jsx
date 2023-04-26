import { Box, Center, Heading, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const WelcomePage = ({ user }) => {
  return (
    <Box h="100vh" w="100vw" bg="gray.800" color="white">
      <Center h="100%">
        <Box textAlign="center">
          <Heading fontSize="4xl" mb={4}>Welcome {user.name}!</Heading>
          <Box p={8} borderRadius={8} bg="gray.700">
            <Box fontSize="lg">
              <Text mb={4}>
                Thank you for choosing <Text as="span" fontWeight="bold">ZenCart</Text>, your one-stop shop for all your shopping needs!
              </Text>
              <Text mb={4}>
              Explore our collection of latest  <Link as={RouterLink} to="/products" color="blue.400">Products</Link> and narrow down your search with our user-friendly tools, such as browsing by category, using the search bar, or viewing all products at once.
              </Text>
              <Text>
                We hope you enjoy your shopping experience with us!
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  )
}

export default WelcomePage;
