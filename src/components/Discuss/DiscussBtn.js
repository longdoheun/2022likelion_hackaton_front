import React from "react";
import { Link } from "react-router-dom";
import '../../css/DiscussBtn.css';
import MainDiscussBtnIcon from "../../images/main-discuss-btn-icon.png";

function DiscussBtn() {
  return (
    <>
      <Link to="/discuss">
        <button className="main-discuss-btn-box">
          <div className="main-discuss-btn-text">
            <h3 className="main-discuss-btn-name">1:1 토론</h3>
            <p className="main-discuss-btn-detail">하나의 주제로 단 한명과 논리적으로 싸워보세요</p>
          </div>
          <img className="main-discuss-btn-icon" src={MainDiscussBtnIcon} />
        </button>
      </Link>
    </>
  );
}

export default DiscussBtn;