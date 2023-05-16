import React, { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import bgImage4 from "../../assets/images/bg-image-4.jpg";
import ProductCard from "../../components/ProductCard";
import { connect } from "react-redux";
import Modal from "../../components/Modal";

const Products = ({ Products }) => {
  const searchText = useRef();
  const categoryText = useRef();
  const [search, setSearch] = useState({
    searchText: "",
    categoryText: "",
  });
  const [currentProduct, setCurrentProduct] = useState();
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div
        className="text-center bg-center bg-cover p-14"
        style={{ backgroundImage: `url(${bgImage4})` }}
      >
        <p className="font-inter font-bold text-4xl text-white">
          EVERYTHING YOU NEED IN ONE STOP SHOP
        </p>
      </div>
      <div className="grid grid-cols-6 h-10 my-5">
        <div className="flex justify-between items-center col-span-6 lg:col-span-2 p-2">
          <p className="font-inter text-xs font-bold">Filter by:</p>
          <select
            className="shadow p-2 flex-1 ml-3 bg-gray-100 border-gray-2 border-2 rounded"
            ref={categoryText}
          >
            <option value={""}>All</option>
            {Products.reduce((p, c) => {
              if (!p.includes(c.category)) {
                p = [...p, c.category];
              }
              return p;
            }, []).map((x) => (
              <option value={x} selected={x == "Electronics"}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div className=" col-span-4 lg:col-span-3 p-2">
          <input
            type="text"
            className="shadow border-3 w-full bg-gray-100 h-full font-inter text-sm px-3 py-1 rounded"
            placeholder="Enter product name here ...."
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            ref={searchText}
          ></input>
        </div>
        <div className="col-span-2 lg:col-span-1 p-2">
          <button
            className="w-full h-full bg-baseColor rounded shadow-md font-inter font-bold text-xs lg:text-sm uppercase text-white flex items-center justify-center"
            onClick={() => {
              setSearch({
                searchText: searchText.current.value,
                category: categoryText.current.value,
              });
            }}
          >
            <MagnifyingGlassIcon className="w-5 mr-2" />
            <p>Search</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 p-1 mt-10 border-box">
        {Products &&
          Products.filter(
            (x) =>
              x?.title?.toLowerCase().includes(search.searchText || "") &&
              x?.category
                .toLowerCase()
                .includes(search.category?.toLowerCase() || "")
          )?.map((x) => {
            return (
              <ProductCard
                product={x}
                key={x.id}
                setModal={setModal}
                setCurrentProduct={setCurrentProduct}
              />
            );
          })}
      </div>

      <Modal modal={modal} setModal={setModal} product={currentProduct} />
    </div>
  );
};

const mapStateToProps = ({ Products }) => {
  return {
    Products,
  };
};

export default connect(mapStateToProps, null)(Products);
