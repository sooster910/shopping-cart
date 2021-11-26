import { CartState, Action } from "./CartContext";
import { v4 as uuidv4 } from "uuid";

export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, cartId: uuidv4() }],
      };

    case "UPDATE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem?.cartId === action.payload?.cartId
            ? (cartItem.qty = cartItem.qty + action.payload.qty)
            : cartItem.qty
        ),
      };
    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((c) => c.prefix !== action.payload.prefix),
    //   };
    default:
      return state;
  }
};
