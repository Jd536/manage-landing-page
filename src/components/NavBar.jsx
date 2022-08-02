import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Button from "./Button/Button";
import NavMenu from "./Nav/NavMenu";
import { ReactComponent as HamburgerMenuButton } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";
//css
import "./NavBar.scss";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleButtonClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navBar">
      <div className="logo-container">
        <img src={Logo} alt="manage logo" lang="en-us" />
      </div>
      <NavMenu
        items={["Pricing", "Product", "About Us", "Careers", "Community"]}
        type="desktop"
      />
      <NavMenu
        items={["Pricing", "Product", "About Us", "Careers", "Community"]}
        type={showMenu ? "mobile-show" : "mobile-hide"}
      />
      <button
        className="header-toggle-button"
        onClick={handleToggleButtonClick}
      >
        {!showMenu ? <HamburgerMenuButton /> : <Close />}
      </button>
      <Button type="primary">Get Started</Button>
    </div>
  );
};

export default NavBar;
