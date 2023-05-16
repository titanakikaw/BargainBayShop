const CartInitState = {};

const CartReducer = (state = CartInitState, { type, payload }) => {
  switch (type) {
    case "LOAD_CART_SUCCESS":
    case "ADD_CART_SUCCESS":
      return payload;
    case "UPDATE_CART_SUCCESS":
    case "DELETE_CART_SUCCESS":
      return { ...state, items: payload };
    default:
      return state;
  }
};
export default CartReducer;
