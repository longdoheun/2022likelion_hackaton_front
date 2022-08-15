import React from "react";
import NOT_CHECKED from "../../images/circle-check.svg";
import CHECKED from "../../images/red-circle-check.svg";

export default function DiscussVoteSelection(props) {
  const { username, choose, isSelected, setIsSelect } = props;
  const changeCheck = () => {
    setIsSelect(!isSelected);
  };

  return (
    <div className="discuss-vote-selection flex-c">
      <h5 className="diccuss-vote-selection-username">
        {username}
      </h5>
      <h1 className="diccuss-vote-selection-choose">
        {choose}
      </h1>
      {!isSelected &&
        <img
          src={NOT_CHECKED}
          alt="not-checked"
          className="diccuss-vote-btn"
          onClick={changeCheck}
        />}
      {isSelected &&
        <img
          src={CHECKED}
          alt="checked"
          className="diccuss-vote-btn"
          onClick={changeCheck}
        />}
    </div>
  )
}