import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, Box } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const SideDrawer = ({ isOpen, onClose, handleUser,}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Stack spacing={'20px'}>
            <ColorModeSwitch />
            <Link to='/orders'>Order History</Link>
            <Box _hover={{ cursor: 'pointer', color: 'gray.500', transition: 'color 0.2s ease-in-out' }}>
              <Link to="" onClick={handleUser}>Log Out</Link>
            </Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
