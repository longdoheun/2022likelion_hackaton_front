import React from "react";
import Card from "../../UI/Card";
import "../../css/DiscussLoading.css";
import SWORD from "../../images/ri-sword.svg";
import CHECKED_VOTE from "../../images/checked_vote.svg";

export default function DiscussLoading(props) {
  const { loading_type } = props

  const LOADING = {
    vote : {
      text: "투표 결과를 기다리는 중입니다.",
      image: CHECKED_VOTE,
    },
    match: {
      text: "싸울 상대를 기다리는 중입니다.",
      image: SWORD,
    }
  }

  return (
    <Card className={"discuss-loading flex-c"}>
      <div className="discuss-loading-text">{ LOADING[loading_type].text}</div>
      <img src={ LOADING[loading_type].image} alt="discuss-loading-img" className="discuss-loading-img" />
      <div className="discuss-exit-btn">나가기</div>
    </Card>
  )
}