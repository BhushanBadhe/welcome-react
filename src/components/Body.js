// import listOfRestaurant from "../utils/mockData";
import RestaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { HOMEPAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList,setFilteredRestaurantList] = useState([]);
  const [count, setCount] = useState(0);
  const [searchText,setSearchText] = useState("")
  // console.log("Hook", restaurantList);

  useEffect(() => {
    fetchdata();
  }, []);


  const fetchdata = async () => {
    
    // const data = await fetch('http://localhost:3000/hotels')
    
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667')
    const data = await fetch(HOMEPAGE_URL)
    const parsedData = await data.json();
    const infoData = parsedData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(e => e.info)
    setRestaurantList(infoData)
    setFilteredRestaurantList(infoData)
    console.log("List", restaurantList);
    console.log("Parsed data 2", parsedData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setRestaurantList(parsedData)
    // setCount(parsedData.length)
    // console.log("Swiggy", parsedData);
    // setRestaurantList(parsedData)
    // setFilteredRestaurantList(parsedData)
    setCount(infoData.length)
  }
  // if(restaurantList.length == 0){
  //   return <Shimmer/>
  // }
  

  return restaurantList == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search"> 
          <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button onClick={()=> {
          
            let filteredList = restaurantList.filter((res)=> res.name.toLowerCase().includes(searchText.toLowerCase()))
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
        {filteredRestaurantList.map((restaurant) => (
         <Link style={{textDecoration:'none'}} key={restaurant.id} to={"/restaurants/"+restaurant.id}><RestaurantCard key={restaurant.id} restData={restaurant} /></Link>
        ))}

        {/* <RestaurantCard restName="KFC" cuisine="Burger, Chicken Wrap" avgRating="4.3 Stars" deliveryTime="Delivered in 35 mins"  /> */}
      </div>
    </div>
  );
};
export default Body;
