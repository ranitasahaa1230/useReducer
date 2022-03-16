import { createContext, useContext, useReducer } from "react";
import { itemsReducer } from "./itemsReducer";

const cart = {
  itemsInCart: [],
  cartItems: 0,
  totalPrice: 0
};

const ItemsContext = createContext(cart);

const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, cart);
  return (
    <ItemsContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => useContext(ItemsContext);

export { ItemsProvider, useItems };
