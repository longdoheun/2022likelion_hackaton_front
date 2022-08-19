import React, {useState} from 'react';
import '../css/Modal.css';
import modalprofile from '../images/profile-sample1.png'
import modalClose from '../images/modal-close.png'

const Modal = (props) => {
  const [login, setLogin] = useState(false);
  const username="강유진"
  const useremail="youjin@g.skku.edu"
  const onLogin=()=>{
    setLogin((current)=>!current)
};

  // 실제 값 받아올 것
  const { open, close} = props;

  const Signup=()=>(
    <button>회원가입</button>
)

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <section className="modal-userbox">
          <img className="modal-close" onClick={close} src={modalClose}></img>
            <div className="modal-profile">
            <img className="modal-profile-img" src={modalprofile}></img>
            <div className="modal-profile-text">
            <p className="modal-username" >{login?username:"로그인이 필요합니다."}</p>
            <p
        onClick={onLogin}
        className="modal-useremail">
            {login?useremail:"로그인하기"}
            {/* 확인을 위해 작성. 수정할 것 */}
        </p>
            </div>
            
            </div>
          </section>
        </section>
      ) : null}
    </div>
  );
};
export default Modal;