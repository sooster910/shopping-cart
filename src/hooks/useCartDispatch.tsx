import { useContext } from "react";
import { CartDispatchContext } from "../context/CartContext";

export const useCartDispatch = () => {
  const CartDispatch = useContext(CartDispatchContext);
  if (!CartDispatch) throw new Error("CartContextProvider not found");
  return CartDispatch;
};
