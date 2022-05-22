import React, { useState } from "react";
import "./form.css";
import { getFour, getTwo, postFour, postTwo } from "../../Api/Api";

const BookingForm = (props) => {
  const currentDateTime = Date().toLocaleString()
  const [userDetails, setUserDetails] = useState({
    username: "",
    mobile: "",
    guest: "1",
    time: "5pm",
    timeOfReservation: currentDateTime
  });
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.validity.valid ? e.target.value : "",
    });
  };
  const reserveClick = () => {
    sendData();
    props.setPage();
  };
  const sendData = async () => {
    if (parseInt(userDetails.guest) <= 2) {
      let data = await getTwo();
      if (data.length < 5) {
        postTwo(userDetails);
        props.setPage(2);
      } else {
        props.setPage(4);
      }
    } else {
      let data = await getFour();
      if (data.length < 5) {
        postFour(userDetails);
        props.setPage(2);
      } else {
        props.setPage(4);
      }
    }
  };

  return (
    <>
      <div className="form-bg">
        <div className="form-container">
          <span className="form-header">Book Your Dinner!</span>
          <div className="form-content">
            <form className="form-wrapper">
              <label className="form-inputLabel">
                Full Name
                <input
                  type="text"
                  name="username"
                  placeholder="Enter FullName Here"
                  className="form-input"
                  value={userDetails.username}
                  onChange={handleChange}
                />
              </label>
              <label className="form-inputLabel">
                Mobile No.
                <input
                  type="phone"
                  name="mobile"
                  pattern="[0-9]*"
                  placeholder="+91 - Enter Registered Mobile No. Here"
                  className="form-input"
                  value={userDetails.mobile}
                  onChange={handleChange}
                />
              </label>
              <label className="form-inputLabel">
                Number of guests
                <select
                  type="text"
                  name="guest"
                  className="form-input"
                  value={userDetails.guest}
                  onChange={handleChange}
                >
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                </select>
              </label>
              <label className="form-inputLabel">
                Dine-In Timing
                <select
                  type="text"
                  name="time"
                  className="form-input"
                  value={userDetails.time}
                  onChange={handleChange}
                >
                  <option value="5pm">05:00 PM</option>
                  <option value="6pm">06:00 PM</option>
                  <option value="7pm">07:00 PM</option>
                  <option value="8pm">08:00 PM</option>
                </select>
              </label>
              <button
                className={
                  userDetails.mobile.length > 0 &&
                  userDetails.username.length > 0
                    ? "form-submit"
                    : "form-submitDisabled"
                }
                onClick={() => reserveClick()}
                disabled={
                  userDetails.mobile.length > 0 &&
                  userDetails.username.length > 0
                    ? false
                    : true
                }
              >
                RESERVE TABLE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
