import { useContext } from "react";
import { CartStateContext } from "../context/CartContext";

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) throw new Error("CartContextProvider not found");
  return cartState;
};
