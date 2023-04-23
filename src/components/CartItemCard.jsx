import { Box, Image, Text, Button, Flex, VStack, Center } from '@chakra-ui/react';
import QuantityInput from './QuantityInput';

const CartItem = ({ item, cart, setCart }) => {
  const handleRemove = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const handleQuantityChange = (e) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: e.target.value };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  return (
    <Box border="1px solid gray" borderRadius="md" padding="4" mt={'4'}>
      <Flex justifyContent="space-between" alignItems="center" mb="2">
        <Image src={item.image} boxSize={'70px'} mr="2" />
        <Text 
            fontWeight="bold"
            isTruncated
            overflow="hidden"
            textOverflow="ellipsis"
        >{item.title}</Text>
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
  );
};

export default CartItem;
