import React from "react";

export default function RightIitem(props) {
  return (
    <>
      <section>
        <div className="container">
          <div className="main-food">
            <div
              style={{
                width: "250px",
                display: "flex",
                gap: "15px",
                marginTop: "3px",
              }}
            >
              <img src={props.img} alt="" />
              <div style={{ color: "#fff" }} className="food-texts">
                <h3>{props.titles}</h3>
                <p>{props.paragh}</p>
              </div>
            </div>
            <button className="num">{props.btn}</button>
            <h3 style={{ color: "#fff", marginTop: "10px" }}>{props.pricee}</h3>
          </div>
          <form style={{ marginTop: "10px" , display:"flex" , justifyContent:"space-between" }}>
            <input
              className="main-inp"
              type="text"
              placeholder={props.plasholder}
            />
            <button className="main-bttn">
              <img src={props.btnimg} alt="" />
            </button>
          </form>
        </div>
      </section>

    
    </>
  );
}
