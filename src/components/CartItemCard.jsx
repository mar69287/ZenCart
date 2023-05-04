import { Box, Image, Text, Button, Flex, VStack, Center } from '@chakra-ui/react';
import QuantityInput from './QuantityInput';
import { Link } from "react-router-dom";

const CartItem = ({ item, cart, setCart }) => {
  const handleRemove = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <Center>
      <Box border="1px solid gray" borderRadius="md" padding="4" mt={'4'} maxW={['100%', '90%', '70%']} minW={['100%', '90%', '70%']}>
        <Flex justifyContent="space-between" alignItems="center" mb="2">
          <Image src={item.image} boxSize={'70px'} mr="2" borderRadius="md"/>
          <Link to={`/products/${item.id}`}>
            <Text
                fontWeight="bold"
                fontSize={['14px', '16px', '18px']}                
            >{item.title}</Text>
          </Link>
          <VStack padding={'1'}>
              <Text fontWeight="bold">${item.price}</Text>
              <Button size="sm" onClick={handleRemove}>
                Remove
              </Button>
          </VStack>
        </Flex>
        <Center>
          <QuantityInput item={item} cart={cart} setCart={setCart} />
        </Center>
      </Box>
    </Center>
  );
};

export default CartItem;
