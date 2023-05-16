import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import BaseLayout from "../layouts/BaseLayout";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";
import Home from "../pages/Home/Index";
import Login from "../pages/Login";
import Products from "../pages/Products";
import MyProfile from "../pages/Profile";
import Register from "../pages/Register";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Profile" element={<MyProfile />} />
      </Route>
      <Route path="Auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Route>
    </Route>
  )
);
