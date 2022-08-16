import React from "react";
import { Link } from "react-router-dom";

function DiscussBtn() {
  return (
    <>
      <Link to="/discuss">
        <button>Discuss</button>
      </Link>
    </>
  );
}

export default DiscussBtn;
