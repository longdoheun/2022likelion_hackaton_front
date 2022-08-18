import React from "react";
import SubNavBar from "../../UI/SubNavBar";
import DiscussAlert from './DiscussAlert';
import DiscussCard from "./DiscussCard";
import DiscussLoading from "./DiscussLoading";

function DiscussMain() {
  return (
    <>
      <SubNavBar/>
      <DiscussCard />
      <DiscussLoading loading_type={"vote"} />
      <DiscussLoading loading_type={"match"} />
    </>
  );
}

export default DiscussMain;
