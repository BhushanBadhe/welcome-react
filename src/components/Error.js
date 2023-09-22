import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const  err = useRouteError();
    console.log("Error",err);
  return (
    <div>
        <h1>Oops!!</h1>
        <h4>Something went wrong</h4>
        <h4>{err.status}</h4>
        <h4>{err.statusText} </h4>
    </div>
  )
}

export default Error