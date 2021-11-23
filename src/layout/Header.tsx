import * as React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/organisms/Navbar";
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Navbar>
        {/* <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box> */}
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Cart
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Navbar>
    </>
  );
};

export default Header;
