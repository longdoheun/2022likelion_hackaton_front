import React from "react";
import { Link } from "react-router-dom";
import BalanceGameBtn from "./BalanceGame/BalanceGameBtn";
import DiscussBtn from "./Discuss/DiscussBtn";
import '../css/Main.css'

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
      </div>
    </>
  );
}


export default Main;
