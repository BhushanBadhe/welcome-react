// import listOfRestaurant from "../utils/mockData";
import RestaurantCard,{withPromotedLabel} from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { HOMEPAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log("Hook", restaurantList);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(HOMEPAGE_URL);
    const parsedData = await data.json();
    console.log(
      "Info 2",
      parsedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    let infoData =
      parsedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (item) => item.info
      ) || [];

    infoData = infoData.map((item) => {
      if (item.avgRating > 4.3) {
        return { ...item, promoted: true };
      } else {
        return { ...item, promoted: false };
      }
    });
    setRestaurantList(infoData);
    setFilteredRestaurantList(infoData);
    setCount(infoData.length);

    // console.log("List 2", infoData[0]);
    // console.log("Count", infoData);
    // console.log("Filtered list ", filteredRestaurantList);
    // console.log("Og List", restaurantList);
    // console.log(infoData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="danger">
        Looks like you're offline please check your internet connection
      </h1>
    );

  return restaurantList == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md focus:border-blue-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 ml-4 py-1 bg-green-100 shadow-md rounded-lg"
            onClick={() => {
              let filteredList = restaurantList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("Filtered Search ", filteredList);
              setFilteredRestaurantList(filteredList);
              setCount(filteredList.length);
            }}
          >
            Seach
          </button>
        </div>
        <div className="my-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 shadow-md rounded-lg"
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
        </div>
        <div className="m-1 p-4 flex items-center">
          <button
            className="bg-red-500 text-white px-4 py-1 rounded-lg"
            onClick={() => {
              fetchdata();
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="ml-8 p-1 flex justify-center text-yellow-300 bg-gray-400 w-[200px]">
        Total Restaurants : {count}
      </div>
      <div className="restaurant-container flex flex-wrap items-center justify-center">
        
        {Array.isArray(filteredRestaurantList) ? (
          filteredRestaurantList.map((restaurant) => (
            <Link
              style={{ textDecoration: "none" }}
              key={restaurant.id}
              to={"/restaurants/" + restaurant.id}
            >
              {
                restaurant.promoted ? <RestaurantCardPromoted key={restaurant.id} restData={restaurant} /> :  <RestaurantCard key={restaurant.id} restData={restaurant} /> 
              }
              
            
            </Link>
          ))
        ) : (
          <h1>Please Refresh </h1>
        )}

      </div>
    </div>
  );
};
export default Body;
