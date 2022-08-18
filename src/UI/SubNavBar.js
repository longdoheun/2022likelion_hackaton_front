import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BACK from "../images/back.svg";
import "./SubNavBar.css";

export default function SubNavBar(props) {
  const { } = props;
  const navigate = useNavigate();

  const text ="1:1 토론"
  return(
    <section className="subNavBar">
      <div className="subNavBar-con flex-r">
        <img
          src={BACK}
          alt="go-back"
          className="go-back-btn"
          onClick={()=>navigate(-1)}
        />
        <div className="current-page-info">{ text}</div>
        <div className="second-btn"></div>
      </div>
    </section>
  )
}