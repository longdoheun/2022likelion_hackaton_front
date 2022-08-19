import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MENU from "../images/menu.svg"
import USER from "../images/user.svg"
import Modal from '../components/Modal';

function Header(props) {

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section className="header">
        <div className="header-con flex-r">
          <img
            onClick={openModal}
            src={MENU}
            alt="menu.img"
            className="header-menu"
          />
          <Modal open={modalOpen} close={closeModal}></Modal>
          <img
            onClick={()=>navigate("/mypage")}
            src={USER}
            alt="user.img"
            className="header-user"
          />
        </div>
      </section>
    </>
  );
}

export default Header;
