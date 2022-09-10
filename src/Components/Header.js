import React from "react";
import "./css/Header.css";
import Estatery from "../Icon/estatery1.png";
function Header() {
  return (
    <div className="header">
      <img src={Estatery} alt="" className="header__icon" />
      <div className="header__center">
        <button className="header__button">Rent</button>
        <button className="header__button">Buy</button>
        <button className="header__button">Sell</button>
        <button className="header__button">Manage Property</button>
      </div>
      <div className="header__right">
        <button className="header__button" id="login">
          Login
        </button>
        <button className="header__button" id="signup">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
