import React, { useState } from "react";
import Vote from "./Vote";
import Heartbtn from "../../UI/HeartBtn";
import BalanceGameCard from "./BalanceGameCard";
import "../../css/BalanceGameList.css";

function BalanceGameList() {
  const [isLike, setLike] = useState(false);

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
      <Vote>투표하기</Vote>
    </>
  );
}

export default BalanceGameList;
