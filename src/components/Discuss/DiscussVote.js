import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import Card from "../../UI/Card";
import SubNavBar from "../../UI/SubNavBar";
import DiscussVoteSelection from "./DiscussVoteSelection";
import "../../css/DiscussVote.css";

export default function DiscussVote(props) {
  // 확인 버튼이 있어야 할 것 같음. "나가기->확인"
  // 유저와 선택지를 props로 받아야함.
  const { } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { content, type } = queryString.parse(location.search);

  const [isSelectLeft, setIsSelectLeft] = useState(false);
  const [isSelectRight, setIsSelectRight] = useState(false);

  const goBack = () => {
    navigate(-1)
  }
  const goResult = () => {
    if (isSelectLeft || isSelectRight) {
      navigate(`/discussion/talk/?content=${content}&type=${type}&opinion=${(isSelectLeft&&"김동한")||(isSelectRight&&"김동찬")}`);
    } else {
      const message = "동의하는 입장에 체크해주세요"
      window.alert(message);
    }
  }

  useEffect(() => {
    if (isSelectLeft && isSelectRight) {
      setTimeout(() => {
        setIsSelectLeft(false);
        setIsSelectRight(true);
      }, 0);
    };
  }, [isSelectRight]);

  useEffect(() => {
    if (isSelectLeft && isSelectRight) {
      setTimeout(() => {
        setIsSelectLeft(true);
        setIsSelectRight(false);
      }, 0);
    };
  }, [isSelectLeft]);


  return (
    <>
      <SubNavBar
        onClick={()=>navigate(`/discussion`)}
        text={content}
      />
      <div className="discuss-vote-container">
        <p className="discuss-vote-questioner">
          질문자: {"귀신이고칼로리"}
        </p>
        <Card className={"discuss-vote flex-c"}>
          <section className="discuss-vote-upper">
            <h1 className="discuss-vote-fin">자유토론</h1>
            <h5 className="diccuss-vote-guide">
              토론 입장에 투표해주세요!
            </h5>
          </section>
          <div
            className="diccuss-vote-review"
            onClick = {()=>navigate(-1)}
          >
            다른 토론 선택하기
          </div>
          <section className="discuss-vote-center flex-r">
            <DiscussVoteSelection
              username={"귀신이고칼로리"}
              opinion={"김동한"}
              isSelected={isSelectLeft}
              setIsSelect={setIsSelectLeft}
            />
            <h1 className="discuss-vote-versus">
              VS
            </h1>
            <DiscussVoteSelection
              username={"곤드레밥길들이기"}
              opinion={"김동찬"}
              isSelected={isSelectRight}
              setIsSelect={setIsSelectRight}
            />
          </section>
          <div
            className="discuss-exit-btn"
            style={{ marginTop: "42px", marginBottom: "39px" }}
            onClick={goResult}
          >
            확인
          </div>
        </Card>
      </div>
    </>
  )
}