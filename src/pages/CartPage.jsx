import CartItemCard from "../components/CartItemCard";
import MiniNav from "../components/MiniNav";

const CartPage = ({ cart, setCart, isDrawerOpen, setIsDrawerOpen, handleUser }) => {
    return (
        <>
            <MiniNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleUser} />
            {cart.map(item => {
                return <CartItemCard key={item.id} item={item} cart={cart} setCart={setCart} />
            })}
        </>
      )
};
  
export default CartPage;

  

