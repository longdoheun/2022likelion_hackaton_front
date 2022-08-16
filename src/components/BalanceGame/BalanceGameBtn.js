import React from "react";
import { Link } from "react-router-dom";

function BalanceGameBtn() {
  return (
    <>
      <Link to="/balancegame">
        <button>BalanceGame</button>
      </Link>
    </>
  );
}

export default BalanceGameBtn;
