import React from "react";

import BalanceGameCard from "./BalanceGameCard";
import BalanceGameMyList from "./BalanceGameMyList";
import Comments from "./Comments";
import BalanceGameList from "./BalanceGameList";

function BalanceGameMain() {
  return (
    <>
      <BalanceGameList />
      <BalanceGameCard />
      <BalanceGameMyList />
      <Comments />
    </>
  );
}

export default BalanceGameMain;
