import React from "react";
import BlockProps from "./BlockProps";
import food1 from "../../../../assets/img/Images.png";
import Food4 from "../../../../assets/img/Delicios.png";
import Food5 from "../../../../assets/img/Lagman2.png";

export default function Section(props) {
  return (
    <>
      <section style={{ overflow: "auto" }}> 
        <div className="choose">
          <h2 style={{ color: "white", marginTop: "10px" }}>Choose Dishes</h2>
          <div>
            <select
              style={{
                background: "#1F1D2B",
                color: "white",
                width: "100px",
                height: "48px",
                borderRadius: "3px",
                border: "none",
                paddingLeft: "5px",
              }}
            >
              <option value="Dine In">Dine In</option>
            </select>
          </div>
        </div>
        <div className="block">
          <BlockProps
            img={food1}
            title=" Salted Pasta with mushroom sauce"
            price="$ 2.29"
            subtitle="    20 Bowls available"
          />
          <BlockProps
            img={Food4}
            title=" Spicy seasoned  seafood noodles"
            price="$ 2.69"
            subtitle="    10 Bowls available"
          />
          <BlockProps
            img={food1}
            title=" Spicy seasoned  seafood noodles"
            price="$ 2.89"
            subtitle="    26 Bowls available"
          />
          <BlockProps
            img={food1}
            title=" Beef dumpling in hot and sour soup"
            price="$ 3.29"
            subtitle="    17 Bowls available"
          />
          <BlockProps
            img={Food4}
            title=" Spicy seasoned  seafood noodles"
            price="$ 2.29"
            subtitle="    80 Bowls available"
          />
          <BlockProps
            img={Food5}
            title=" Hot spicy fried rice with omelet"
            price="$ 5.29"
            subtitle="    20 Bowls available"
          />
        </div>
      </section>
    </>
  );
}
