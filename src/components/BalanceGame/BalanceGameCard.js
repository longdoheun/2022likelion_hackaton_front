import React from "react";
import Card from "../../UI/Card";
import "../../css/BalanceGameCard.css";

function BalanceGameCard(props) {
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

  const classes = "balance-game-card " + props.className;

  const leftClickHandler = () => {};

  const rightClickHandler = () => {};

  return (
    <>
      <Card className={classes}>
        <>{props.children}</>
        <section className="balance-game-card__upper">
          <h5 className="balance-game-card__tag_user">
            질문자:{DUMMY_LISTS[0].user}
          </h5>
        </section>
        <h1 className="balance-game-card__context">{DUMMY_LISTS[0].title}</h1>
        <section className="balance-game-card__center">
          <div
            className="balance-game-card__bar"
            id="left-bar"
            onClick={leftClickHandler}
          >
            {DUMMY_LISTS[0].choiceLeft}
          </div>
          <div className="balance-game-card__vs">VS</div>
          <div
            className="balance-game-card__bar"
            id="right-bar"
            onClick={rightClickHandler}
          >
            {DUMMY_LISTS[0].choiceRight}
          </div>
        </section>
      </Card>
    </>
  );
}

export default BalanceGameCard;
