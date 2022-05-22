import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "./header.css";
import HomeBG from "../Homepage/Home";

const Header = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openBookingForm = () => {
    props.setPage(1);
  };
  const openCancelForm = () => {
    props.setPage(5);
  };
  const openBookingFormMobile = () => {
    handleClick();
    props.setPage(1);
  };
  const openCancelFormMobile = () => {
    handleClick();
    props.setPage(5);
  };
  const closeBookingForm = () => {
    props.setPage(0);
  };
  return (
    <>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <img
              src="./bbqheader.svg"
              className="logo"
              alt="bbq header"
              onClick={closeBookingForm}
            />
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeBookingForm}>
              Today's Menu
            </li>
            <li className="option">
              About Us
            </li>
            <li className="option">
              Blogs
            </li>
            <li
              className="option mobile-option"
              onClick={openBookingFormMobile}
            >
              Book A Table
              <img src="./bbqlogo.svg" className="logonxt" alt="bbq logo" />
            </li>
            <li className="option mobile-option" onClick={openCancelFormMobile}>
              Cancel Booking
            </li>
          </ul>
        </div>
        <div className="btn-Wrapper">
          <button href="" className="book-btn" onClick={openBookingForm}>
            <span className="btn-text">Book A Table</span>
            <img src="./bbqlogo.svg" className="logonxt" alt="bbq logo"></img>
          </button>
          <button href="" className="cancel-btn" onClick={openCancelForm}>
            <span className="btn-canceltext">Cancel Booking</span>
          </button>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
