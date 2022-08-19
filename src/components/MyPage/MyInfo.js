import React from "react";

function MyInfo () {
    const DUMMY_LISTS = [
        {
            nickname: "소고기딱복국",
            id: "youjinv",
            email: "youjinv@g.skku.edu"
        },
    ];
    return(
        <>
        <div className="my-info">
            <div className="my-nickname">
                <span>닉네임</span>
                <span>{DUMMY_LISTS[0].nickname}</span>
            </div>
            <div className="my_id">
                <span>아이디</span>
                <span>{DUMMY_LISTS[0].id}</span>
            </div>
            <div className="my_email">
                <span>닉네임</span>
                <span>{DUMMY_LISTS[0].email}</span>
            </div>
            <Link to="/mypage/modify">
            <ModifyBtn className = "modify-btn" type="submit" value="회원정보 수정" />
            </Link>
        </div>
        </>
    )
};

export default MyInfo;