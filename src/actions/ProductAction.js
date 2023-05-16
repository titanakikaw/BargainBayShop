import axiosInstance from "../utils/axiosInstance";

export const LOAD_PRODUCT_ACTION = (values) => async (dispatch) => {
  dispatch({
    type: "LOAD_PRODUCTS_REQUEST",
    payload: values,
  });

  try {
    const response = await axiosInstance.get("660/products");
    if (!response) {
      throw new Error("Failed to retrieve products");
    }
    dispatch({
      type: "LOAD_PRODUCTS_SUCCESS",
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_PRODUCTS_FAILED",
      payload: error,
    });
  }
};
