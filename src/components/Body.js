// import listOfRestaurant from "../utils/mockData";
import RestaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { HOMEPAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList,setFilteredRestaurantList] = useState([]);
  const [count, setCount] = useState(0);
  const [searchText,setSearchText] = useState("")
  // console.log("Hook", restaurantList);

  useEffect(() => {
    fetchdata();
  }, []);


  const fetchdata = async () => {
    
    const data = await fetch(HOMEPAGE_URL)
    const parsedData = await data.json();
    console.log("Info 2", parsedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const infoData = parsedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(item => item.info) || []
   
    setRestaurantList(infoData)
    setFilteredRestaurantList(infoData)
    setCount(infoData.length)
    console.log("List 2", infoData[0]);
    console.log("Count", infoData.length);
    console.log("Filtered list", filteredRestaurantList);
    // console.log("Og List", restaurantList);
    // console.log(infoData);
  }
  
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
  return (<h1 className="danger">Looks like you're offline please check your internet connection</h1>)

  return restaurantList == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search"> 
          <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button onClick={()=> {
            let filteredList = restaurantList.filter((res)=> res.name.toLowerCase().includes(searchText.toLowerCase()))
            console.log("Filtered Search ", filteredList);
            setFilteredRestaurantList(filteredList)
            setCount(filteredList.length)
          }}>Seach</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurant = restaurantList.filter(
              (res) => res.avgRating > 4.2
            );
            // console.log(filteredListOfRestaurant);
            setFilteredRestaurantList(filteredListOfRestaurant);
            setCount(filteredListOfRestaurant.length);
          }}
        >
          Top Rated Restaurant
        </button>
        <button className="filter-btn" onClick={()=> {fetchdata(); setSearchText("")}}>Reset</button>
      </div>
      <div>Total Count : {count}</div>
      <div className="restaurant-container">
        {/* <RestaurantCard restData={restaurantList[0]}/>
        <RestaurantCard restData={restaurantList[1]}/>
        <RestaurantCard restData={restaurantList[2]}/>
        <RestaurantCard restData={restaurantList[3]}/>
        <RestaurantCard restData={restaurantList[4]}/>
        <RestaurantCard restData={restaurantList[4]}/>
        <RestaurantCard restData={restaurantList[6]}/>
        <RestaurantCard restData={restaurantList[7]}/> */}
        { Array.isArray(filteredRestaurantList) ? filteredRestaurantList.map((restaurant,index) => (
         <Link style={{textDecoration:'none'}} key={restaurant.id} to={"/restaurants/"+restaurant.id}><RestaurantCard key={restaurant.id} restData={restaurant} /></Link>
        )) : <h1>Please Refresh </h1>}
        

        {/* <RestaurantCard restName="KFC" cuisine="Burger, Chicken Wrap" avgRating="4.3 Stars" deliveryTime="Delivered in 35 mins"  /> */}
      </div>
    </div>
  );
};
export default Body;
