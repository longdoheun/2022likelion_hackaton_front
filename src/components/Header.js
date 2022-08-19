import React from "react";
import { Link, useNavigate } from "react-router-dom";

import MENU from "../images/menu.svg"
import USER from "../images/user.svg"

function Header(props) {
  const navigate = useNavigate();

  return (
    <>
      <section className="header">
        <div className="header-con flex-r">
          <img
            onClick={()=>navigate("/")}
            src={MENU}
            alt="menu.img"
            className="header-menu"
          />
          <img
            onClick={()=>navigate("/")}
            src={USER}
            alt="user.img"
            className="header-user"
          />
        </div>
      </section>
    </>
  );
}

export default Header;
