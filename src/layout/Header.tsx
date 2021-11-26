import * as React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import { Navbar } from "../components/organisms/Navbar";
import { useCartState } from "../hooks/useCartState";
import { Cart } from "../components/organisms/Cart";

const Header = () => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartState = useCartState();

  return (
    <>
      <Navbar>
        <Button
          m={4}
          leftIcon={<TiShoppingCart />}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          Cart({cartState.cart.length})
        </Button>
        <Cart btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      </Navbar>
    </>
  );
};

export default Header;
