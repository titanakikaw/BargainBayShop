import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
import LoadingReducer from "./LoadingReducer";
import ProductsReducer from "./ProductsReducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Loading: LoadingReducer,
  Products: ProductsReducer,
  Cart: CartReducer,
});
export default rootReducer;
