import React from "react";

const CustomForm = ({ customStyle, onSubmit, children }) => {
  return (
    <form style={customStyle} onSubmit={onSubmit}>
      <div className="text-center  bg-black p-5 rounded-t py-7 px-12 w-full">
        <p className="font-hanalei text-4xl text-baseColor">BARGAIN BAY</p>
        <p
          className="font-inter font-bold text-gray-500"
          style={{ fontSize: "8px" }}
        >
          DRISM TECHNOLOGY INC.
        </p>
      </div>
      <div className="bg-secondColor rounded-b p-8 font-semibold font-inter text-xs">
        {children}
      </div>
    </form>
  );
};

export default CustomForm;
