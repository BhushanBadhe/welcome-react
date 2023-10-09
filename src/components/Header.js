import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnAuthState, setBtnAuthState] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log("Header Rendered");
  useEffect(()=>{
    console.log("useEffect rendered");
  },[])


  return (
    <div className="flex justify-between  bg-yellow-200 shadow-lg m-2 mb-2 ">
      <div className="logo-container">
        <img className="w-56 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "✅" : "⛔️"}
          </li>
          <li className="px-2">
            <Link style={{textDecoration:"none",cursor:"pointer"}} to="/">Home</Link>
            </li>
          <li className="px-2">
            <Link style={{textDecoration:"none",cursor:"pointer"}} to="/about">About Us</Link>
            </li>
          <li className="px-2">
            <Link style={{textDecoration:"none",cursor:"pointer"}} to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link style={{textDecoration:'none',cursor:"pointer"}} to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
          <Link to="login"> 
          <button>
          Login
          </button>
          </Link>
          </li>
          {/* <button
            className="filter-btn"
            onClick={() =>
              btnAuthState == "Login"
                ? setBtnAuthState("Logout")
                : setBtnAuthState("Login")
            }
          >
            {btnAuthState}
          </button> */}

          



        </ul>
      </div>
    </div>
  );
};

export default Header;
