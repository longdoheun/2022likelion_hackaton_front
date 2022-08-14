import React from "react";
import Card from "../../UI/Card";
import Vote from "./Vote";
import "../../css/BalanceGame.css";
import Heartbtn from "../../UI/HeartBtn";

function BalanceGame() {
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

  return (
    <>
      <Card className="balance-game">
        <Heartbtn className="balance-game__heart" />
        <section className="balance-game__upper">
          <h5 className="balance-game__tag"></h5>
        </section>

        <h1 className="balance-game__context"></h1>

        <section className="balance-game__center">
          <div className="balance-game__bar" id="left-bar"></div>
          <div className="balance-game__bar" id="right-bar"></div>
        </section>
      </Card>
      <Vote />
    </>
  );
}

export default BalanceGame;
