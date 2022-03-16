import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const cart = {
  cartItems: [],
  quantity: 0,
  priced: 0
};
const CartContext = createContext(cart);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cart);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
