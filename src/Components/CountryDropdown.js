import React, { useState, useContext } from "react";
import { HouseContext } from "./HouseContext";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function NavbarItems(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <button onClick={() => setOpen(!open)} className="icon-button">
        {props.country}
      </button>
      {open && props.children}
    </li>
  );
}

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  return (
    <div className="option__title">
      Location
      <Navbar>
        <NavbarItems country={country}>
          {countries.map((country) => {
            return (
              <div className="dropdown">
                <button
                  onClick={() => setCountry(country)}
                  className="dropdown__button"
                >
                  {country}
                </button>
              </div>
            );
          })}
        </NavbarItems>
      </Navbar>
    </div>
  );
};

export default CountryDropdown;
