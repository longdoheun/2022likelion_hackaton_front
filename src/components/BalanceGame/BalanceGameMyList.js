import React, { useState } from "react";
import Vote from "./Vote";
import Heartbtn from "../../UI/HeartBtn";
import BalanceGameCard from "./BalanceGameCard";
import "../../css/BalanceGameList.css";

function BalanceGameMyList() {
  const [isLike, setLike] = useState(true);

  const likeToggleHandler = () => {
    setLike((isLike) => !isLike);
  };

  return (
    <>
      <BalanceGameCard className="balance-game-list">
        <Heartbtn
          className="balance-game-list__heart"
          isLike={isLike}
          onclick={likeToggleHandler}
        />
      </BalanceGameCard>
      <Vote>자세히 보기</Vote>
    </>
  );
}

export default BalanceGameMyList;
