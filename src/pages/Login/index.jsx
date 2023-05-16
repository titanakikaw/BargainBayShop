import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import CustomForm from "../../components/Form/CustomForm";
import CustomInput from "../../components/Input/Index";

import emailIcon from "../../assets/icons/emailIcon.svg";
import passwordIcon from "../../assets/icons/passwordIcon.svg";
import { connect } from "react-redux";
import { LOGIN_ACTION } from "../../actions/AuthAction";

const Login = ({ loginAction }) => {
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password should be atleast 8 characters";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      try {
        loginAction(values);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <CustomForm customStyle={{ width: "345px" }} onSubmit={formik.handleSubmit}>
      <CustomInput
        id={"email"}
        type={"text"}
        text={"Email or Username"}
        iconLeft={emailIcon}
        style={{ marginTop: "8px" }}
        onChange={formik.handleChange}
        value={formik.values.email}
        formik={formik}
      />

      <CustomInput
        id={"password"}
        type={"password"}
        text={"Password"}
        iconLeft={passwordIcon}
        style={{ marginTop: "8px" }}
        onChange={formik.handleChange}
        value={formik.values.password}
        formik={formik}
      />

      <p className="text-right mt-1">Forgot password?</p>
      <div className="mt-5">
        <input
          type="submit"
          value="LOG IN"
          className="button  p-3 bg-baseColor rounded w-full mb-2 font-bold cursor-pointer tracking-wide hover:bg-hoverColor delay-75 ease-in-out text-white"
        />
      </div>
      <Link to="Register" className="text-center mt-5  text-baseColor">
        Dont have an account yet? Register here!
      </Link>
    </CustomForm>
  );
};

Login.propTypes = {};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (values) => dispatch(LOGIN_ACTION(values)(dispatch)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
