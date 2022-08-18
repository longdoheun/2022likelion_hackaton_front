import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";
import axios from "axios";
import "../../css/Comments.css";
import profileSample1 from "../../images/profile-sample1.png";
import profileSample2 from "../../images/profile-sample2.png";
import profileSample3 from "../../images/profile-sample3.png";
import replyArrow from "../../images/reply-arrow.png";
import like from "../../images/like.png";
import declare from "../../images/declare.png";

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
          <p className="comments__color" id="neutral" />
          <p className="comments__color" id="red" />
          <p className="comments__color" id="blue" />
        </div>

        <section className="comments__box">
          <div className="comments__profile_box">
            <p className="comments__selected_color" />
            <img
              className="comments__profile_img"
              src={DUMMY_COMMENTS[0].profileImg.url}
              alt={DUMMY_COMMENTS[0].profileImg.alt}
            />
          </div>
          <div className="comments_content_box">
            <div className="comments__content_box_1">
              <p className="comments__profile_name">{DUMMY_COMMENTS[0].profileName}</p>
              <div className="comments__button_box">
                <img
                  className="comments__reply_button"
                  src={replyArrow}
                  alt="replyArrow"
                />
                <img className="comments__like_button" src={like} alt="like" />
                <img
                  className="comments__declare_button"
                  src={declare}
                  alt="declare"
                />
              </div>
            </div>
            <p className="comments__context">{DUMMY_COMMENTS[0].text}</p>
            <div className="comments__content_box_2">
              <p className="comments__date">{DUMMY_COMMENTS[0].date}</p>
              <img
                className="comments__like_button"
                src={like}
                alt="like"
                id="like_num_button"
              />
              <p className="comments_like_number">10</p>
            </div>
          </div>
        </section>

        <section className="comments__box">
          <img className="comments__reply" src={replyArrow} alt="replyArrow" />
          <div className="comments__profile_box">
            <p className="comments__selected_color" />
            <img
              className="comments__profile_img"
              src={profileSample2}
              alt="profile-sample1"
            />
          </div>
          <div className="comments_content_box">
            <div className="comments__content_box_1">
              <p className="comments__profile_name">저쩌구어쩌구</p>
              <div className="comments__button_box">
                <img
                  className="comments__reply_button"
                  src={replyArrow}
                  alt="replyArrow"
                />
                <img className="comments__like_button" src={like} alt="like" />
                <img
                  className="comments__declare_button"
                  src={declare}
                  alt="declare"
                />
              </div>
            </div>
            <p className="comments__context">
              중국음식점가면 탕수육에 소스 뿌려서 나오는거 아시죠? 그게 다
              이유가 있는 겁니다. 배달이라는 특수 상황때문에 따로 배달된거지
              부먹이 근본입니다.
            </p>
            <div className="comments__content_box_2">
              <p className="comments__date">08/14 21:34</p>
              <img
                className="comments__like_button"
                src={like}
                alt="like"
                id="like_num_button"
              />
              <p className="comments_like_number">10</p>
            </div>
          </div>
        </section>

        <section className="comments__box">
          <img className="comments__reply" src={replyArrow} alt="replyArrow" />
          <div className="comments__profile_box">
            <p className="comments__selected_color" />
            <img
              className="comments__profile_img"
              src={profileSample3}
              alt="profile-sample1"
            />
          </div>
          <div className="comments_content_box">
            <div className="comments__content_box_1">
              <p className="comments__profile_name">저쩌구어쩌구</p>
              <div className="comments__button_box">
                <img
                  className="comments__reply_button"
                  src={replyArrow}
                  alt="replyArrow"
                />
                <img className="comments__like_button" src={like} alt="like" />
                <img
                  className="comments__declare_button"
                  src={declare}
                  alt="declare"
                />
              </div>
            </div>
            <p className="comments__context">
              중국음식점가면 탕수육에 소스 뿌려서 나오는거 아시죠? 그게 다
              이유가 있는 겁니다. 배달이라는 특수 상황때문에 따로 배달된거지
              부먹이 근본입니다.
            </p>
            <div className="comments__content_box_2">
              <p className="comments__date">08/14 21:34</p>
              <img
                className="comments__like_button"
                src={like}
                alt="like"
                id="like_num_button"
              />
              <p className="comments_like_number">10</p>
            </div>
          </div>
        </section>
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
