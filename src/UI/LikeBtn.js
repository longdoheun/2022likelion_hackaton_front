import React from "react";
import like from "../images/like.png";
import likeYes from "../images/like-yes.png";

function LikeBtn(props) {
  const classes = "" + props.className;

  return (
    <img
      className={classes}
      src={props.isLike ? likeYes : like}
      alt={props.isLike ? "like" : "unlike"}
      onClick={props.onclick}
    />
  );
}

export default LikeBtn;