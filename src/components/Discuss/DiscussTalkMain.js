import { useContext, useEffect, useCallback, useState } from 'react';
import { useNavigate, useLocation, UNSAFE_NavigationContext as NavigationContext,  } from 'react-router-dom';
import queryString from 'query-string';
import usePrompt from './blocker'
import SubNavBar from "../../UI/SubNavBar";

//components
import DiscussTalk from "./DiscussTalk";
import DiscussAlert from "./DiscussAlert";

export default function DiscussTalkMain(props) {
  const { } = props;
  const navigate = useNavigate();

  const [isAlert, setIsAlert] = useState(true);
  const [timeLimit, setTimeLimit] = useState(5000);
  
  const location = useLocation();
  const { content } = queryString.parse(location.search);

  useEffect(() => {
    if (timeLimit != 0) {
      //제한시간 예시
      setTimeout(() => {
        setTimeLimit(timeLimit - 1);
      }, 1);
    }
    else if (timeLimit === 0) {
      navigate(`/discussion/vote/${location.search}`);
    };
  });

  usePrompt('지금 나가시면 패배입니다. 진짜로 나가시겠습니까?', timeLimit !== 0);
  return (
    <>
      <SubNavBar
        onClick={()=>navigate("/discussion")}
        text={content}
      />
      <div>{ timeLimit }</div>
      {isAlert && <DiscussAlert
        setIsAlert={setIsAlert}
      ></DiscussAlert>}
      <DiscussTalk></DiscussTalk>
    </>
  )
}