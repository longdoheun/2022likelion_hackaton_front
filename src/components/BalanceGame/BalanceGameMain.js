import React from "react";

import BalanceGameCard from "./BalanceGameCard";
import BalanceGameList from "./BalanceGameList";
import BalanceGameMyList from "./BalanceGameMyList";
import Comments from "./Comments";

function BalanceGameMain() {
  return (
    <>
      <BalanceGameCard className="Heart" />
      <BalanceGameList />
      <BalanceGameMyList />
      <Comments />
    </>
  );
}

export default BalanceGameMain;
