import listOfRestaurant from "../utils/mockData";
import RestaurantCard from "./ReastaurantCard";
import { useState } from "react";


const Body = () => {

  // State variable 



  // let dataObj = [{
  //   _id: 1,
  //   name: "Starbucks Coffee",
  //   avgRating: 4.3,
  //   cuisines: ["Beverages", "Cafe", "Snacks", "Desserts"],
  //   deliveryTime: "Delivered in 36 minutes",

  //   CloudinaryID: "yunobf9mdp1zjjdvx1ik",
  // },
  // {
  //   _id: 2,
  //   name: "EatFit",
  //   avgRating: 4.2,
  //   cuisines: [
  //     "Chinese",
  //     "Healthy Food",
  //     "Tandoor",
  //     "Pizzas",
  //     "North Indian",
  //     "Thalis",
  //     "Biryani",
  //   ],
  //   deliveryTime: "Delivered in 28 minutes",
  //   CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
  // },
  // {
  //   _id: 3,
  //   name: "Baskin Robbins - Ice Cream Desserts",
  //   avgRating: 4.6,
  //   cuisines: ["Desserts", "Ice Cream"],
  //   deliveryTime: "Delivered in 45 minutes",
  //   CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
  // }]
  const [restaurantList,setRestaurantList] = useState(listOfRestaurant);
  // let restCount = listOfRestaurant.length;
  const [count,setCount]=useState(listOfRestaurant.length);
  // const restaurantList = restaurantList;
  // const { restaurantList } = restObj;
  console.log("Hook", restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
        className="filter-btn"
        onClick={()=>{
        const filteredListOfRestaurant =  restaurantList.filter(res => res.avgRating > 4.2)
        console.log(filteredListOfRestaurant);
        setRestaurantList(filteredListOfRestaurant);
        setCount(filteredListOfRestaurant.length)
        }
        }
        >Top Rated Restaurant</button>

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
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restData={restaurant} />
        ))}

        {/* <RestaurantCard restName="KFC" cuisine="Burger, Chicken Wrap" avgRating="4.3 Stars" deliveryTime="Delivered in 35 mins"  /> */}
      </div>
    </div>
  );
};
export default Body;
