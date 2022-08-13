import { useState } from "react"

export default function BalanceGame(){
  return(
    <>
    <div className="BalanceGame">
      <section className="BG-upper">
        <h5 className="BG-tag">#음식 #고전</h5>
        <img className="BG-heart"src="#"></img>
      </section>
      <h1 className="BG-context">탕수육 먹을 때,</h1>
      <section className="BG-center">
        <div className="BG-bar" id="left-bar">부먹</div>
        <img className="BG-versus" src="#"></img>
        <div className="BG-bar" id="right-bar">
          <span>찍먹</span>
        </div>
      </section>
      <section className="vote-btn">
        투표하기
      </section>
    </div>
    </>
  )
}
