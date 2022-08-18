import React from "react";

function BalanceGameCenterAfter({ DUMMY_LISTS, leftTurnout, rightTurnout }) {
  return (
    <>
      <section className="balance-game-card__center">
        <section className="balance-game-card__result_choice">
          <div>{DUMMY_LISTS[0].choiceLeft}</div>
          <div>{DUMMY_LISTS[0].choiceRight}</div>
        </section>
        <section className="balance-game-card__result_bar">
          <div
            className="balance-game-card__bar_result"
            id="left-bar-result"
            style={{ width: leftTurnout + "%" }}
          ></div>
          <div
            className="balance-game-card__bar_result"
            id="right-bar-result"
            style={{ width: rightTurnout + "%" }}
          ></div>
        </section>
        <section className="balance-game__result_turnout">
          <div id="left-turnout">
            <span>{leftTurnout}</span>
            <span className="percentage">%</span>
          </div>
          <div id="right-turnout">
            <span>{rightTurnout}</span>
            <span className="percentage">%</span>
          </div>
        </section>
        <section className="balance-game__result_detail">
          {{ leftTurnout } > { rightTurnout } ? (
            <>{DUMMY_LISTS[0].leftwin}</>
          ) : (
            <>{DUMMY_LISTS[0].rightWin}</>
          )}
        </section>
      </section>
    </>
  );
}

export default BalanceGameCenterAfter;
