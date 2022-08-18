import React from "react";
import DiscussAlert from './DiscussAlert';
import DiscussCard from "./DiscussCard";
import DiscussLoading from "./DiscussLoading";

function DiscussMain() {
  return (
    <>
      <DiscussCard />
      <DiscussLoading loading_type={"vote"} />
      <DiscussLoading loading_type={"match"} />
    </>
  );
}

export default DiscussMain;
