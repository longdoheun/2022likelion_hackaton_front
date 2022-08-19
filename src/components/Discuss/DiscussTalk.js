import React from "react";
import {useHistory} from "react-router-dom";
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

  //예상 
  const DUMMY = [
    {
      username: "귀신이고칼로리",
      profile: profile1,
      text: "안녕하세요 건기제를 좋아하는 김건기입니다."
    },
    {
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "특잇값 분해는 스펙트럼분해의 일반적인 형태로 차원을 축소하는데 활용된다. 모든 행렬에 대해 분해가능하다는 것이 장점이다."
    },
    {
      username: "귀신이고칼로리",
      profile: profile1,
      text: "안녕하세요 건기제를 좋아하는 김건기입니다."
    },
    {
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "특잇값 분해는 스펙트럼분해의 일반적인 형태로 차원을 축소하는데 활용된다. 모든 행렬에 대해 분해가능하다는 것이 장점이다."
    },
    {
      username: "귀신이고칼로리",
      profile: profile1,
      text: "안녕하세요 건기제를 좋아하는 김건기입니다."
    },
    {
      username: "귀신이고칼로리",
      profile: profile1,
      text: "안녕하세요 건기제를 좋아하는 김건기입니다."
    },
    {
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "특잇값 분해는 스펙트럼분해의 일반적인 형태로 차원을 축소하는데 활용된다. 모든 행렬에 대해 분해가능하다는 것이 장점이다."
    },
    {
      username: "곤드레밥길들이기",
      profile: profile2,
      text: "특잇값 분해는 스펙트럼분해의 일반적인 형태로 차원을 축소하는데 활용된다. 모든 행렬에 대해 분해가능하다는 것이 장점이다."
    },
  ]
  // 사용자 한명을 기준으로
  const left = "귀신이고칼로리";

  const checkDirection = (username) => {
    let direction;
    if (username === left) {
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
              username={"귀신이고칼로리" }
              choose={"이재명"}
              direction="left"
            />
            <h1 className="discuss-talk-versus">VS</h1>
            <DiscussTalkInfo
              username={ "곤드래밥길들이기" }
              choose={"윤석열"}
              direction={"right"}
            />
          </div>
        </section>
        <section className="discuss-talk-main no-scroll flex-c">
          {DUMMY.map((info, index) =>
            <Talk
              key={index}
              profile={info.profile}
              direction={checkDirection(info.username)}
              text={info.text}
            />
          )}
        </section>
        </Card>
      </div>
  )
}