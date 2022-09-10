import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { HouseContext } from "./HouseContext";
import "./css/Search.css";
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  const { houses } = useContext(HouseContext);
  return (
    <div className="search_properties">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={() => {}} className="search__button">
        Search
      </button>
    </div>
  );
};

export default Search;
