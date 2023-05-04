import { HStack, Box } from "@chakra-ui/react";
import SearchInput from "../SearchInput";
import SideDrawer from "../SideDrawer";
import Logo from "../Logo";
import RightSideNav from "../RightSideNav";
import { getProducts } from "../../utilities/products-api";


export default function NavBar({ setProducts, isDrawerOpen, setIsDrawerOpen, handleUser, setSearchText, countCart }) {
    const handleLogoClick = async () => {
        const products = await getProducts();
        setProducts(products);
      };


    return (
        <HStack padding="10px">
            <Box onClick={() => handleLogoClick()}>
                <Logo />
            </Box>
            <SearchInput setSearchText={setSearchText}/>
            <RightSideNav setIsDrawerOpen={setIsDrawerOpen} countCart={countCart} />
            <SideDrawer 
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                handleUser={handleUser}
            />
        </HStack>
        
    )
}
