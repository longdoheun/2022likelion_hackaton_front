import React from "react";
import MyInfo from "./MyInfo";
import MyList from "./MyList";

function MyPage() {
    return (
        <>
        <MyInfo />
        <MyList title="내가 만든 질문" />
        <MyList title="내가 참여한 질문" />
        </>
    );
}

export default MyPage;