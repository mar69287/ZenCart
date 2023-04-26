import { useEffect } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const SpalshScreen = ({ onTimeout }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          onTimeout();
        }, 3000);
    
        return () => clearTimeout(timeoutId);
      }, [onTimeout]);
    
      return (
        <Box height="100vh" width={'100vw'} display="flex" alignItems="center" justifyContent="center">
          <Center flexDirection="column" textAlign="center">
            <Text fontSize="6xl">ZenCart</Text>
            <Text fontSize="lg" mt="2">Shop with mindfulness, save with ZenCart</Text>
          </Center>
        </Box>
      );
}


export default SpalshScreen