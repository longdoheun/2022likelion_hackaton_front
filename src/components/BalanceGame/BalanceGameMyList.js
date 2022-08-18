import React, { useState } from "react";
import Card from "../../UI/Card";
import "../../css/BalanceGameCard.css";
import HeartBtn from "../../UI/HeartBtn";
import BalanceGameCenterBefore from "./BalanceGameCenterBefore";
import Vote from "./Vote";

function BalanceGameMyList(props) {
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

  const [isLike, setLike] = useState(true);
  const likeToggleHandler = () => {
    setLike((isLike) => !isLike);
  };

  const classes = "balance-game-card " + props.className;

  const preventEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
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

        <BalanceGameCenterBefore
          DUMMY_LISTS={DUMMY_LISTS}
          onclick={preventEventHandler}
        />

        <div className="balance-game__vote_num">투표자 수 : 0명</div>
        <Vote className="balance-game__revote" text="자세히 보기"></Vote>
      </Card>
    </>
  );
}

export default BalanceGameMyList;
