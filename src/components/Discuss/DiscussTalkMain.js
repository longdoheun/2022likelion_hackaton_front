import { useContext, useEffect, useCallback, useState } from 'react';
import { useNavigate, useLocation, UNSAFE_NavigationContext as NavigationContext,  } from 'react-router-dom';
import queryString from 'query-string';
import usePrompt from './blocker'
import SubNavBar from "../../UI/SubNavBar";

//components
import DiscussTalk from "./DiscussTalk";
import DiscussAlert from "./DiscussAlert";
import DiscussChat from './DiscussChat';

export default function DiscussTalkMain(props) {
  const { } = props;
  const navigate = useNavigate();

  const location = useLocation();
  const { content, opinion, type } = queryString.parse(location.search);

  return (
    <>
      <SubNavBar
        onClick={() => navigate(-1)}
        text={content}
      />
      {/* {isAlert && <DiscussAlert
        setIsAlert={setIsAlert}
      ></DiscussAlert>} */}
      <DiscussTalk
        opinion={opinion}
      ></DiscussTalk>
      {type==="join"&&<DiscussChat></DiscussChat>}
    </>
  )
}