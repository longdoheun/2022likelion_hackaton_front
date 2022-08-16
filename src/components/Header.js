import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <Link to="/" className="header">
        <h1>메인으로 가기</h1>
      </Link>
    </>
  );
}

export default Header;
