import React from "react";
import Card from "../../UI/Card";
import "../../css/DiscussCard.css";
import Heartbtn from "../../UI/HeartBtn";
import { Link } from "react-router-dom";
export default function DiscussCard(props) {
  const { } = props;

  // props로 받을 json
  const DUMMY = {
    hashtag: ["이슈", "고전", "길도흔", "입니다"],
    context: "2022 대선후보",
    watcher: 734,
    type: "join"
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
      {!isType&&<section className="dicuss-card-btn flex-r">
        <div className="view-btn">자세히 보기</div>
      </section>}
      {isType && <section className="dicuss-card-btn flex-r">
        <Link to={`/discuss/talk/?content=${DUMMY.context}`}>
          <div className="join-btn">참여하기</div>
        </Link>
        <Link to={`/discuss/talk/?content=${DUMMY.context}`}>
          <div className="watch-btn">관전하기</div>
        </Link>
      </section>}
    </Card>
  )
}