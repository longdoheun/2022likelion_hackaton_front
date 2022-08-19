import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/BalanceGameList.css";
import axios from "axios";
import BalanceGameListCard from "./BalanceGameListCard";
import SubNavBar from "../../UI/SubNavBar";
import showList from "../../images/show-list.png";
import filterBtn from "../../images/issue-filter-btn.png";
import isFilteredBtn from "../../images/filter-btn.png";

function BalanceGameList(props) {
  const [isIssue, setIsIssue] = useState(true);
  // const [balanceGameData, setBalanceGameData] = useState([]);
  // useEffect(() => {
  //   axios.get(url).then(({ bgData }) => setBalanceGameData(bgData));
  // }, []);
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
  const navigate = useNavigate();
  const changeIssue = () => {
    setIsIssue(isIssue ? false : true);
  }
  const DUMMY_VOTER = [
    ["e1", "e3", "e6", "e8"],
    ["e2", "e4", "e5"],
  ];

  const totalVote = DUMMY_VOTER[0].length + DUMMY_VOTER[1].length;

  const [isClickList, setIsCLickList] = useState(false);

  const listClickHandler = () => {
    setIsCLickList(true);
  };

  return (
    <>
      <SubNavBar onClick={() => navigate("/")} text={"밸런스 게임"} />
      <section className="balance-game-list_upper">
        <div className="balance-game__order_list">
          <div onClick={listClickHandler}>
            <span className="balance-game__vote_list_text">투표자 많은 순</span>
            <img src={showList} alt="showList" />
          </div>
          <div className="balance-game__select_list">
            <div className="balance-game__select_list_element" id="LOVE_NUM">찜 많은 순</div>
            <div className="balance-game__select_list_element" id="RECENT_NUM">최신순</div>
          </div>
        </div>
        <div className="balance-game__list_filter">
          <div className="toggle-btn-cover" onClick={changeIssue}>
            <div className="toggle-btn" id={!isIssue&&"toggle-on"}></div>
          </div>
          {/* <div className="balance-game__list_filter_img">
            <div><img id="isfilter_btn" src={isFilteredBtn} alt="isFilteredBtn" /></div>
            <div><img id="filter-btn" src={filterBtn} alt="filterBtn" /></div>
          </div> */}
          <div className="balance-game__list_filter">시사 이슈 게시물 보기</div>
        </div>
      </section>

      {/* {balanceGameData.map((list, index) => ( )*/}
      <BalanceGameListCard
        DUMMY_LISTS={DUMMY_LISTS}
        totalVote={totalVote}
      ></BalanceGameListCard>
      <BalanceGameListCard
        DUMMY_LISTS={DUMMY_LISTS}
        totalVote={totalVote}
      ></BalanceGameListCard>
      <BalanceGameListCard
        DUMMY_LISTS={DUMMY_LISTS}
        totalVote={totalVote}
      ></BalanceGameListCard>
    </>
  );
}

export default BalanceGameList;
