import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ArrowTurnLeft } from "@heroicons/react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import { connect } from "react-redux";
import CartItem from "../../components/CartItem/Index";
const Cart = ({ Cart }) => {
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState({
    amount: 0,
  });

  return (
    <div>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="w-5 mr-3" />
        <p className="font-inter uppercase text-md font-bold ">Back</p>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-4">
          {Cart?.items?.map((x) => {
            return (
              <CartItem
                key={x.id}
                Item={x}
                setSubTotal={setSubTotal}
                subTotal={subTotal}
              />
            );
          })}
        </div>
        <div className="col-span-1  py-6">
          <div className="border-2 rounded  p-4">
            <p className="font-bold font-inter uppercase">Payment Details</p>
            <hr />
            <div className="flex justify-between py-2">
              <div>
                <p className="py-1 font-inter text-xs">Sub Total</p>
                <p className="py-1 font-inter text-xs">Shipping fee</p>
                <p className="py-1 font-inter text-xs">Tax</p>
              </div>
              <div>
                <p className="py-1 font-inter text-xs">
                  {(subTotal?.amount || 0).toLocaleString("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  })}
                </p>
                <p className="py-1 font-inter text-xs">
                  {(0).toLocaleString("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  })}
                </p>
                <p className="py-1 font-inter text-xs">
                  {(0).toLocaleString("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  })}
                </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <div>
                <p className="py-1 font-inter text-xs font-bold">Total</p>
              </div>
              <div>
                <p className="py-1 font-inter text-xs font-bold">
                  {(subTotal?.amount).toLocaleString("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ Cart }) => {
  return {
    Cart,
  };
};
export default connect(mapStateToProps, null)(Cart);
