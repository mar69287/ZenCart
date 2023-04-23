import { useNumberInput, HStack, Button, Input } from "@chakra-ui/react";
import Logo from "../components/Logo";
import MiniNav from "../components/MiniNav";

const CartPage = ({ cart, setCart, isDrawerOpen, setIsDrawerOpen, handleUser }) => {
    return (
        <MiniNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleUser} />
      )
};
  
export default CartPage;
  

