import React from "react";

export default function HeaderItem() {
  return (
    <>
      <section>
        <div className="container">
          <div className="enner">
            <h1 style={{ color: "#fff" }}>Orders #34562</h1>
            <button className="enner-btn">Dine In</button>
            <button className="enner-btn">To Go</button>
            <button className="enner-btn">Delivery</button>
          </div>
          <nav>
            <ul
              style={{
                color: "#fff",
                listStyleType: "none",
                display: "flex",
                marginTop: "35px",
              }}
            >
              <li style={{ width: "269px" }}>Item</li>
              <li style={{ width: "69px" }}>Qty</li>
              <li>Price</li>
            </ul>
            <div style={{width:"390px", height:"0.5px" , backgroundColor:"#fff", marginTop:"25px", }}></div>
          </nav>
        </div>
      </section>
    </>
  );
}
