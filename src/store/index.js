import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
const initState = {};
const middleware = [thunk];

export default createStore(
  rootReducer,
  initState,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))
);
