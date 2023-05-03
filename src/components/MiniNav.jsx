import RightSideNav from "./RightSideNav"
import Logo from "./Logo"
import SideDrawer from "./SideDrawer"
import {  HStack } from "@chakra-ui/react";


const MiniNav = ({isDrawerOpen, setIsDrawerOpen, handleUser, countCart }) => {
  return (
    <HStack justifyContent={"space-between"} px={'10px'} paddingTop={3}>
        <Logo />
        <RightSideNav setIsDrawerOpen={setIsDrawerOpen} countCart={countCart} />
        <SideDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        handleUser={handleUser}
        />
    </HStack>
  )
}

export default MiniNav