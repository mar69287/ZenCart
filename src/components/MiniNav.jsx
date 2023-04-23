import RightSideNav from "./RightSideNav"
import Logo from "./Logo"
import SideDrawer from "./SideDrawer"
import {  HStack } from "@chakra-ui/react";


const MiniNav = ({isDrawerOpen, setIsDrawerOpen, handleUser}) => {
  return (
    <HStack justifyContent={"space-between"} padding={'10px'}>
        <Logo />
        <RightSideNav setIsDrawerOpen={setIsDrawerOpen} />
        <SideDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        handleUser={handleUser}
        />
    </HStack>
  )
}

export default MiniNav