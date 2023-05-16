import axios from "axios";

export const LOGIN_ACTION = (values) => async (dispatch) => {
  dispatch({
    type: "LOGIN_REQUEST",
    payload: values,
  });

  try {
    const { data } = await axios("http://localhost:3000/login", {
      method: "POST",
      data: values,
    });

    if (data) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { ...data, cart: [], history: [] },
      });
    } else {
      throw new Error("could not find user");
    }
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILED",
      payload: error,
    });
  }
};

export const REGISTER_ACTION = (values) => async (dispatch) => {
  dispatch({
    type: "REGISTER_REQUEST",
    payload: values,
  });
  try {
    const { data } = await axios("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    });
    if (!data) {
      throw new Error("Could not register user please try again");
    }

    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILED",
      payload: error,
    });
  }
};
