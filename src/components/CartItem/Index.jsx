import React, { useEffect } from "react";
import { connect } from "react-redux";
import prodImage from "../../assets/images/prod-sample-1.jpg";

const CartItem = ({ Item, cartItem, subTotal, setSubTotal }) => {
  useEffect(() => {
    setSubTotal((prevState) => ({
      amount: prevState.amount + cartItem?.price * Item?.qty,
    }));
  }, []);
  return (
    <div className="rounded px-5 py-3 bg-gray-100 border-gray-300 border-2 rounded-sx my-2">
      <div className="grid grid-cols-5 gap-4 items-center">
        <p className="font-bold font-inter uppercase col-span-3">Product</p>
        <p className="font-bold font-inter uppercase col-span-1 text-xs">
          Quantity
        </p>
        <p className="font-bold font-inter uppercase col-span-1 text-xs">
          PRICE
        </p>
      </div>
      <hr />
      <div className="grid grid-cols-5 gap-4 items-center ">
        <div className="font-bold font-inter  col-span-3 flex mt-2">
          <img src={prodImage} alt="" srcset="" style={{ width: "133px" }} />
          <div className="ml-2">
            <p className="font-inter text-md capitalize">{cartItem?.title}</p>
            <p className="font-inter text-xs" style={{ color: "#AC9D9D" }}>
              {cartItem?.brand}
            </p>
            <p className="font-inter text-xs font-normal normal-case mt-2">
              {cartItem?.description}
            </p>
          </div>
        </div>
        <p className="font-bold font-inter uppercase col-span-1 text-xs normal-case">
          {Item.qty}x
        </p>
        <p className="font-bold font-inter uppercase col-span-1 text-xs">
          {(cartItem?.price * Item?.qty).toLocaleString("en-ph", {
            currency: "PHP",
            style: "currency",
          })}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ Products }, { Item }) => {
  return {
    cartItem: Products?.find((x) => x.id == Item.id),
    Products,
  };
};

export default connect(mapStateToProps, null)(CartItem);
