import React from "react";
import ReactDOM from "react-dom/client";
// Header
// --> Logo
// --> Nav Items
// Body 
// --> SearchBar 
// --> RestaurantContainer 
// -----> ReastaurantCard
// ======>Img
// ======>Name of restaurant, Star, cuisine, delivery time, etc   
// Footer
// --> Copyright
// --> Links 
// --> Address
// ---> Contact

const styleCard ={
  backgroundColor: "#f0f0f0"
}


const restObj = {
  "restaurantList": [
      {
          "_id":1,
          "name": "Starbucks Coffee",
          "avgRating": 4.3,
          "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
          ],
          "deliveryTime": "Delivered in 36 minutes",
          
          "CloudinaryID":"4df3497f1460dfd1ecd8125222f6d362"
      },
      {
        "_id":2,
          "name": "EatFit",
          "avgRating": 4.2,
          "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
          ],
          "deliveryTime": "Delivered in 28 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":3,
          "name": "Baskin Robbins - Ice Cream Desserts",
          "avgRating": 4.6,
          "cuisines": [
              "Desserts",
              "Ice Cream"
          ],
          "deliveryTime": "Delivered in 45 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":4,
          "name": "Blue Nile",
          "avgRating": 4.1,
          "cuisines": [
              "Indian",
              "Chinese"
          ],
          "deliveryTime": "Delivered in 50 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":5,
          "name": "Yenna Dosa",
          "avgRating": 4.5,
          "cuisines": [
              "South Indian"
          ],
          "deliveryTime": "Delivered in 32 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":6,
          "name": "Wadeshwar(Law college road)",
          "avgRating": 4.5,
          "cuisines": [
              "South Indian",
              "Snacks",
              "Street Food",
              "Beverages",
              "Desserts"
          ],
          "deliveryTime": "Delivered in 55 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":7,
          "name": "Subway",
          "avgRating": 4.2,
          "cuisines": [
              "Healthy Food",
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
          ],
          "deliveryTime": "Delivered in 40 minutes",
          "CloudinaryID":"78ece6968844e2eba6c04eb462ce0eba"
      },
      {
        "_id":8,
          "name": "Irani Cafe",
          "avgRating": 4.4,
          "cuisines": [
              "Bakery",
              "Snacks",
              "Fast Food",
              "Desserts",
              "Beverages",
              "Indian",
              "Street Food"
          ],
          "deliveryTime": "Delivered in 48 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":9,
          "name": "Paratha Box - Desi Punjabi Meals",
          "avgRating": 3.7,
          "cuisines": [
              "North Indian",
              "Punjabi",
              "Indian",
              "Home Food",
              "Beverages"
          ],
          "deliveryTime": "Delivered in 42 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":10,
          "name": "Havmor Havfunn Ice cream",
          "avgRating": 4.0,
          "cuisines": [
              "Ice Cream",
              "Ice Cream Cakes",
              "Desserts",
              "Beverages"
          ],
          "deliveryTime": "Delivered in 38 minutes",
          "CloudinaryID":"0da26b9dde86dc03dad7b4a1a747d2bd"
      },
      {
        "_id":11,
          "name": "Cafe Zam Zam",
          "avgRating": 4.2,
          "cuisines": [
              "Mughlai",
              "North Indian",
              "Chinese",
              "Fast Food",
              "Biryani"
          ],
          "deliveryTime": "Delivered in 50 minutes",
          "CloudinaryID":"78ece6968844e2eba6c04eb462ce0eba"
      }
  ]
}




// const restObj = {
//   "data": {
//     "Starbucks Coffee": {
//       "avgRating": 4.3,
//       "cuisines": [
//         "Beverages",
//         "Cafe",
//         "Snacks",
//         "Desserts",
//         "Bakery",
//         "Ice Cream"
//       ],
//       "deliveryTime": "Delivered in 36 minutes"
//     },
//     "EatFit": {
//       "avgRating": 4.2,
//       "cuisines": [
//         "Chinese",
//         "Healthy Food",
//         "Tandoor",
//         "Pizzas",
//         "North Indian",
//         "Thalis",
//         "Biryani"
//       ],
//       "deliveryTime": "Delivered in 28 minutes"
//     },
//     // ... other restaurant objects
//   }
// };

const Header = () => {
  return(
  <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
)}


// Reastaurant Card
const RestaurantCard = (props) => {
  // debugger;
  const {restData} = props;

  const {name, cuisines,deliveryTime,avgRating,CloudinaryID} = restData;
  // const data = restData.data;
  console.log(name);
  // const { restName,cuisine,avgRating,deliveryTime} = props;
  return (
    <div className="restaurant-card" style={styleCard}>  
    <img 
    className="restaurant-logo"
    alt="restaurant-logo"
    
    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+restData.CloudinaryID}
    // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cdnq1gshs4tuc2po6nwu
    />
    <h3 className="restaurant-name">{restData.name}</h3>
    <h4 >{restData.cuisines.join(",")}</h4>
    <h4>{restData.avgRating + " stars"}</h4>
    <h4>{restData.deliveryTime}</h4>
    </div>
  )
}


// Body Component

const Body = () => {

  const {restaurantList}= restObj;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
      {/* <RestaurantCard restData={restaurantList[0]}/>
      <RestaurantCard restData={restaurantList[1]}/>
      <RestaurantCard restData={restaurantList[2]}/>
      <RestaurantCard restData={restaurantList[3]}/>
      <RestaurantCard restData={restaurantList[4]}/>
      <RestaurantCard restData={restaurantList[4]}/>
      <RestaurantCard restData={restaurantList[6]}/>
      <RestaurantCard restData={restaurantList[7]}/> */}
      {
        restaurantList.map(restaurant => <RestaurantCard key={index} restData={restaurant}/>)
      }


        {/* <RestaurantCard restName="KFC" cuisine="Burger, Chicken Wrap" avgRating="4.3 Stars" deliveryTime="Delivered in 35 mins"  /> */}
       
      </div>
    </div>
  )
}


const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Body/>
  </div>
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
