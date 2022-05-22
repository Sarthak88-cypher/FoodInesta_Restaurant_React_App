import React, { useState } from "react";
import "./cancel.css";
import { getFour, getTwo, deleteFour, deleteTwo } from "../../Api/Api";

const CancelForm = (props) => {
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
    setPhone(e.target.validity.valid ? e.target.value : "");
  };
  const cancelClick = () => {
    cancelBooking();
    props.setPage();
  };
  const cancelBooking = async () => {
    let dataTwo = await getTwo();
    let idx = -1;
    let dataFour = await getFour();
    dataTwo.map((item) => {
      if (item.mobile === phone) {
        idx = item.id;
      }
    });
    if (idx !== -1) {
      deleteTwo(idx);
      props.setPage(6);
    } else {
      dataFour.map((item) => {
        if (item.mobile === phone) {
          idx = item.id;
        }
      });
      if (idx !== -1) {
        deleteFour(idx);
        props.setPage(6);
      } else {
        props.setPage(3);
      }
    }
  };

  return (
    <>
      <div className="cancel-bg">
        <div className="cancel-container">
          <span className="cancel-header">Cancel Your Dinner!</span>
          <div className="cancel-content">
            <form className="cancel-wrapper">
              <label className="cancel-inputLabel">
                Mobile No.
                <input
                  type="phone"
                  name="mobile"
                  pattern="[0-9]*"
                  placeholder="+91 - Enter Registered Mobile No. Here"
                  className="cancel-input"
                  value={phone}
                  onChange={handleChange}
                />
              </label>
              <button className="cancel-submit" onClick={() => cancelClick()}>
                CANCEL
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelForm;
