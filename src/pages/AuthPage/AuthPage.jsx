import { useState } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import SplashScreen from '../../components/SpalshScreen';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  function handleSplashScreenTimeout() {
    setShowSplashScreen(false);
  }

  return (
    <Box height="100vh" display="flex" alignItems="center">
      {showSplashScreen ? (
        <SplashScreen onTimeout={handleSplashScreenTimeout} />
      ) : (
        <Flex alignItems="center" direction="column" justifyContent="center" width="100%">
          <Text fontSize="6xl" fontWeight="bold" fontFamily={'Montserrat'} mb={4}>ZenCart</Text> 
          {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
          <HStack>
            {showLogin ? (
              <HStack paddingTop={4}>
                <Text>New to Fresh Finds?{' '}</Text>
                <Text as={'b'} _hover={{ color: 'blue.500' }} cursor={'pointer'} onClick={() => setShowLogin(false)}>Create your account</Text>
              </HStack>
            ) : (
              <HStack>
                <Text>Already have an account?{' '}</Text>
                <Text as={'b'} _hover={{ color: 'blue.500' }} cursor={'pointer'} onClick={() => setShowLogin(true)}>Log in</Text>
              </HStack>
            )}
          </HStack>
        </Flex>
      )}
    </Box>
  );
}
