import React from "react";
import Card from "../../UI/Card";
import "../../css/DiscussCard.css";
import Heartbtn from "../../UI/HeartBtn";
import { Link, useNavigate } from "react-router-dom";
import DiscussCardBtn from "./DiscussCardBtn";

export default function DiscussCard(props) {
  const { } = props;
  const navigate = useNavigate();

  // props로 받을 json
  const DUMMY = {
    hashtag: ["이슈", "고전", "길도흔", "입니다"],
    context: "2022 대선후보",
    watcher: 734,
    type: "join"
  }

  //버튼과 url
  const JOIN = {
    click: ()=>navigate(`/discussion/talk/?content=${DUMMY.context}`),
    text: "참여하기"
  }
  const VIEW = {
    click: ()=>navigate(`/discussion/talk/?content=${DUMMY.context}`),
    text: "자세히 보기"
  }
  const WATCH = {
    click: ()=>navigate(`/discussion/talk/?content=${DUMMY.context}`),
    text: "관전하기"
  }

  const isType = DUMMY.type === "join" ? true : false;

  return (
    <Card className={"discuss-card flex-c"}>
      <section className="discuss-card-upper">
        <h5 className="discuss-card-hashtag">
          {DUMMY.hashtag.map(hashtag => ` #${hashtag}`)}
        </h5>
        <Heartbtn
          className="discuss-card-heart"
        />
      </section>
      <h1 className="discuss-card-context flex-c">{ DUMMY.context}</h1>
      <section className="discuss-card-lower">
        관전자수 : { DUMMY.watcher }명
      </section>
      {/* props로 받아서 참여/관전/여부를 확인함 */}
      {!isType && <DiscussCardBtn
        firstBtn={ VIEW }
      />}
      {isType && <DiscussCardBtn
        firstBtn={ JOIN }
        secondBtn={ WATCH }
      />}
    </Card>
  )
}