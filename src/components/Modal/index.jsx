import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import prodImage from "../../assets/images/prod-sample-1.jpg";
import { connect } from "react-redux";
import { ADD_CART, DELETE_ITEM, UPDATE_ITEM } from "../../actions/CartAction";
const Modal = ({
  modal,
  setModal = false,
  product,
  CartItem,
  Cart,
  ADD_CART,
  UPDATE_ITEM,
  DELETE_ITEM,
  Loading,
}) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl ">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex w-12 flex-shrink-0 items-center justify-center rounded-full bg-baseColor sm:mx-0 sm:h-56 sm:w-10 lg:w-2/5">
                      <img src={prodImage} className="h-full rounded" />
                      {/* <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      /> */}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title className=" font-bold leading-6 text-gray-900 font-inter text-3xl">
                        {product?.title}
                      </Dialog.Title>
                      <div className="">
                        <p className="text-sm text-gray-500">
                          {product?.brand}
                        </p>
                      </div>
                      <div className="mt-1">
                        <p className="text-md text-gray-500 flex items-center">
                          {product?.id}
                          <div className="flex ml-3">
                            {[...Array(product?.id)].map((x) => {
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
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {product?.description}
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-lg font-bold font-inter">
                          {product?.price.toLocaleString("en-PH", {
                            style: "currency",
                            currency: "PHP",
                          })}
                        </p>
                      </div>
                      <div className="mt-4">
                        {CartItem ? (
                          <div className="flex items-center justify-between lg:w-1/2">
                            <button
                              disabled={Loading.find(
                                (x) => x.req_type == "UPDATE_CART"
                              )}
                              className="disabled:opacity-75 py-3 px-6 bg-baseColor rounded"
                              onClick={() => {
                                UPDATE_ITEM(Cart, {
                                  id: product?.id,
                                  qty: CartItem.qty + 1,
                                });
                              }}
                            >
                              <p className="w-5 font-bold text-white text-xl leading-snug">
                                +
                              </p>
                            </button>

                            <p className="text-xl font-inter font-bold">
                              {CartItem.qty}
                            </p>
                            <button
                              disabled={Loading.find(
                                (x) =>
                                  x.req_type == "UPDATE_CART" ||
                                  x.req_type == "DELETE_CART"
                              )}
                              className="disabled:opacity-75 py-3 px-6 bg-baseColor rounded"
                              onClick={() => {
                                if (CartItem.qty <= 1) {
                                  DELETE_ITEM(Cart, {
                                    id: product?.id,
                                  });
                                } else {
                                  UPDATE_ITEM(Cart, {
                                    id: product?.id,
                                    qty: CartItem.qty - 1,
                                  });
                                }
                              }}
                            >
                              <p className="w-5 font-bold text-white text-xl leading-snug">
                                -
                              </p>
                            </button>
                          </div>
                        ) : (
                          <button
                            disabled={Loading.find(
                              (x) => x.req_type == "ADD_CART"
                            )}
                            className="disabled:opacity-75 w-full p-3 bg-baseColor rounded uppercase font-bold font-inter text-white"
                            onClick={() => {
                              ADD_CART(Cart, {
                                id: product?.id,
                                qty: 1,
                              });
                            }}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const mapStateToProps = ({ Cart, Loading }, { product }) => {
  return {
    CartItem: Cart?.items?.find((x) => x.id == product?.id),
    Cart: Cart,
    Loading: Loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ADD_CART: (Cart, Item) => ADD_CART(Cart, Item)(dispatch),
    UPDATE_ITEM: (Cart, Item) => UPDATE_ITEM(Cart, Item)(dispatch),
    DELETE_ITEM: (Cart, Item) => DELETE_ITEM(Cart, Item)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
