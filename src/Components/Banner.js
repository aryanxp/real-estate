import React from "react";
import "./css/Banner.css";
import Search from "./Search";

function Banner() {
  return (
    <div className="banner__body">
      <h2 className="banner__header">Search properties to rent</h2>
      <Search />
    </div>
  );
}

export default Banner;
