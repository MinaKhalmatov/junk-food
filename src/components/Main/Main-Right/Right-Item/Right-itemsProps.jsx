import React from "react";
import Food from "../../../../assets/img/Maskgroup.png";
import RightIitem from "./Right-item";
import Delete from "../../../../assets/img/Delete.png";
import Food2 from "../../../../assets/img/Image.png";
import Food3 from "../../../../assets/img/foodss.png";

export default function RightItemsProps() {
  return (
    <>
      <RightIitem
        img={Food}
        titles="Spicy seasoned sea..."
        paragh="2.29"
        btn="2"
        pricee="$ 4,58"
        plasholder="Order Note..."
        btnimg={Delete}
      />
      <RightIitem
        img={Food2}
        titles="Salted pasta with mu..."
        paragh="3.29"
        btn="1"
        pricee="$ 10,58"
        plasholder="Order Note..."
        btnimg={Delete}
      />
      <RightIitem
        img={Food}
        titles="Spicy seasoned sea..."
        paragh="5.59"
        btn="3"
        pricee="$ 7,58"
        plasholder="Order Note..."
        btnimg={Delete}
      />
      <RightIitem
        img={Food3}
        titles="Healthy noodle with ..."
        paragh="4.29"
        btn="2"
        pricee="$ 4,78"
        plasholder="Order Note..."
        btnimg={Delete}
      />
    </>
  );
}
