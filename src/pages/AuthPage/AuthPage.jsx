import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <Box height="100vh" display="flex" alignItems="center">

            <Flex
                alignItems="center"
                direction="column"
            
                justifyContent="center"
                width="100%"
            >
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
                <HStack>
                {showLogin ? (
                    <HStack paddingTop={4}>
                        <Text >
                        New to Fresh Finds?{' '}
                        </Text>
                        <Text as={'b'} _hover={{ color: "blue.500" }} cursor={'pointer'} onClick={() => setShowLogin(false)}>Create your account</Text>
                    </HStack>
                ) : (
                    <HStack>
                        <Text>
                        Already have an account?{' '}
                        </Text>
                        <Text as={'b'} _hover={{ color: "blue.500" }} cursor={'pointer'} onClick={() => setShowLogin(true)}>Log in</Text>
                    </HStack>
                )}
                </HStack>
            </Flex>
        </Box>
    )
}