import React from "react";
import { useLocation } from "react-router-dom";
import  queryString from "query-string"
//css
import "../../css/DiscussTalk.css";
//components
import Card from "../../UI/Card";
import DiscussTalkInfo from "./DiscussTalkInfo";
import Talk from "./Talk";

//프로필 이미지
import profile1 from "../../images/profile-sample1.png";
import profile2 from "../../images/profile-sample2.png";


export default function DiscussTalk(props) {
  const { } = props;
  const location = useLocation();
  const { opinion } = queryString.parse(location.search);

  //예상 
  const DUMMY = [
    {
      opinion: "윤석열",
      username: "귀신이고칼로리",
      profile: profile1,
      text: "윤석열 최고"
    },
    {
      opinion: "이재명",
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "이재명 최고"
    },
    {
      opinion: "이재명",
      username: "귀신이고칼로리",
      profile: profile1,
      text: "안녕하세요 건기제를 좋아하는 김건기입니다."
    },
    {
      opinion: "윤석열",
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "특잇값 분해는 스펙트럼분해의 일반적인 형태로 차원을 축소하는데 활용된다. 모든 행렬에 대해 분해가능하다는 것이 장점이다."
    },
    {
      opinion: "윤석열",
      username: "귀신이고칼로리",
      profile: profile1,
      text: "안녕하세요 건기제를 좋아하는 김건기입니다."
    },
    {
      opinion: "이재명",
      username: "귀신이고칼로리",
      profile: profile1,
      text: "안녕하세요 건기제를 좋아하는 김건기입니다."
    },
    {
      opinion: "윤석열",
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "특잇값 분해는 스펙트럼분해의 일반적인 형태로 차원을 축소하는데 활용된다. 모든 행렬에 대해 분해가능하다는 것이 장점이다."
    },
    {
      opinion: "이재명",
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "특잇값 분해는 스펙트럼분해의 일반적인 형태로 차원을 축소하는데 활용된다. 모든 행렬에 대해 분해가능하다는 것이 장점이다."
    },
  ]
  // 사용자 한명을 기준으로
  const oppositeOpinion = opinion === "이재명" ? "윤석열" : "이재명"
  const myOpinion = opinion === "이재명" ? "이재명" : "윤석열"


  const checkDirection = (opinion) => {
    let direction;
    if (opinion === oppositeOpinion) {
      direction = "row"
    } else {
      direction = "row-reverse"
    }
      return direction
  }
  
  return (
    <div className="discuss-talk-con">
      <section className="discuss-talk-upper flex-r">
        <p className="discuss-vote-questioner">
          질문자: {"귀신이고칼로리"}
        </p>
        <p className="discuss-vote-questioner">
          관전자수: {734}명
        </p>
      </section>
      <Card className={"discuss-talk flex-c"}>
        <section className="discuss-talk-info-con">
          <div className="discuss-talk-info-cover flex-r">
            <DiscussTalkInfo
              opinion={oppositeOpinion}
              direction="left"
            />
            <h1 className="discuss-talk-versus">VS</h1>
            <DiscussTalkInfo
              opinion={myOpinion}
              direction={"right"}
            />
          </div>
        </section>
        <section className="discuss-talk-main no-scroll flex-c">
          {DUMMY.map((info, index) =>
            <Talk
              username={info.username}
              key={index}
              profile={info.profile}
              direction={checkDirection(info.opinion)}
              text={info.text}
            />
          )}
        </section>
        </Card>
      </div>
  )
}