import React, { useState } from "react";

function BalanceGameCenterBefore({
  leftClickHandler,
  rightClickHandler,
  DUMMY_LISTS,
}) {
  return (
    <>
      <section className="balance-game-card__center">
        <section className="balance-game-card__main_bar">
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
        <section className="balance-game-card__detail_bar">
          <div className="balance-game-card__detail" id="left-bar-detail">
            {DUMMY_LISTS[0].leftWin}
          </div>
          <div className="balance-game-card__detail" id="right-bar-detail">
            {DUMMY_LISTS[0].rightWin}
          </div>
        </section>
      </section>
    </>
  );
}

export default BalanceGameCenterBefore;
