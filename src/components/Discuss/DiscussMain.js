import React from "react";
import DiscussAlert from './DiscussAlert';
import DiscussCard from "./DiscussCard";
import DiscussVote from "./DiscussVote";
import DiscussResult from "./DiscussResult";
import DiscussTalk from "./DiscussTalk";
import DiscussLoading from "./DiscussLoading";

function DiscussMain() {
  return (
    <>
     <DiscussLoading loading_type={"vote"} />
        <DiscussLoading loading_type={"match"} />
        <DiscussCard />
        <DiscussAlert />
        <DiscussVote />
        <DiscussResult />
        <DiscussTalk />
    </>
  );
}

export default DiscussMain;
