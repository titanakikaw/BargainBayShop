const ProductInitState = [];

const ProductReducer = (state = ProductInitState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS_SUCCESS":
      return payload;
    //   return [...state, payload];
    default:
      return state;
  }
};

export default ProductReducer;
