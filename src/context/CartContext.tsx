import { createContext, Dispatch, useReducer, useEffect } from "react";
import { cartReducer } from "./Reducers";
import { ProductPreview } from "../types/PreviewProduct";

export type CartDispatch = Dispatch<Action>;
export type Prefix = ProductPreview["prefix"];
export type ProductForCart = {
  productDetail: ProductPreview;
  qty: number;
  cartId?: string;
};
export type CartState = {
  cart: ProductForCart[];
};
export type cardId = string;
export type Action =
  | {
      type: "ADD_TO_CART";
      payload: ProductForCart;
    }
  | { type: "UPDATE_CART_QTY"; payload: { qty: number; cartId: string } }
  | { type: "REMOVE_FROM_CART"; payload: { cartId: cardId } };

export const CartStateContext = createContext<CartState | null>(null);
export const CartDispatchContext = createContext<CartDispatch | null>(null);

const initialState = () => {
  const localData = localStorage.getItem("carts");
  return localData ? JSON.parse(localData) : { cart: [] };
};
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] }, initialState);
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state));
  }, [state]);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartContext;
