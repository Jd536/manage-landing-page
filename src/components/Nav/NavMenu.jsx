import React from "react";

// import scss
import "./NavMenu.scss";

const NavMenu = (props) => {
  return (
    <nav className={"nav-" + props.type}>
      <ul className="nav-container">
        {props.items.map((item, index) => (
          <li key={index}>
            <a href="#product" className="nav-links">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
