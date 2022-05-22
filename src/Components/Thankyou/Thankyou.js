import React, { useState } from "react";
import "./thankyou.css";

const Thankyou = (props) => {
  let x = Math.floor((Math.random() * 1000000) + 100000);
  const exitClick = () => {
    props.setPage(0);
  };
  return (
    <>
      <div className="thanks-bg">
        <div className="thanks-container">
          <div className="thanks-content">
            <span className="thanks-header">Thank You!</span>
            <br />
            <img
              src="./tickthanks.png"
              className="thanks-logo"
              alt="thankyou-card"
            />
            <br />
            <span className="thanks-header">
              Your Table is successfully booked.
            </span>
            <br />
            <span className="thanks-header">Your Booking Id : #{x}</span>
            <br />
            <button className="thanks-exit" onClick={exitClick}>
              EXIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
