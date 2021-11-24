import { createContext, useContext, Dispatch, useReducer } from "react";
import { cartReducer } from "./Reducers";
import { ProductPreview } from "../types/PreviewProduct";
import { addPrefix } from "@chakra-ui/styled-system";
export type CartDispatch = Dispatch<Action>;

// export type ProductForCart = {
//   prdouctDetail: ProductPreview;
//   qty: number;
// };
export type Prefix = ProductPreview["prefix"];

export type ProductForCart = {
  productDetail: ProductPreview;
  qty: number;
};
export type CartState = {
  cart: ProductForCart[];
};
// export type CartState = {
//   cart: Record<Prefix, ProductForCart>[];
// };

// export type Action =
//   | {
//       type: "ADD_TO_CART";
//       payload: Record<Prefix, ProductForCart>;
//     }
//   | {
//       type: "CHANGE_CART_QTY";
//       payload: Record<Prefix, ProductForCart>;
//     };

export type Action =
  | {
      type: "ADD_TO_CART";
      payload: ProductForCart;
    }
  | { type: "REMOVE_FROM_CART"; payload: ProductForCart };

export const CartStateContext = createContext<CartState | null>(null);
export const CartDispatchContext = createContext<CartDispatch | null>(null);

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartContext;
