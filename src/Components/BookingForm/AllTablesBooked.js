import React, { useState } from "react";
import "./alltablesbooked.css";

const AllTablesBooked= (props) => {
  const exitClick = () => {
    props.setPage(0);
  };
  return (
    <>
      <div className="sadSorry-bg">
        <div className="sadSorry-container">
          <div className="sadSorry-content">
            <span className="sadSorry-header">We are really SORRY!</span>
            <br />
            <img
              src="./sad.png"
              className="sadSorry-logo"
              alt="Sad-card"
            />
            <br />
            <span className="sadSorry-header">
              All Tables are reserved for today's dinner.
            </span>
            <br />
            <span className="sadSorry-header">Please comeback tomorrow for booking.</span>
            <br />
            <button className="sadSorry-exit" onClick={exitClick}>
              EXIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTablesBooked;
