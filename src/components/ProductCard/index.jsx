import React from "react";

import prodImage from "../../assets/images/prod-sample-1.jpg";

const ProductCard = ({ setModal, setCurrentProduct, product, children }) => {
  return (
    <div className="mt-5 hover:scale-105  duration-500 ease-in-out">
      <div
        className="rounded"
        style={{
          backgroundColor: "#FCFCFC",
          height: "301px",
          width: "187px",
        }}
      >
        <div className="card-img justify-center">
          <div
            className="w-full h-10 py-20 bg-cover bg-center"
            // style={{ backgroundImage: `url(${product?.image || prodImage})` }}
            style={{ backgroundImage: `url(${prodImage})` }}
          ></div>
          {/* <img src={product?.image} alt="" srcSet="" className="h-40" /> */}
        </div>
        <div className="card-content px-2 py-3">
          <p className="font-inter font-bold text-xs">
            {product?.title.length > 22
              ? product?.title.slice(0, 22) + "..."
              : product?.title}
          </p>
          <div className="flex">
            {[...Array(product?.reviews)].map((x) => {
              return (
                <svg
                  key={x}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              );
            })}
          </div>
          <p className="font-inter text-xs mt-2">
            {product?.price.toLocaleString("en-PH", {
              style: "currency",
              currency: "PHP",
            })}
          </p>
        </div>
        {children || (
          <button
            className="px-2 py-3 flex justify-between w-full rounded-b"
            style={{ backgroundColor: "#FBE7D5" }}
            onClick={() => {
              setCurrentProduct(product), setModal(true);
            }}
          >
            <p className="text-xs">Add to Cart</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
