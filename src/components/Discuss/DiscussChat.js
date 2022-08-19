import React, { useState, useEffect } from "react";
import "../../css/DiscussChat.css";
import IMAGE_IMG from "../../images/akar-icons_image.svg";
import VIDEO_IMG from "../../images/bi_camera-video-fill.svg";
import FILE_IMG from "../../images/akar-icons_file.svg";
import CROSS_IMG from "../../images/cross.svg";


export default function DiscussChat(props) {
  const { } = props;
  const [more, setMore] = useState(false);
  const [cross, setCross] = useState()

  const toggle = () => {
    const check = more ? false : true;
    setMore(check);
  }

  return(
    <>
      <div className="discuss-chat-con">
        <section className="discuss-chat-main flex-r">
          <img
            src={CROSS_IMG}
            alt="CROSS_IMG"
            className={`discuss-chat-cross-btn ${more}`}
            onClick={toggle}
          /> 
          <input
            type="text"
            className="discuss-chat-input"
            placeholder="메시지를 입력하세요."
          />
          <div className="discuss-chat-send">전송</div>
        </section>
        {more&&<section className="discuss-chat-more flex-r">
          <div className="chat-more-img flex-c">
            <img src={IMAGE_IMG} alt="IMAGE_IMG" className="discuss-chat-more-img" />
            <h5 className="discuss-chat-img-text">이미지</h5>
          </div>
          <div className="chat-more-img flex-c">
            <img src={VIDEO_IMG} alt="VIDEO_IMG" className="discuss-chat-more-video" />
            <h5 className="discuss-chat-img-text">동영상</h5>
          </div>
          <div className="chat-more-file flex-c">
            <img src={FILE_IMG} alt="FILE_IMG" className="discuss-chat-more-file" />
            <h5 className="discuss-chat-img-text">파일</h5>
          </div>
        </section>}
      </div>
    </>
  )
}
