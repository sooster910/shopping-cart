import { Box } from "@chakra-ui/react";
import * as React from "react";
import { DefalutButton } from "../atoms/DefaultButton";
import { AddIcon } from "@chakra-ui/icons";

type AddToCartProps = {
  handleAddToCart: (e) => void;
  text: string;
  prefix: string;
  disabled?: boolean;
};

export const AddToCart = ({
  handleAddToCart,
  text,
  prefix,
  disabled = false,
}: AddToCartProps) => {
  return (
    <Box mt={4} mb={4}>
      <DefalutButton
        isDisabled={disabled}
        rightIcon={<AddIcon />}
        colorScheme={"blue"}
        onClick={() => handleAddToCart(prefix)}
      >
        {text}
      </DefalutButton>
    </Box>
  );
};

export default AddToCart;
