import React, { useState } from "react";
import "./bookingnotfound.css";

const BookingNotFound= (props) => {
  const exitClick = () => {
    props.setPage(0);
  };
  return (
    <>
      <div className="bkngNotFound-bg">
        <div className="bkngNotFound-container">
          <div className="bkngNotFound-content">
            <span className="bkngNotFound-header">Oops Not Found !!</span>
            <br />
            <img
              src="./notfound.png"
              className="bkngNotFound-logo"
              alt="bkngNotFound-card"
            />
            <br />
            <span className="bkngNotFound-header">
              Your Table Booking doesn't exist!.
            </span>
            <br />
            <span className="bkngNotFound-header">Try with the correct registerd Mobile No.</span>
            <br />
            <button className="bkngNotFound-exit" onClick={exitClick}>
              EXIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingNotFound;
