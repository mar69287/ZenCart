import CartItemCard from "../components/CartItemCard";
import MiniNav from "../components/MiniNav";
import { HStack, VStack, Button, Text, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, setCart, isDrawerOpen, setIsDrawerOpen, handleUser }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log(cart)

    return (
        <>
            <MiniNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleUser} />
            {cart.map(item => {
                return <CartItemCard key={item.id} item={item} cart={cart} setCart={setCart} />
            })}
            <VStack marginY={10} >
                <HStack w="100%">
                    <Spacer />
                    <Text fontSize="lg" fontWeight="bold" mb={2}>Total: ${total.toFixed(2)}</Text>
                </HStack>
                <HStack w="100%" paddingBottom={'4'}>
                    <Spacer />
                    <Link to="/products">
                        <Button colorScheme="gray" size="md">
                        Continue Shopping
                        </Button>
                    </Link>
                    <Button colorScheme="blue" size="md">
                        Purchase
                    </Button>
                </HStack>
            </VStack>
        </>
      )
};
  
export default CartPage;

  

