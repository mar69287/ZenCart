import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

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
                <Box mt={4}>
                {showLogin ? (
                    <Text>
                    New to Fresh Finds?{' '}
                    <Button size="sm" onClick={() => setShowLogin(false)}>Create your account</Button>
                    </Text>
                ) : (
                    <Text>
                    Already have an account?{' '}
                    <Button size="sm" onClick={() => setShowLogin(true)}>Log in</Button>
                    </Text>
                )}
                </Box>
            </Flex>
        </Box>
    )
}