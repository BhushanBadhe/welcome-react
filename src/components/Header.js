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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {onlineStatus ? "✅" : "⛔️"}
          </li>
          <li>
            <Link style={{textDecoration:"none",cursor:"pointer"}} to="/">Home</Link>
            </li>
          <li>
            <Link style={{textDecoration:"none",cursor:"pointer"}} to="/about">About Us</Link>
            </li>
          <li>
            <Link style={{textDecoration:"none",cursor:"pointer"}} to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link style={{textDecoration:'none',cursor:"pointer"}} to={"/grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
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
