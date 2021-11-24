import { CartState, Action } from "./CartContext";

export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload }] };

    // case "CHANGE_CART_QTY":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((c) =>
    //       c.prefix === action.payload.prefix? (c.qty = action.payload.qty):c.qty
    //     ),
    //   };
    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((c) => c.prefix !== action.payload.prefix),
    //   };
    default:
      return state;
  }
};
