import { IMAGE_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // debugger;
  const { restData } = props;
  console.log("props 2", props);
  const { name, cuisines, deliveryTime, avgRating, cloudinaryImageId } = restData;
  // const data = restData.data;
  // console.log(avgRating);
  // const { restName,cuisine,avgRating,deliveryTime} = props;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={IMAGE_URL + cloudinaryImageId}
        // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cdnq1gshs4tuc2po6nwu
      />
      <h3 className="restaurant-name">{restData.name}</h3>
      <h4>{ restData.cuisines.join(",")}</h4>
      <h4>{restData.avgRating + " stars"}</h4>
      <h4>{restData.deliveryTime}</h4>
    </div>
  );
};

// const RestaurantCard = (props) => {
//     console.log(props);
//   return ( 
//     <div>Card</div>
//   ) 
// }

export default RestaurantCard;
