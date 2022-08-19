import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BACK from "../images/back.svg";
import "./SubNavBar.css";

export default function SubNavBar(props) {
  const { onClick, text } = props;
  const navigate = useNavigate();

  return(
    <section className="subNavBar">
      <div className="subNavBar-con flex-r">
        <img
          src={BACK}
          alt="go-back"
          className="go-back-btn"
          onClick={onClick}
        />
        <div className="current-page-info">{ text }</div>
        <div className="second-btn"></div>
      </div>
    </section>
  )
}