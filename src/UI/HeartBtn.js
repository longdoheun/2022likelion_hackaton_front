import React, { useState } from "react";
import HeartImg from "../images/heart.png";
import EmptyHeartImg from "../images/empty-heart.png";

function HeartBtn(props) {
  const classes = "" + props.className;
  const [isLike, setLike] = useState(false);

  const likeToggleHandler = () => {
    setLike((isLike) => !isLike);
  };

  return (
    <img
      className={classes}
      src={isLike ? HeartImg : EmptyHeartImg}
      alt={isLike ? "like" : "unlike"}
      onClick={likeToggleHandler}
    />
  );
}

export default HeartBtn;
