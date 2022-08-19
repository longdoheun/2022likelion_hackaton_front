import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import "../../css/BalanceGameCard.css";
import HeartBtn from "../../UI/HeartBtn";
import BalanceGameCenterBefore from "./BalanceGameCenterBefore";
import Vote from "./Vote";
import axios from "axios";
import BalanceGameCard from "./BalanceGameCard";
import { Link } from "react-router-dom";
import BalanceGameListCard from './BalanceGameListCard';
import SubNavBar from "../../UI/SubNavBar";

const DUMMY_LISTS = [
  {
    id: "id1",
    user: "소고기딱복국",
    tag: ["음식, 고전"],
    title: "탕수육 먹을 때",
    choiceLeft: "부먹",
    choiceRight: "찍먹",
    leftWin: "근본 조리법을 따르자",
    rightWin: "눅눅 탕수육 OUT",
  },
  {
    id: "id2",
    user: "꿈은없고요그냥놀고싶습니다",
    tag: ["음식, 고전"],
    title: "복숭아 먹을 때",
    choiceLeft: "물복",
    choiceRight: "딱복",
    leftWin: "소고기딱복국이나 끓여드세요",
    rightWin: "바닥이랑 옷에 줄줄 흘리면서 드세요",
  },
];


function BalanceGameList(props) {
  // const [balanceGameData, setBalanceGameData] = useState([]);
  // useEffect(() => {
  //   axios.get(url).then(({ bgData }) => setBalanceGameData(bgData));
  // }, []);
  const navigate = useNavigate();
  

  const DUMMY_VOTER = [
    ["e1", "e3", "e6", "e8"],
    ["e2", "e4", "e5"],
  ];

  const totalVote = DUMMY_VOTER[0].length + DUMMY_VOTER[1].length;

  
  {
    /* DUMMY_LISTS[0].title => list.title*/
  }

  return (<>
      <SubNavBar
        onClick={()=>navigate("/")}
        text={"밸런스 게임"}
      />
   {/* {balanceGameData.map((list, index) => ( )*/}
    <BalanceGameListCard DUMMY_LISTS={DUMMY_LISTS} totalVote={totalVote}></BalanceGameListCard>
  </>  )

}

export default BalanceGameList;
