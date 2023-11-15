import { useEffect, useState } from "react";
import { URL_MENU } from "./Utils/constant";

const useRestaurantMenu = (resId) => {
  const { resInfo, setResInfo } = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
      const data = await fetch(URL_MENU + resId);
      const json = await data.json();
      setResInfo(json);
    }
    

  return resInfo;
};

export default useRestaurantMenu;
