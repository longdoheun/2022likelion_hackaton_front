import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import "../../css/BalanceGameCard.css";
import HeartBtn from "../../UI/HeartBtn";
import BalanceGameCenterBefore from "./BalanceGameCenterBefore";
import BalanceGameCenterAfter from "./BalanceGameCenterAfter";
import Vote from "./Vote";
import axios from "axios";
import SubNavBar from "../../UI/SubNavBar";


function BalanceGameCard(props) {
  // const [balanceGameVoter, setBalanceGameVoter] = useState([]);
  // useEffect(() => {
  //   axios.get("url").then(({ voteData }) => setBalanceGameVoter(voteData));
  // }, []);
  const navigate = useNavigate();

  const DUMMY_LISTS = [
    {
      id: "id1",
      user: "소고기딱복국",
      tag: ["음식, 고전"],
      title: "탕수육 먹을 때",
      choiceLeft: "부먹",
      choiceRight: "찍먹",
      leftWin: "근본 조리법을 따르자",
      rightWin: "눅눅 탕수육 OUT",
    },
    {
      id: "id2",
      user: "꿈은없고요그냥놀고싶습니다",
      tag: ["음식, 고전"],
      title: "복숭아 먹을 때",
      choiceLeft: "물복",
      choiceRight: "딱복",
      leftWin: "소고기딱복국이나 끓여드세요",
      rightWin: "바닥이랑 옷에 줄줄 흘리면서 드세요",
    },
  ];

  const DUMMY_VOTER = [
    ["e1", "e3", "e6", "e8"],
    ["e2", "e4", "e5"],
  ];

  const classes = "balance-game-card " + props.className;

  const [isVote, setIsVote] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [leftChoice, setLeftChoice] = useState(DUMMY_VOTER[0].length);
  const [rightChoice, setRightChoice] = useState(DUMMY_VOTER[1].length);
  const [totalVote, setTotalVote] = useState(leftChoice + rightChoice);
  // const [leftChoice, setLeftChoice] = useState(balanceGameVoter[0].length);
  // const [rightChoice, setRightChoice] = useState(balanceGameVoter[1].length);

  const [isLike, setLike] = useState(false);
  const likeToggleHandler = () => {
    setLike((isLike) => !isLike);
  };
  const leftClickHandler = () => {
    setLeftChoice((leftChoice) => leftChoice + 1);
    setTotalVote((totalVote) => totalVote + 1);
    setIsVote(!isVote);
    setIsLeft(true);
  };

  const rightClickHandler = () => {
    setRightChoice((RightChoice) => RightChoice + 1);
    setTotalVote((totalVote) => totalVote + 1);
    setIsVote(!isVote);
    setIsRight(true);
  };

  const reVoteHandler = () => {
    {
      isLeft && setLeftChoice(leftChoice - 1);
    }
    {
      isRight && setRightChoice(rightChoice - 1);
    }
    setTotalVote((totalVote) => totalVote - 1);
    setIsRight(false);
    setIsLeft(false);
    setIsVote(!isVote);
  };

  const leftTurnout = (
    (leftChoice / (leftChoice + rightChoice)) *
    100
  ).toFixed();
  const rightTurnout = (
    (rightChoice / (leftChoice + rightChoice)) *
    100
  ).toFixed();

  return (
    <>
      <SubNavBar
        onClick={()=>navigate("/")}
        text={"밸런스 게임"}
      />
      <Card className={classes}>
        <section className="balance-game-card__upper">
          <h5 className="balance-game-card__tag_user"></h5>
          <HeartBtn
            className="balance-game-list__heart"
            isLike={isLike}
            onclick={likeToggleHandler}
          />
        </section>

        <h1 className="balance-game-card__context">{DUMMY_LISTS[0].title}</h1>

        {isVote ? (
          <BalanceGameCenterAfter
            leftClickHandler={leftClickHandler}
            rightClickHandler={rightClickHandler}
            DUMMY_LISTS={DUMMY_LISTS}
            leftTurnout={leftTurnout}
            rightTurnout={rightTurnout}
            isVote={isVote}
          />
        ) : (
          <BalanceGameCenterBefore
            leftClickHandler={leftClickHandler}
            rightClickHandler={rightClickHandler}
            DUMMY_LISTS={DUMMY_LISTS}
          />
        )}

        <div className="balance-game__vote_num">투표자 수 : {totalVote}명</div>
        {isVote && (
          <Vote
            className="balance-game__revote"
            onClick={reVoteHandler}
            text="다시 투표하기"
          ></Vote>
        )}
      </Card>
    </>
  );
}

export default BalanceGameCard;
