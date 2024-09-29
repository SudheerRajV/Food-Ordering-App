import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodItemComponent from "./FoodItem";
import { clearCart } from "../utils/redux/cartSlice";

const CartComponent = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  //console.log("items", items)
  return (
    <div className="bg-white ">
      <div className="p-4 flex justify-evenly text-center">
        <h1 className="text-lg font-bold p-4">Cart</h1>
        <button
          className="bg-orange-400 px-2 rounded-md"
          onClick={() => {
            clearCartItems();
          }}
        >
          Clear cart
        </button>
      </div>
      <div className="w-6/12 bg-slate-50 m-auto">
        {items?.map((item) => (
          <FoodItemComponent data={item} />
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
