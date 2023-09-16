import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_URL } from '../utils/constants'


const RestaurantMenu = () => {

 const [resInfo,setResInfo] = useState(null)
 const {resId} = useParams();
 console.log("Params", resId);
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        
        const data = await fetch(MENU_URL+ resId)
        const parsedData = await data.json();
        console.log("Restaurant Name csx", parsedData);
        setResInfo(parsedData.data)
    }

    if(resInfo == null) return <Shimmer/> 
    // const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {}
    console.log("Name",name);
    console.log("Item Cards desctructred" ,itemCards);
    console.log("Items card", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name);

   return  (
    <div className='menu'>
        <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <p>{cuisines.join(", ")}</p>
        <h4>{costForTwoMessage}</h4>
        <h2>Menu </h2>
        <ul>
            {itemCards.map( e => <li key={e.card.info.id}>{e.card.info.name } -- { "Rs. "+ e.card.info.price/100 || e.card.info.defaultPrice / 100 } </li>  )}
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