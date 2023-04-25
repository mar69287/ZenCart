import { HStack } from "@chakra-ui/react";
import SearchInput from "../SearchInput";
import SideDrawer from "../SideDrawer";
import Logo from "../Logo";
import RightSideNav from "../RightSideNav";

export default function NavBar({ isDrawerOpen, setIsDrawerOpen, handleUser, setSearchText, countCart }) {

    return (
        <HStack padding="10px">
            <Logo />
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
