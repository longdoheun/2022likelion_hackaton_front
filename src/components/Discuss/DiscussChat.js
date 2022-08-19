import React, { useState, useEffect } from "react";
import "../../css/DiscussChat.css";
import IMAGE_IMG from "../../images/akar-icons_image.svg";
import VIDEO_IMG from "../../images/bi_camera-video-fill.svg";
import FILE_IMG from "../../images/akar-icons_file.svg";
import CROSS_IMG from "../../images/cross.svg";


export default function DiscussChat(props) {
  const { } = props;
  const [more, setMore] = useState(false);


  return(
    <>
      <div className="discuss-chat-con">
        <section className="discuss-chat-main flex-r">
          <input
            type="text"
            className="discuss-chat-input"
            placeholder="메시지를 입력하세요."
          />
          <div className="discuss-chat-send">전송</div>
        </section>
      </div>
    </>
  )
}
