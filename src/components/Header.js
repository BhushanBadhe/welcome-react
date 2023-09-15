import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
export const Header = () => {
  const [btnAuthState, setBtnAuthState] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="filter-btn"
            onClick={() =>
              btnAuthState == "Login"
                ? setBtnAuthState("Logout")
                : setBtnAuthState("Login")
            }
          >
            {btnAuthState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
