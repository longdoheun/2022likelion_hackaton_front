import React from "react";
import { Link } from "react-router-dom";
import BalanceGameBtn from "./BalanceGame/BalanceGameBtn";
import DiscussBtn from "./Discuss/DiscussBtn";
import '../css/Main.css'
import MyInfo from "./MyPage/MyProfile.js";
import MyProfile from "./MyPage/MyProfile.js";

function Main() {
  return (
    <>
      <div className="main">
        <Link to="/balancegame">
          <BalanceGameBtn />
        </Link>
        <Link to="/discussion">
          <DiscussBtn />
        </Link>
        <Link to="/mypage">
          <MyProfile />
        </Link>
      </div>
    </>
  );
}


export default Main;
