import React from "react";

export default function Footer() {
  return (
    <footer style={{marginTop:"50px"}}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          <h5>Discount</h5>
          <p>$0</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#fff",
            marginTop:"20px"
          }}
        >
          <h5>Sub total</h5>
          <p>$0</p>
        </div>
        <button className="footer-btn">Continue to Payment</button>
      </div>
    </footer>
  );
}
