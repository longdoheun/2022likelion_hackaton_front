import React from "react";

export default function DiscussTalkInfo(props) {
  const { username, choose, direction } = props;
  return (
    <div className="discuss-talk-info">
      <h5 className="discuss-talk-info-username">{ username }</h5>
      <h3
        className="discuss-talk-info-choose"
        style={{textAlign: direction}}>{choose}</h3>
    </div>
  )
}