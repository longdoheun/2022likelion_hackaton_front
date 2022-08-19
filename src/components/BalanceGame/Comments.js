import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";
import axios from "axios";
import "../../css/Comments.css";
import profileSample1 from "../../images/profile-sample1.png";
import profileSample2 from "../../images/profile-sample2.png";
import profileSample3 from "../../images/profile-sample3.png";
import CommentContent from "./CommentContent";

function Comments() {
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    axios.get("url").then(({ data }) => setCommentData(data));
  }, []);

  const DUMMY_COMMENTS = [
    {
      id: "e1",
      profileImg: {
        url: profileSample1,
        alt: "profileSample1",
      },
      profileName: "어쩌구저쩌구",
      text: "역시 탕수육은 찍먹아니겠습니까? 거 소스 다 부어 서 먹으면 눅눅~해져가지고 그럴거면 튀김을 왜 먹습니까? 다들 탕수육 찍먹하고광명찾길 기원합니다. ",
      date: "08/14 21:34",
    },
    {
      id: "e2",
      profileImg: {
        url: profileSample2,
        alt: "profileSample2",
      },
      profileName: "어쩌구저쩌구",
      text: "역시 탕수육은 찍먹아니겠습니까? 거 소스 다 부어 서 먹으면 눅눅~해져가지고 그럴거면 튀김을 왜 먹습니까? 다들 탕수육 찍먹하고광명찾길 기원합니다. ",
      date: "08/14 21:34",
    },
    {
      id: "e3",
      profileImg: {
        url: profileSample3,
        alt: "profileSample3",
      },
      profileName: "어쩌구저쩌구",
      text: "역시 탕수육은 찍먹아니겠습니까? 거 소스 다 부어 서 먹으면 눅눅~해져가지고 그럴거면 튀김을 왜 먹습니까? 다들 탕수육 찍먹하고광명찾길 기원합니다. ",
      date: "08/14 21:34",
    },
  ];

  return (
    <>
      <Card className="comments">
        <div className="comments__number">
          참여자 수:{DUMMY_COMMENTS.length}명
        </div>
        <div className="comments__color_select">
          <p className="comments__color" id="all" />
          <p className="comments__color" id="red" />
          <p className="comments__color" id="blue" />
        </div>

        {/* {commentData.map((list, index) => ( )*/}

        <CommentContent DUMMY_COMMENTS={DUMMY_COMMENTS[0]} />
        <CommentContent DUMMY_COMMENTS={DUMMY_COMMENTS[1]} />
        <CommentContent DUMMY_COMMENTS={DUMMY_COMMENTS[2]} />
        
      </Card>
      <div className="comments_form">
        <form className="comments__input">
          <input type="text" placeholder="댓글을 입력하세요" />
        </form>
      </div>
    </>
  );
}

export default Comments;
