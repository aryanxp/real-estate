import React, { useState, useContext } from "react";
import { HouseContext } from "./HouseContext";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-nav">{props.children}</div>
    </div>
  );
}
function NavbarItems(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item">
      <button onClick={() => setOpen(!open)} className="icon-button">
        {props.country}
      </button>
    </div>
  );
}

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  return (
    <div className="option__title">
      Location
      <Navbar>
        <NavbarItems country={country}>
          {/* {
            open ? (
              countries.map((country, index) => {
                return (
                  <div className="dropdown" key={index}>
                    <button
                      onClick={() => setCountry(country)}
                      className="dropdown__button"
                    >
                      {country}
                    </button>
                  </div>
                );
              })
            : (null))} */}
        </NavbarItems>
      </Navbar>
    </div>
  );
};

export default CountryDropdown;
