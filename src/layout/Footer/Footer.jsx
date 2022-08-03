import React, { useState } from "react";
import NavMenu from "../../components/Nav/NavMenu";
import Button from "../../components/Button/Button";
import { ReactComponent as Logo } from "../../images/logo.svg";
import "./Footer.scss";
import { ReactComponent as FaceBook } from "../../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);

  return (
    <footer className="footer">
      <div className=" footer-inner-container">
        <div className="footer-logo-and-social">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="footer-socials-container">
            {/* <img src={FaceBook} alt="facebook icon" />
            <img src={Youtube} alt="Youtub icon" />
            <img src={Twitter} alt="Twitter icon" />
            <img src={Pinterest} alt="Pinterest icon " />
            <img src={Instagram} alt="Instagram icon" /> */}
            <FaceBook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
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
        <div className="footer-form-and-copyright">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) {
                setInvalid(true);
              }
            }}
            className="footer-form"
          >
            <label htmlFor="email">
              <input
                type="email"
                className={invalid ? " invalid-input" : ""}
                placeholder="johndoe@manage.com"
                onChange={() => {
                  if (invalid) {
                    setInvalid(false);
                  }
                }}
              />
              <em className={invalid ? "invalid" : "hide"}>
                Please insert a valid email
              </em>
            </label>
            <Button type="footer-form-button"> Go</Button>
          </form>
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
