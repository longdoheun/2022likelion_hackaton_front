import React from "react"

export default function DiscussFlexCon(props) {
  const { leftText, rightText, style} = props;
  return (
    <div
      className="discuss-result-flex-container flex-r"
    >
      <div className="discuss-result-flex">{ leftText }</div>
      <div className="discuss-result-flex">{ rightText }</div>
    </div>
  )
}