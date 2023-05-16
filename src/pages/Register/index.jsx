import { useFormik } from "formik";
import React from "react";
import CustomForm from "../../components/Form/CustomForm";
import CustomInput from "../../components/Input/Index";
import { useNavigate, Link } from "react-router-dom";

import userIcon from "../../assets/icons/userIcon.svg";
import arrowLeftIcon from "../../assets/icons/arrowLeftIcon.svg";
import numberIcon from "../../assets/icons/numberIcon.svg";
import addressIcon from "../../assets/icons/addressIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import passwordIcon from "../../assets/icons/passwordIcon.svg";
import { REGISTER_ACTION } from "../../actions/AuthAction";
import { connect } from "react-redux";

const Register = ({ registerUser, Loading }) => {
  const validate = (values) => {
    const errors = {};

    for (let key in values) {
      if (!values[key]) {
        errors[key] = "Required . . .";
      }
    }

    if (values.cpassword != values.password) {
      errors["cpassword"] = "CONFIRM PASSWORD DID NOT MATCH";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      age: 0,
      gender: "",
      address: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate,
    onSubmit: async (values) => {
      registerUser(values);
    },
  });

  return (
    <CustomForm customStyle={{ width: "506px" }} onSubmit={formik.handleSubmit}>
      <Link className="flex items-center mb-5 cursor-pointer" to="/Auth">
        <img src={arrowLeftIcon} alt="" srcSet="" />
        <p className="text-xs uppercase font-bold ml-5">Back to Login</p>
      </Link>
      <CustomInput
        id={"fullname"}
        type={"text"}
        text={"What's your name ?"}
        iconLeft={userIcon}
        style={{ marginTop: "8px", width: "300px" }}
        onChange={formik.handleChange}
        value={formik.values.fullname}
        formik={formik}
      />
      <CustomInput
        id={"age"}
        type={"number"}
        text={"How old are you ?"}
        iconLeft={numberIcon}
        style={{ marginTop: "8px", width: "130px" }}
        onChange={formik.handleChange}
        value={formik.values.age}
        formik={formik}
      />
      <div className="mt-2 w-3/5">
        <label htmlFor="">What’s your gender ?</label>
        <div className="mt-2">
          <div className="flex justify-between">
            <div className="rdo flex text-center justify-between">
              <input
                type={"radio"}
                name="gender"
                id="male"
                value={"Male"}
                onChange={formik.handleChange}
              ></input>
              <label htmlFor="male" className="cursor-pointer">
                Male
              </label>
            </div>
            <div className="rdo flex text-center">
              <input
                type={"radio"}
                name="gender"
                id="Female"
                value={"Female"}
                onChange={formik.handleChange}
              ></input>
              <label htmlFor="Female" className="cursor-pointer">
                Female
              </label>
            </div>
            <div className="rdo flex text-center">
              <input
                type={"radio"}
                name="gender"
                id="NA"
                value={"Prefer not to say"}
                onChange={formik.handleChange}
              ></input>
              <label htmlFor="NA" className="cursor-pointer">
                Prefer not to say
              </label>
            </div>
          </div>
        </div>
      </div>
      <CustomInput
        id={"address"}
        type={"text"}
        text={"Where do you live ?"}
        iconLeft={addressIcon}
        style={{ marginTop: "8px", width: "300px" }}
        onChange={formik.handleChange}
        value={formik.values.address}
        formik={formik}
      />
      <CustomInput
        id={"email"}
        type={"text"}
        text={"What’s your email ?"}
        iconLeft={emailIcon}
        style={{ marginTop: "8px", width: "300px" }}
        onChange={formik.handleChange}
        value={formik.values.email}
        formik={formik}
      />
      <div className="w-full flex justify-between">
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
        <CustomInput
          id={"cpassword"}
          type={"password"}
          text={"Confirm Password"}
          iconLeft={passwordIcon}
          style={{ marginTop: "8px" }}
          onChange={formik.handleChange}
          value={formik.values.cpassword}
          formik={formik}
        />
      </div>

      <div className="w-1/2 mt-5 text-right">
        <input
          // disabled={Loading.filter((x) => x.req_type == "REGISTER")}
          type="submit"
          value="Create Account"
          className="disabled:opacity-75 disabled:cursor-wait button shadow-lg p-3 bg-baseColor rounded w-full mb-2 font-bold cursor-pointer tracking-wide uppercase text-white"
        />
      </div>
    </CustomForm>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (values) => dispatch(REGISTER_ACTION(values)(dispatch)),
  };
};

const mapStateToProps = ({ Loading }) => {
  return {
    Loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
