import React from "react";
import Card from "../../UI/Card";
import "../../css/DiscussAlert.css";

export default function DiscussAlert(props) {
  const { } = props;

  return (
    <Card className={"discuss-alert flex-c"}>
      <section className="alert-text-container flex-c">
        <h3 className="discuss-alert-text">
          지금 나가시면 <strong>패배</strong>입니다.
        </h3>
        <h3
          className="discuss-alert-text"
          style={{ marginTop: "5px" }}>
          진짜 나가시겠습니까?
        </h3>
      </section>
      <section className="dicuss-card-btn flex-r">
        <div className="join-btn">계속싸우기</div>
        <div className="watch-btn">나가기</div>
      </section>
    </Card>
  )
}