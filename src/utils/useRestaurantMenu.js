import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) =>{

const [resInfo,setResInfo] = useState(null);

useEffect(()=>{
    fetchMenu()
},[])

const fetchMenu = async () => {
    
    const data = await fetch(MENU_URL+ resId)
    const parsedData = await data.json();
    console.log("Restaurant Name csx", parsedData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    setResInfo(parsedData.data)
    // console.log("hook menu", res);
}


    return resInfo
} 


export default useRestaurantMenu;