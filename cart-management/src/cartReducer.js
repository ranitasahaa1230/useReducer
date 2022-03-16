export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // console.log(action.payload)
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        quantity: state.quantity + 1,
        priced: state.priced + action.payload.price
      };
    case "REMOVE_FROM_CART":
      const removeFromIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(removeFromIndex)
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item, index) => index !== removeFromIndex
        ),
        quantity: state.quantity - 1,
        priced: state.priced - action.payload.price
      };
    default:
      return state;
  }
};
