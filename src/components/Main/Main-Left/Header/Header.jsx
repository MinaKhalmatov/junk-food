import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between" , marginTop:"20px" }}>
            <div style={{ color: "white" }} className="titles">
              <h1>Jaegar Resto</h1>
              <div className="date">Tuesday, 2 Feb 2021</div>
            </div>
            <div>
              <input
                className="header-inp"
                type="text"
                placeholder="Search for food, coffe, etc.."
              />
            </div>
          </div>
          <nav style={{}}>
            <ul
              style={{
                listStyleType: "none",
                color: "#fff",
                display: "flex",
                gap: "40px",
                marginTop: "35px",
                paddingLeft: "20px"
              }}
            >
              <li className="menu-li">Hot Dishes</li>
              <li className="menu-li">Cold Dishes</li>
              <li className="menu-li">Soup</li>
              <li className="menu-li">Grill</li>
              <li className="menu-li">Appetizer</li>
              <li className="menu-li">Dessert</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
