import React from "react";
import "./FooterMenu.scss";
import "@fontsource/inter";
import { useNavigate } from "react-router-dom";

const FooterManager = () => {
  const navigate = useNavigate();

  const redirect = (url) => {
    navigate(url);
  };
  return (
    <div className="footer_menu">
       <div className="sub_menu" onClick={() => redirect("/Manager")}>
        <img src="/img/home.svg" />
        <span className="sub_menu_text">Home</span>
      </div>
      <div className="sub_menu" onClick={() => redirect("/Manager/User")}>
        <img src="/img/profile.svg" />
        <span className="sub_menu_text">Agent</span>
      </div>

      <div className="sub_menu" onClick={() => redirect("/Manager/User/Add")}>
        <img src="/img/add.svg" />
        <span className="sub_menu_text">Add Agent</span>
      </div>

     

      {/* <div className="sub_menu" onClick={() => redirect("Message")}>
        <img src="/img/msg.svg" />
        <span className="sub_menu_text">Message</span>
      </div> */}

      <div className="sub_menu" onClick={() => redirect("/Manager/ManagerTransaction")}>
        <img src="/img/repot.svg" />
        <span className="sub_menu_text">Transaction</span>
      </div>
    </div>
  );
};

export default FooterManager;
