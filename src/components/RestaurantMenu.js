import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_URL } from '../utils/constants'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {

//  const [resInfo,setResInfo] = useState(null)

 //  const resInfo = useRestaurantMenu(res)
 const {resId} = useParams();
 const resInfo = useRestaurantMenu(resId)

 const rating_path = "../assets/images/star.png";
 console.log("restMenu", resInfo);
 console.log("Params", resId);
 
    

    if(resInfo == null) return <Shimmer/> 
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    // const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {}
    // console.log("Name",name);
    console.log("Item Cards desctructred" ,itemCards);

   return  (
    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <h4>{costForTwoMessage}</h4> 
        
        <h2>Menu </h2>
        <ul className='menu-list'>
            {itemCards.map( e => <li className='menu-item' key={e.card.info.id}>{e.card.info.name } -- <span className='item-price'>{"Rs. "+ e.card.info.price/100 || e.card.info.defaultPrice / 100   }</span> </li>  )}
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>{itemCards[2].card.info.name}</li> */}
            {/* <li>Tandoori</li>
            <li>Chicken 65</li> */}
        </ul>
    </div>
  )
}

export default RestaurantMenu