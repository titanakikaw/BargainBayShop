import React from "react";
import PropTypes from "prop-types";

const CustomInput = ({
  id,
  type,
  text,
  style,
  iconLeft,
  iconRight,
  formik,
  ...props
}) => {
  return (
    <div className="mt-2">
      <label htmlFor={`${id}`}>{text}</label>
      <div style={{ position: "relative" }}>
        {iconLeft && (
          <img
            src={iconLeft}
            alt=""
            srcSet=""
            style={{ position: "absolute", top: "40%", left: "3%" }}
          />
        )}

        <input
          className="w-full text-xs p-3 pl-10 rounded"
          type={`${type}`}
          id={`${id}`}
          style={style}
          {...props}
        />
      </div>
      {formik.errors[`${id}`] && formik.touched[`${id}`] && (
        <p className="text-xs font-semilight text-red-600">
          {formik.errors[`${id}`]}
        </p>
      )}
    </div>
  );
};

CustomInput.propTypes = {};

export default CustomInput;
