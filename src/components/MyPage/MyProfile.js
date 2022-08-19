import React from "react";
import {Link} from 'react-router-dom';
import "../../css/MyProfile.css"
import SubNavBar from "../../UI/SubNavBar";
import { useNavigate } from "react-router-dom";
import ProfilePic from "../../images/profilephoto.png";



function MyProfile () {
    const navigate = useNavigate();

    const DUMMY_LISTS = [
        {
            nickname: "소고기딱복국",
            id: "youjinv",
            email: "youjinv@g.skku.edu"
        },
    ];
    return(
        <>
        <SubNavBar
        onClick={()=>navigate("/")}
        text={"회원정보"}
        />
        <img className="mypic" src={ProfilePic} />
        <div className="my-info">
            <section className="info-detail">
                <div className="my-nickname">
                    <span className="my-info-title">닉네임</span>
                    <span className="my-info-content">{DUMMY_LISTS[0].nickname}</span>
                </div>
                <div className="my-id">
                    <span className="my-info-title">아이디</span>
                    <span className="my-info-content">{DUMMY_LISTS[0].id}</span>
                </div>
                <div className="my-email">
                    <span className="my-info-title">이메일</span>
                    <span className="my-info-content">{DUMMY_LISTS[0].email}</span>
                </div>
            </section>
            <section className="modifyBtn">
                <Link to="/mypage/modify" className="modifyTxt">회원정보 수정</Link>
            </section>
        </div>
        <div className="my-list1">
            <span className="my-list-title">내가 만든 질문</span>
            <span className="show-detail">자세히 보기</span>
        </div>
        <div className="my-list2">
            <span className="my-list-title">내가 참여한 질문</span>
            <span className="show-detail">자세히 보기</span>
        </div>
        <div className="my-list3">
            <span className="my-list-title">찜 목록</span>
            <span className="show-detail">자세히 보기</span>
        </div>

        </>
    )
};

export default MyProfile;