import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";
import "../../css/BalanceGameCard.css";
import HeartBtn from "../../UI/HeartBtn";
import Vote from "./Vote";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function BalanceGameListCard(props) {
  // const [balanceGameVoter, setBalanceGameVoter] = useState([]);
  // useEffect(() => {
  //   axios.get("url").then(({ voteData }) => setBalanceGameVoter(voteData));
  // }, []);

  const navigate = useNavigate();
  const classes = "balance-game-card " + props.className;

  // const [leftChoice, setLeftChoice] = useState(balanceGameVoter[0].length);
  // const [rightChoice, setRightChoice] = useState(balanceGameVoter[1].length);

  const [isLike, setLike] = useState(false);
  const likeToggleHandler = () => {
    setLike((isLike) => !isLike);
  };

  return (
    <>
      <Card className={classes}>
        <section className="balance-game-card__upper">
          <h5 className="balance-game-card__tag_user">
            {props.DUMMY_LISTS[0].tag.map((tag) => ` #${tag}`)}
          </h5>
          <HeartBtn
            className="balance-game-list__heart"
            isLike={isLike}
            onclick={likeToggleHandler}
          />
        </section>

        <h1 className="balance-game-card__context">
          {props.DUMMY_LISTS[0].title}
        </h1>

        <section className="balance-game-card__center">
          <section className="balance-game-card__main_bar">
            <div
              className="balance-game-card__bar"
              style={{ cursor: "default" }}
              id="left-bar"
            >
              {props.DUMMY_LISTS[0].choiceLeft}
            </div>
            <div className="balance-game-card__vs">VS</div>
            <div
              className="balance-game-card__bar"
              style={{ cursor: "default" }}
              id="right-bar"
            >
              {props.DUMMY_LISTS[0].choiceRight}
            </div>
          </section>
          <section className="balance-game-card__detail_bar">
            <div className="balance-game-card__detail" id="left-bar-detail">
              {props.DUMMY_LISTS[0].leftWin}
            </div>
            <div className="balance-game-card__detail" id="right-bar-detail">
              {props.DUMMY_LISTS[0].rightWin}
            </div>
          </section>
        </section>

        <div className="balance-game__vote_num">
          투표자 수 : {props.totalVote}명
        </div>
        {/* <Link to= {'/balancegame/main/'} style={{ textDecoration: "none" }}> */}
        <Vote
          className="balance-game__revote"
          text="투표하기"
          onClick={() =>
            navigate(`/balancegame/main/?context=${props.DUMMY_LISTS[0].title}`)
          }
        ></Vote>
        {/* </Link> */}
      </Card>
    </>
  );
}

export default BalanceGameListCard;
