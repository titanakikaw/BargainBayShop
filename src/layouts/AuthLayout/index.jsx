import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/loginBg.jpg";
const AuthLayout = ({ Auth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const { user } = Auth;
    if (user) {
      navigate("/");
    }
  }, [Auth]);

  return (
    <div
      className="bg-[url] bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Outlet />
    </div>
  );
};
const mapStateToProps = ({ Auth }) => {
  return {
    Auth,
  };
};
export default connect(mapStateToProps, null)(AuthLayout);
