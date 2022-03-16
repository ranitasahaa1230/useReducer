export const itemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        cartItems: state.cartItems + 1,
        totalPrice: state.totalPrice + action.payload
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems - 1,
        totalPrice: state.totalPrice - action.payload
      };
    default:
      return state;
  }
};
