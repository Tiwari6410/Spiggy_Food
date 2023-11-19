// import { resList } from "./Utils/Mockdata";
import React, { useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import "./Style/Body.css";
import { Link } from "react-router-dom";
import { URL_SWIGGY } from "./Utils/constant";

const Body = () => {
  // const arr = useState(resList)
  // // const [listOfRestaurant, setlistOfRestaurant] = arr;
  // const listOfRestaurant = arr[0]
  // const setlistOfRestaurant = arr[1]

  //whenever state variable update, react triggers a reconcilation cycle(re-renders the component) and updates the changes
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [FILTERrestaurant, setFILTERrestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantPromoted = WithPromotedLabel(RestaurantCard);

  console.log(listOfRestaurant)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Apidata = await fetch(URL_SWIGGY);
    const json = await Apidata.json();
    //optional chaining (?) go and read in youtube about optional chaining
    setlistOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFILTERrestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // //Conditional Rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length == 0 ? 
    <Shimmer />
   : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search flex m-1 p-4 w-auto ">
          <input className="border border-solid border-slate-700 rounded-s-md"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-5 py-1 bg-yellow-500 text-white rounded-e"
            onClick={() => {
              const filteredRestuarant = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFILTERrestaurant(filteredRestuarant);
              console.log(filteredRestuarant);
            }}
          >
            Search
          </button>
        </div>

        <div>
        <button

          className="filter-btn bg-yellow-500 text-white py-1 px-4 m-1 rounded-md"
          onClick={() => {
            let filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredData);
          }}
        >
          ⭐Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {
        FILTERrestaurant.map((restaurant) => 
          <Link
            to={"/restaurantmenu/" + restaurant.info.id}
            key={restaurant.info.id}>
              {
                restaurant.info.avgRating >4.4 ? (<RestaurantPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)
              }
           {/* <RestaurantCard resData={restaurant} />             */}
          </Link>
        )
        }
      </div>
    </div>
  );
};

export default Body;





