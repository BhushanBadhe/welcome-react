import { IMAGE_URL } from "../utils/constants";



const RestaurantCard = (props) => {
  // debugger;
  const { restData } = props;
  console.log("restData", restData.promoted);
  const { name, cuisines, deliveryTime, avgRating, cloudinaryImageId,costForTwo } = restData;
  // const data = restData.data;
  // console.log(avgRating);
  // const { restName,cuisine,avgRating,deliveryTime} = props;
  return (
    <div className="m-4 p-4 w-[250px] rounded-md bg-gray-200 shadow-md hover:bg-yellow-300" >
      <img
        className="restaurant-logo rounded-md "
        alt="restaurant-logo"
        src={IMAGE_URL + cloudinaryImageId}
        // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cdnq1gshs4tuc2po6nwu
      />
      <h3 className="font-bold py-2 text-xl">{restData.name}</h3>
      <div className="w-full h-22 overflow-hidden">
      <h4 className="whitespace-nowrap truncate">{ restData.cuisines.join(",")}</h4>
      </div>
      <h4>{restData.avgRating + " stars"}</h4>
      <h4>{restData.costForTwo}</h4>
    </div>
  );
};

// const RestaurantCard = (props) => {
//     console.log(props);
//   return ( 
//     <div>Card</div>
//   ) 
// }



export const withPromotedLabel = (RestaurantCard) => {
  console.log("Promoted", RestaurantCard);
  return (props)=>{
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  } 
}
export default RestaurantCard;
