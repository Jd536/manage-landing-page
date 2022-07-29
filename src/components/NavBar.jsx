import React from "react";
import Logo from "../images/logo.svg";
import Button from "./Button/Button";
import NavMenu from "./Nav/NavMenu";
import { FaBars } from "react-icons/fa";
//css
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo-container">
        <img src={Logo} alt="manage logo" lang="en-us" />
      </div>
      <NavMenu
        items={["Pricing", "Product", "About Us", "Careers", "Community"]}
      />
      <FaBars className="mobile-menu-toggle-button" />
      <Button type="primary">Get Started</Button>
    </div>
  );
};

export default NavBar;
