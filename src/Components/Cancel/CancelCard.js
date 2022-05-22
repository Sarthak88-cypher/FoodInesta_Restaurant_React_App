import React, { useState } from "react";
import "./cancelcard.css";

const CancelCard= (props) => {
  const exitClick = () => {
    props.setPage(0);
  };
  return (
    <>
      <div className="cancel-bg">
        <div className="cancel-container">
          <div className="cancel-content">
            <span className="cancel-header">It's Done</span>
            <br />
            <img
              src="./cancel.png"
              className="cancel-logo"
              alt="cancel-card"
            />
            <br />
            <span className="cancel-header">
              Your Table is successfully cancelled.
            </span>
            <br />
            <span className="cancel-header">We hope you visit us back soon!</span>
            <br />
            <button className="cancel-exit" onClick={exitClick}>
              EXIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelCard;
