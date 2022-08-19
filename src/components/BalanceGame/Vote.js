import React from "react";
import Card from "../../UI/Card";
import "../../css/Vote.css";

function Vote(props) {
  const classes = "vote " + props.className;
  return <Card className={classes} onClick={props.onClick}>{props.text}</Card>;
}

export default Vote;
