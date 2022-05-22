import React, { useState } from "react";
import "./home.css";
import { foodItems } from "./foodItems";
import MenuList from './MenuList';

const HomeBG = (formStatus) => {
  return (
    <>
    <img src="./bbqbg.png" className="home-bg" alt="bbq background"></img>
    <div className="menubox">
      <h1>Today's Menu</h1>
      <MenuList menuItems={foodItems} />
    </div>
    </>
  );
};

export default HomeBG;
