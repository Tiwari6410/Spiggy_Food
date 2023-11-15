import React from "react";
// import { useState } from "react";
import ResMenuItemLIst from "./ResMenuItemLIst";

const ResMenuCategories = ({ data,ShowItems,setShowIndex }) => {
   
  // const [showDetails, setShowDetails] = useState(false)  //we are lifting state up the componet that's why we are commenting this line
    
  const ResMenuHandle =()=>{
    setShowIndex()
  }
   
  return (
    <div className="w-full">
      <div className=" items-center bg-gray-200 w-[900px] h-auto my-4 m-auto px-20 shadow-lg rounded-md font-semibold rounded-md">
        <div className="flex justify-between py-5 cursor-pointer" onClick={ResMenuHandle}>
          <span className="font-bold">
            {data?.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div className="text-left">
        {ShowItems && <ResMenuItemLIst items={data.itemCards} />}
        </div>
        
      </div>
    </div>
  );
};

export default ResMenuCategories;

// uncontrolled :- if controlled any component itself then we can say that component is uncontrolled 
// controlled : = if any component controlled by parent by passing props that is controlled component