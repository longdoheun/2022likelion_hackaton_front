import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css"
import FooterLogo from "../images/footer-logo.png";


function Header(props) {
  return (
    <>
    <div className="footer-box">
      <div className="footer-content">
        <img className="footer-logo" src={FooterLogo} />

        <p className="footer-main-text">상호: 콜로세움  |  대표자: 고채원  |  주소: 서울특별시 종로구 명륜3가 53-21<br/>
        사업자등록번호: 000-00-0000  |  통신판매업신고번호: 제2022-서울종로-0000<br/>
        개인정보관리책임자: 강유진  |  전화번호: 000-0000-0000</p>
        <p className="footer-sub-text">이용약관 | 개인정보처리방침</p>
        <p className="footer-last-text">(c)콜로세움. All rights reserved.</p>
      </div>
    
    </div>
      
    </>
  );
}

export default Header;
