import Reac0, { useState } from "react";
import like from "../../images/like.png";
import LikeBtn from "./../../UI/LikeBtn";

function CommentContent({ DUMMY_COMMENTS, children }) {
  const [isLike, setLike] = useState(false);
  const [numLike, setNumLike] = useState(10);
  const likeToggleHandler = () => {
    setLike((isLike) => !isLike);
    {
      isLike
        ? setNumLike((numLike) => numLike - 1)
        : setNumLike((numLike) => numLike + 1);
    }
  };
  return (
    <>
      <section className="comments__box">
        {children}
        <div className="comments__profile_box">
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
          </div>
          <p className="comments__context">{DUMMY_COMMENTS.text}</p>
          <div className="comments__content_box_2">
            <p className="comments__date">{DUMMY_COMMENTS.date}</p>
            <LikeBtn
              className="balance-game-list__heart"
              isLike={isLike}
              onclick={likeToggleHandler}
            />
            <p className="comments_like_number">{numLike}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommentContent;
