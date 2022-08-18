import React from "react";
import { Link } from "react-router-dom";

export default function DiscussCardBtn(props) {
  const { firstBtn, secondBtn } = props;
  console.log(firstBtn)
  return (
    <section className="dicuss-card-btn-cover flex-r">
      <div
        className="dicuss-card-btn"
        id="first-btn"
        onClick={firstBtn.click}
      >{firstBtn.text}</div>
      {secondBtn &&
        <div
          className="dicuss-card-btn"
          id="second-btn"
          onClick={secondBtn.click}
        >{secondBtn.text}</div>}
    </section>
  )
}