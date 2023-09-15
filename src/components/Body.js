// import listOfRestaurant from "../utils/mockData";
import RestaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
    
    const data = await fetch('http://localhost:3000/hotels')
    
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=80426&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null')
    const parsedData = await data.json();

    // setRestaurantList(parsedData)
    // setCount(parsedData.length)
    console.log("Swiggy", parsedData);
    setRestaurantList(parsedData)
    setFilteredRestaurantList(parsedData)
    setCount(parsedData.length)
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
          <RestaurantCard key={restaurant._id} restData={restaurant} />
        ))}

        {/* <RestaurantCard restName="KFC" cuisine="Burger, Chicken Wrap" avgRating="4.3 Stars" deliveryTime="Delivered in 35 mins"  /> */}
      </div>
    </div>
  );
};
export default Body;
