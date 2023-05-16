import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";

import bgimage1 from "../../assets/images/bg-image-1.jpg";
import bgimage2 from "../../assets/images/bg-image-2.jpg";
import bgimage3 from "../../assets/images/bg-image-3.jpg";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LOAD_PRODUCT_ACTION } from "../../actions/ProductAction";

const Home = ({ LOAD_PRODUCTS, Products }) => {
  useEffect(() => {
    const loadProducts = async () => {
      LOAD_PRODUCTS();
    };
    loadProducts();
  }, []);
  return (
    <div className="mt-19">
      <div className="grid grid-cols-6">
        <div
          className="col-span-6 py-5 px-10 bg-cover  bg-center rounded-sm"
          style={{ backgroundImage: `url(${bgimage1})`, height: "296px" }}
        >
          <p className="font-bold font-inter text-white text-2xl lg:text-5xl">
            SATISFY YOUR SHOPPING CRAVINGS
          </p>
          <p className="font-bold font-inter xs:text-xs lg:text-3xl">
            without leaving home.
          </p>
        </div>
        <div
          className="mt-2 col-span-6 lg:col-span-4 py-5 px-10 bg-cover  bg-center rounded-sm relative"
          style={{ backgroundImage: `url(${bgimage2})`, height: "296px" }}
        >
          <p className="font-inter font-bold text-2xl absolute bottom-4">
            SHOP ANYWHERE, ANYTIME
          </p>
        </div>
        <Link
          to="/Products"
          className="ml-2 mt-2 col-span-6 lg:col-span-2 py-5 px-10 bg-cover cursor-pointer bg-center rounded-sm relative hover:delay-300 ease-in-out hover:shadow-xl hover:shadow-inner hover:shadow-white"
          style={{ backgroundImage: `url(${bgimage3})`, height: "296px" }}
        >
          <p className="font-inter font-bold text-2xl absolute bottom-4 right-4 text-white">
            MORE PRODUCTS
          </p>
        </Link>
      </div>
      <div className="mt-14">
        <p className="text-baseColor font-bold uppercase font-inter text-2xl ">
          FEATURED PRODUCTS
        </p>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 py-8">
          {Products?.map((x) => {
            return (
              <ProductCard product={x} key={x.id}>
                <button
                  className="px-2 py-3 flex justify-between w-full rounded-b"
                  style={{ backgroundColor: "#FBE7D5" }}
                ></button>
              </ProductCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ Products }) => {
  return {
    Products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_PRODUCTS: () => LOAD_PRODUCT_ACTION()(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
