import React from "react";
import { Link } from "react-router-dom";
import '../css/BalanceGameCreateBtn.css';
import MainBalanceGameCreateBtnIcon from "../images/main-balancegame-create-btn-icon.png"

function BalanceGameCreateBtn() {
  return (
    <>
      <Link to="/balancegame"> 
      {/* 임시임. 질문 만들기로 연결할 것 */}
        <button className="main-balancegame-create-btn-box">
          <div className="main-balancegame-create-btn-text">
            <h3 className="main-balancegame-create-btn-name">질문 만들기</h3>
            <p className="main-balancegame-create-btn-detail">나만의 밸런스 게임과 1:1토론을 만들어보세요</p>
          </div>
          <img className="main-balancegame-create-btn-icon" src={MainBalanceGameCreateBtnIcon} />
        </button>
      </Link>
    </>
  );
}

export default BalanceGameCreateBtn;
