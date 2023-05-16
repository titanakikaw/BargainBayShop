import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="border-2 shadow bg-slate-50 p-4 px-6 rounded">
        <p className="font-inter font-xs uppercase font-bold text-baseColor">
          my account
        </p>
        <div className="flex mt-5 justify-between">
          <div>
            <p className="font-inter text-xl uppercase font-bold">
              Christian marvin T. Orsua
            </p>
            <p className="font-inter text-sm mt-2 font-bold">
              example@email.com
            </p>
            <p className="font-inter text-sm mt-2 font-bold">+639123456789</p>
            <p className="font-inter text-sm mt-2 font-bold">
              AJAKSJDH KLASDK KLJASLD CITY
            </p>
          </div>
          <div>
            <button className="button bg-baseColor py-3 px-5 rounded-sm font-inter text-xs font-bold">
              {" "}
              DELETE ACCOUNT
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-between">
        <div className="w-1/2">
          <p className="uppercase font-inter font-bold ">transaction history</p>
          <div className="bg-thirdColor p-5">
            {[...Array(5).keys()].map((x) => {
              return (
                <div
                  className="p-3 rounded-sm  shadow-md mt-2"
                  style={{ backgroundColor: "#FBE7D5" }}
                >
                  <p className="font-inter font-bold text-sm uppercase mb-2 text-baseColor">
                    Transaction/Cart #1
                  </p>
                  <table class="table-auto font-inter text-xs w-full">
                    <thead>
                      <tr className="text-left">
                        <th>Total Cart Items</th>
                        <th>Total Amount Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-5">10x items</td>
                        <td>
                          {(1000).toLocaleString("en-PH", {
                            style: "currency",
                            currency: "PHP",
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <p className="uppercase font-inter font-bold ">CART DETAILS</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
