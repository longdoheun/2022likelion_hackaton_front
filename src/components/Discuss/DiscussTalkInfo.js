import React from "react";

export default function DiscussTalkInfo(props) {
  const { username, opinion, direction } = props;
  return (
    <div className="discuss-talk-info">
      {/* <h5 className="discuss-talk-info-username">{ username }</h5> */}
      <h3
        className="discuss-talk-info-choose"
        style={{textAlign: direction}}>{opinion}</h3>
    </div>
  )
}