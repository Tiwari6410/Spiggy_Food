import React from "react";
import { CDN_URL } from "./Utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  //we have refactor our code // resData.info we are writtening again again so
  // const{name.cuisnes,areaName,constForTwo} = resData?.info
  //"resData?.info" :- ? what is the meaning of this question mark  -> this is optional chaining in javascript
  // const {resname,cuisine} = props;,
  return (
    <div className="res-card  w-60 h-80 align-middle  relative text-left mx-2 mt-10 p-4 hover:border rounded-md">
      <img className="w-80 h-40 z-0 rounded-xl " src={CDN_URL + cloudinaryImageId}  alt="this is card image"/>
      <h3 className="font-bold pt-4">{name}</h3>
      <h4 className="mt-2">{cuisines.join(", ").slice(0, 45)}</h4>
      <div className="downdetails mt-4 bottom-2 flex absolute">
      <h4 className="text-xs me-3">{(avgRating>=4.5)?"⭐⭐⭐⭐⭐" :"⭐⭐⭐"}</h4>
      <h4 className="text-xs font-normal ms-2"> {costForTwo}</h4>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div >
        <label className="bg-black z-10 text-white absolute px-5 py-1  ms-2 mt-2 rounded">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
