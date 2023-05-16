const AuthInitState = {};

const AuthReducer = (state = AuthInitState, { type, payload }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("accessToken", JSON.stringify(payload));
      return { ...state, ...payload };
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("accessToken");
      return AuthInitState;
    default:
      return state;
  }
};

export default AuthReducer;
