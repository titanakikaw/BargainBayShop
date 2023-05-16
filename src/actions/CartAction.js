import axiosInstance from "../utils/axiosInstance";

export const LOAD_CART =
  ({ user }) =>
  async (dispatch) => {
    dispatch({
      type: "LOAD_CART_REQUEST",
    });

    try {
      const response = await axiosInstance.get(
        `660/carts?userId=${user?.id}&status=pending`
      );
      dispatch({
        type: "LOAD_CART_SUCCESS",
        payload: response[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

export const ADD_CART = (Cart, Item) => async (dispatch) => {
  dispatch({
    type: "ADD_CART_REQUEST",
  });
  try {
    const CartItems = [...Cart.items, Item];
    const response = await axiosInstance.put(`660/carts/${Cart.id}`, {
      ...Cart,
      items: CartItems,
    });

    dispatch({
      type: "ADD_CART_SUCCESS",
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axiosInstance.put();
  } catch (error) {}
};

export const UPDATE_ITEM = (Cart, Item) => async (dispatch) => {
  dispatch({
    type: "UPDATE_CART_REQUEST",
  });

  try {
    const index = Cart.items.findIndex((x) => x.id == Item.id);

    const CartItems = [
      ...Cart.items.slice(0, index),
      Item,
      ...Cart.items.slice(index + 1),
    ];
    const response = await axiosInstance.put(`660/carts/${Cart.id}`, {
      ...Cart,
      items: CartItems,
    });
    dispatch({
      type: "UPDATE_CART_SUCCESS",
      payload: CartItems,
    });
  } catch (error) {}
};

export const DELETE_ITEM = (Cart, Item) => async (dispatch) => {
  dispatch({
    type: "DELETE_CART_REQUEST",
  });

  try {
    const index = Cart.items.findIndex((x) => x.id == Item.id);
    const CartItems = [
      ...Cart.items.slice(0, index),
      ...Cart.items.slice(index + 1),
    ];
    const response = await axiosInstance.put(`660/carts/${Cart.id}`, {
      ...Cart,
      items: CartItems,
    });

    dispatch({
      type: "DELETE_CART_SUCCESS",
      payload: CartItems,
    });
  } catch (error) {}
};
