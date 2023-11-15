import React from "react";
import { CDN_URL } from "./Utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "./Utils/cardSlice";

const ResMenuItemLIst = ({ items }) => {

  //we are dispatching an action 
  const dispatch = useDispatch();

  const HandleAddbtn=(item)=>{
    //Dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          className="my-5 flex justify-between border-gray-400 border-b-2 p-6"
          key={item.card.info.id}
        >
          <div>
            <span className="font-bold">{item.card.info.name} </span> - ₹{" "}
            <span className="font-bold">
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}{" "}
            </span>
            <div className="w-[350px] text-sm text-slate-800 py-6">
              {item.card.info.description}
            </div>
          </div>

          <div className="text-center">
            <button className="cursor-pointer bg-gray-900 text-white font-bold shadow-lg absolute px-4 py-1 rounded-md " onClick={()=>HandleAddbtn(item)}>
              {" "}
              Add +
            </button>
            <img
              className=" w-[150px] h-[100px] rounded-sm"
              src={CDN_URL + item.card.info.imageId}
              alt="super heros of Mern Stack"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuItemLIst;
