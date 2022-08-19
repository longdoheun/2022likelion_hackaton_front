import React from "react";
import { Link } from "react-router-dom";
import BalanceGameBtn from "./BalanceGame/BalanceGameBtn";
import DiscussBtn from "./Discuss/DiscussBtn";
import '../css/Main.css'
import MyInfo from "./MyPage/MYInfo";

function Main() {
  return (
    <>
      <div className="main">
        <Link to="/balancegame">
          <BalanceGameBtn />
        </Link>
        <Link to="/discuss">
          <DiscussBtn />
        </Link>
        <Link to="/mypage">
          <MyInfo />
        </Link>
      </div>
    </>
  );
}


export default Main;
