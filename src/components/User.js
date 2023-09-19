import React, { useEffect } from 'react'
import { useState } from 'react'

const User = (props) => {
  const [count,setCount] = useState(0)


  // https://api.github.com/users/BhushanBadhe  ===> github API 


  useEffect(()=>{
    // getUserInfo();
    const timer =  setInterval(()=>{
      console.log("User functional component");
    },1000);

    return ()=>{
      clearInterval(timer)
    }

  },[])


  async function getUserInfo(){
    const response = await fetch('https://api.github.com/users/BhushanBadhe');
    const data =await  response.json();
    console.log("Data from functional component", data);
  }

  console.log("render user component ");
  return (
    <div className='user-card'>
        <h1>Name : {props.name}</h1>
        <h2>Location : Pune</h2>
        <p>{props.componentType}</p>
        <p>Count: {count}</p>
        <button
        onClick={
          ()=> setCount(count+1)
        }
        >+</button>
    </div>
  )
}

export default User