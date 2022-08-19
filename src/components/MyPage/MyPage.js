import React from "react";
import MyProfile from "./MyProfile.js";
import MyList from "./MyList";

function MyPage() {
    return (
        <>
        <MyProfile />
        <MyList title="내가 만든 질문" />
        <MyList title="내가 참여한 질문" />
        </>
    );
}

export default MyPage;