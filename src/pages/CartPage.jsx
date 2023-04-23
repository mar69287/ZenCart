import CartItemCard from "../components/CartItemCard";
import MiniNav from "../components/MiniNav";
import { HStack, VStack, Button, Text, Spacer, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { createOrder } from "../utilities/orders-api";

const CartPage = ({ cart, setCart, isDrawerOpen, setIsDrawerOpen, handleUser }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
     const toast = useToast();

    const handlePurchase = async () => {
    try {
      await createOrder(cart, total);
      setCart([]);
      toast({
        title: "Purchase successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error processing purchase",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
                    <Button colorScheme="blue" size="md" onClick={handlePurchase}>
                        Purchase
                    </Button>
                </HStack>
            </VStack>
        </>
      )
};
  
export default CartPage;

  

