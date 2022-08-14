import React from "react";
import HeartImg from "../images/heart.png";
import EmptyHeartImg from "../images/empty-heart.png";

function HeartBtn(props) {
  const classes = "" + props.className;

  return (
    <img
      className={classes}
      src={props.isLike ? HeartImg : EmptyHeartImg}
      alt={props.isLike ? "like" : "unlike"}
      onClick={props.onclick}
    />
  );
}

export default HeartBtn;
