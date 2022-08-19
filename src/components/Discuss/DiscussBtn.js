import React from "react";
import { Link } from "react-router-dom";

function DiscussBtn() {
  return (
    <>
      <Link to="/discussion">
        <button>Discuss</button>
      </Link>
    </>
  );
}

export default DiscussBtn;
