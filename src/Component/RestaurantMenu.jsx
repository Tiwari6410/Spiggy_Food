import React from "react";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../Component/Style/RestaurantMenu.css";
import { useParams } from "react-router-dom";
import { URL_MENU } from "./Utils/constant";
import ResMenuCategories from "./ResMenuCategories";

const RestaurantMenu = () => {
  // const { resId } = useParams()  //hitting the resId by useparam Hook
  // const resInfo = useRestaurantMenu(resId);  //custom Hook

  //WE HAVE INPUT ALL THE DATA INTO CUSTOM HOOK (useRestaurant())
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex,setShowIndex] = useState(null)//which one want to collapse of open

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(URL_MENU + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />; //this line prevent the null effect on the destructuring...

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const { itemCardss } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(   ItemCategory);

  const Categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(Categories);
  return (
    <div className="menu my-10 text-center my-14">
      <h1 className="font-bold ms-4">RESTAURANT NAME : {name}</h1>
      <h4 className="font-bold ms-4 my-3">
        CUISINES : {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <hr />
      <h1 className="ms-4 font-semibold">Menu</h1>
      <ul>
        {Categories.map((categories, index) => {
          return (
            //controlles component
            <ResMenuCategories
              key={categories.card?.card?.title}
              data={categories.card?.card}
              // ShowItems = {index === 2 && true}//lifting up component
              ShowItems={index === showIndex ? true: false}
              setShowIndex ={()=>setShowIndex(index)}
              
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

//   return (
//     <div className="menu my-10">
//       <h1 className="font-semibold ms-4">Restaurant name : {name}</h1>
//       <h4 className="font-serif ms-4 my-3">
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </h4>
//       <hr className="font-bold" />
//       <h1 className="ms-4">Menu</h1>
//       <ul>
//         {itemCards.map((item) => (
//           <li
//             className="Menudetails flex justify-between mx-44 m-4"
//             key={item.card.info.name}
//           >
//             <h4>
//               {" "}
//               {item.card.info.name}-Rs.{item.card.info.price / 100}
//             </h4>
//             <div>
//               <img
//                 style={{ borderRadius: "5px" }}
//                 height={80}
//                 width={100}
//                 src={CDN_URL + item.card.info.imageId}
//                 alt="go back"
//               />
//             </div>
//           </li>
//         ))}
//         {/* <li>{itemCards[0].card.info.name}- Rs.{itemCards[0].card.info.price}</li> */}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

// const Categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
