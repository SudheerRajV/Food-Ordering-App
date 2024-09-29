import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const FoodItemComponent = (props) => {
  const item = props?.data?.card?.info || props?.data;
  console.log("item", item)
  const dispatch = useDispatch()
  const handleItemClick = (item) =>{
    dispatch(addItem(item))
  }
  return (
    <div className="bg-slate-1000 m-2 p-2 border-gray-200 border-b-2 text-left flex">
      <div className="w-10/12">
        <div>
          <span className="font-semibold text-lg">{item.name}</span>
          <span className="text-lg"> - &#8377; {item.price / 100}</span>
        </div>
        <p className="font-extralight">{item.description}</p>
      </div>
      <div className="w-2/12 h-auto p-2 flex items-end justify-center">
        <div className="absolute ">
          <button className="bg-orange-500 text-white font-bold hover:bg-orange-200 py-2 px-4 shadow-orange-200 rounded-md text-xs" onClick={()=>handleItemClick(item)}>
            Add
          </button>
        </div>
        <img src={CDN_URL + item.imageId} />
      </div>
    </div>
  );
};

export default FoodItemComponent;
