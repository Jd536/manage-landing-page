import React from "react";
import NavMenu from "../../components/Nav/NavMenu";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="" alt="manage footer logo" />
      </div>
      <NavMenu
        items={[
          "Home",
          "Pricing",
          "Product",
          "About Us",
          "Careers",
          "Community",
          "Privacy Policy",
        ]}
      />
    </footer>
  );
};

export default Footer;
