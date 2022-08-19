import React from "react";
import Card from "../../UI/Card";
import SubNavBar from "../../UI/SubNavBar";
import DiscussFlexCon from "./DiscussFlexCon";
import "../../css/DiscussResult.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

export default function DiscussResult(props) {
  const { } = props;
    
  const location = useLocation();
  const { content } = queryString.parse(location.search);

  const navigate = useNavigate();
  const leftRatio = 20;

  const SMALLER_RATIO = { background: `linear-gradient(to left, #F1968A ${100 - leftRatio}%, #96D6DF ${leftRatio}%)` };
  const BIGGER_RATIO = { background: `linear-gradient(to right, #96D6DF ${leftRatio}%,#F1968A ${100 - leftRatio}%)` };

  const GRAPH_STYLE = leftRatio <= 50 ? SMALLER_RATIO : BIGGER_RATIO;

  return (
    <>
      <SubNavBar
        onClick={()=>navigate("/discussion")}
        text={ content }
      />
      <Card className={"discuss-result flex-c"}>
        <h1 className="discuss-result-context">
          관전자 투표 결과
        </h1>
        <section className="discuss-result-indicate flex-c">
          <h3 className="discuss-result-username">귀신이고칼로리</h3>
          <h1 className="discuss-result-open">승리</h1>
        </section>
        <section className="discuss-result-statistic flex-c">
          <DiscussFlexCon
            leftText={"이재명"}
            rightText={"윤석열"}
          />
          <div
            className="discuss-result-graph"
            style={GRAPH_STYLE}
          ></div>
          <DiscussFlexCon
            leftText={<><strong>{leftRatio}</strong>%</>}
            rightText={<><strong>{100 - leftRatio}</strong>%</>}
          />
        </section>
        <Link to="/discussion">
          <div
            className="discuss-exit-btn"
            style={{ marginTop: "22px", marginBottom: "29px" }}
          >
            나가기
          </div>
        </Link>
      </Card>
    </>
  )
}