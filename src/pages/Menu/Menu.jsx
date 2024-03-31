import React from "react";
import "./menu.css";
import Logo from "../../assets/img/Logo.png";
import House from "../../assets/img/House.png";
import Jk from "../../assets/img/star.png";
import Part from "../../assets/img/part.png";
import Setting from "../../assets/img/setting.png";
import Click from "../../assets/img/click.png";
import Email from "../../assets/img/email.png";
import LogOut from "../../assets/img/logOut.png";

function Menu() {
  return (
    <>
      <section className="sect-enner">
        <div className="container">
          <div className="items">
            <div className="logo-item">
              <img src={Logo} alt="" />
            </div>
            <div className="item">
              <img src={House} alt="" />
              <img style={{ paddingTop: "40px" }} src={Jk} alt="" />
              <img style={{ paddingTop: "40px" }} src={Part} alt="" />
              <img style={{ paddingTop: "40px" }} src={Email} alt="" />
              <img style={{ paddingTop: "40px" }} src={Click} alt="" />
              <img style={{ paddingTop: "40px" }} src={Setting} alt="" />
            </div>
            <div className="log-out">
              <img src={LogOut} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
