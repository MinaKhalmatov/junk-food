import React from "react";
import "./right.css";
import HeaderItem from "./Header-block/Header-right";
import RightItemsProps from "./Right-Item/Right-itemsProps";
import Footer from "./Footer/Footer";

function Right() {
  return (
    <div className="right-item">
      <HeaderItem />
      <RightItemsProps />
      <Footer />
    </div>
  );
}

export default Right;
