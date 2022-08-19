import React from "react";
import { Link } from "react-router-dom";
import BalanceGameCreateBtn from "./BalanceGameCreateBtn";
import BalanceGameBtn from "./BalanceGame/BalanceGameBtn";
import DiscussBtn from "./Discuss/DiscussBtn";
import MainSearchIcon from "../images/main-search-icon.png";
import '../css/Main.css'
import MyInfo from "./MyPage/MyProfile.js";
import MyProfile from "./MyPage/MyProfile.js";
import "../css/Footer.css";
import Footer from "./Footer";


function Main() {
  return (
    <>
    
      <div className="main">
        <div className="main-search-box">
          <input className="main-search-input" type="text" placeholder="키워드를 입력하세요."></input>
          <img className="main-search-icon" src={MainSearchIcon} />

        </div>
        
        <Link to="/balancegame-create">
          <BalanceGameCreateBtn />
        </Link>
        <span className="main-bord-buttons">
          <Link to="/balancegame">
            <BalanceGameBtn />
          </Link>
          <Link to="/discussion">
            <DiscussBtn />
          </Link>
        </span>
        
        
      </div>
      <Footer/>
    </>
  );
}


export default Main;
