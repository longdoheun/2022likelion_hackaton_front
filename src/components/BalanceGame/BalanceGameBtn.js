import React from "react";
import { Link } from "react-router-dom";
import '../../css/BalanceGameBtn.css';
import MainBalanceGameBtnIcon from "../../images/main-balancegame-btn-icon.png";

function BalanceGameBtn() {
  return (
    <>
      <Link to="/balancegame">
        <button className="main-balancegame-btn-box">
          <div className="main-balancegame-btn-text">
            <h3 className="main-balancegame-btn-name">밸런스 게임</h3>
            <p className="main-balancegame-btn-detail">둘 중에 하나만 선택하세요</p>
          </div>
          <img className="main-balancegame-btn-icon" src={MainBalanceGameBtnIcon} />
        </button>
      </Link>
    </>
  );
}

export default BalanceGameBtn;

