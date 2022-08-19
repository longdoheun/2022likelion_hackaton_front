import React from "react";
import { useNavigate } from "react-router-dom";
import SubNavBar from "../../UI/SubNavBar";
import DiscussCard from "./DiscussCard";
import DiscussLoading from "./DiscussLoading";

function DiscussMain(props) {
  const navigate = useNavigate();
  return (
    <>
      <SubNavBar
        onClick={()=>navigate("/")}
        text={"자유 토론"}
      />
      <DiscussCard />
      {/* <DiscussLoading loading_type={"vote"} /> */}
      {/* <DiscussLoading loading_type={"match"} /> */}
    </>
  );
}

export default DiscussMain;
