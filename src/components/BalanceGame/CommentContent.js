import React from "react";
import replyArrow from "../../images/reply-arrow.png";
import like from "../../images/like.png";
import declare from "../../images/declare.png";

function CommentContent({ DUMMY_COMMENTS, children }) {
  return (
    <>
      <section className="comments__box">
        {children}
        <div className="comments__profile_box">
          <p className="comments__selected_color" />
          <img
            className="comments__profile_img"
            src={DUMMY_COMMENTS.profileImg.url}
            alt={DUMMY_COMMENTS.profileImg.alt}
          />
        </div>
        <div className="comments_content_box">
          <div className="comments__content_box_1">
            <p className="comments__profile_name">
              {DUMMY_COMMENTS.profileName}
            </p>
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
          <p className="comments__context">{DUMMY_COMMENTS.text}</p>
          <div className="comments__content_box_2">
            <p className="comments__date">{DUMMY_COMMENTS.date}</p>
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
    </>
  );
}

export default CommentContent;
