import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { LOAD_CART } from "../../actions/CartAction";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MainLayout = ({ User, LOAD_CART }) => {
  const navigate = useNavigate();
  if (!User.user) {
    navigate("/Auth");
  }

  useEffect(() => {
    if (User) {
      LOAD_CART(User);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 py-11 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ Auth }) => {
  return {
    User: Auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_CART: (User) => LOAD_CART(User)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
