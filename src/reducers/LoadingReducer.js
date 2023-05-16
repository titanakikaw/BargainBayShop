const initLoadingState = [];

const LoadingReducer = (state = initLoadingState, { type, payload }) => {
  const regex = /^((?!_request).)*$/i;
  const req_type = type.replace(/_REQUEST$/i, "");
  if (!regex.test(type)) {
    state = [
      ...state,
      {
        req_type,
        payload,
      },
    ];
  } else {
    state = state.filter((x) => x.req_type == req_type);
  }
  return state;
};

export default LoadingReducer;
