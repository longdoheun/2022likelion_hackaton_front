import React from "react";
import { useNavigate } from "react-router-dom"
import Card from "../../UI/Card";
import "../../css/DiscussAlert.css";
import DiscussCardBtn from "./DiscussCardBtn";

export default function DiscussAlert(props) {
  const { setIsAlert } = props;
  const navigate = useNavigate();

  const REMAIN = {
    click: () => setIsAlert(false),
    text: "계속싸우기"
  };
  const EXIT = {
    click: () => navigate(`/discussion`),
    text: "나가기"
  };

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
      <DiscussCardBtn
        firstBtn={ REMAIN }
        secondBtn={ EXIT }
      />
    </Card>
  )
}