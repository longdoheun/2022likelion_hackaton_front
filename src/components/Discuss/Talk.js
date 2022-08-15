import React from "react";
//css
import "../../css/Talk.css";

export default function Talk(props) {
  const { profile, direction, text } = props;
  const multiple = direction === "row" ? 1 : 0;
  const polygonStyle = {
    transform: `rotate(${180 * multiple}deg)`,
  }
  return (
    <div className="talk-con">
      <section
        className="talk-cover flex-r"
        style={{flexDirection:direction}}>
        <img src={profile} alt="profile-img" className="talk-profile" />
        <div
          className="polygon"
          style={polygonStyle}></div>
        <div className="talk-content">
          <p className="talk-content-text">
            {text}
          </p>
        </div>
      </section>
    </div>
  )
}