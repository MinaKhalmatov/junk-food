import React from "react";

export default function BlockProps(props) {
  return (
    <>
      <div className="block-p">
        <img className="props-img" src={props.img} alt="" />
        <div
          style={{
            color: "white",
            textAlign: "center",
            position: "relative",
            bottom: "30px",
          }}
        >
          <h4>{props.title}</h4>
          <p style={{ paddingTop: "15px" }}>{props.price}</p>
          <p style={{ paddingTop: "15px", color: "grey" }}>{props.subtitle}</p>
        </div>
      </div>
    </>
  );
}
