import React from "react";
import "./FooterMenu.scss";
import "@fontsource/inter";
import { useNavigate } from "react-router-dom";

const FooterMenu = () => {
  const navigate = useNavigate();

  const redirect = (url) => {
    navigate(url);
  };
  return (
    <div className="footer_menu">
      <div className="sub_menu" onClick={() => redirect("/Agent")}>
        <img src="/img/home.svg" />
        <span className="sub_menu_text">Home</span>
      </div>
      <div className="sub_menu" onClick={() => redirect("/Agent/User")}>
        <img src="/img/profile.svg" />
        <span className="sub_menu_text">Player</span>
      </div>

      <div className="sub_menu" onClick={() => redirect("/Agent/User/Add")}>
        <img src="/img/add.svg" />
        <span className="sub_menu_text">Add Player</span>
      </div>
      {/* <div className="sub_menu" onClick={() => redirect("Message")}>
        <img src="/img/msg.svg" />
        <span className="sub_menu_text">Message</span>
      </div> */}

      <div className="sub_menu" onClick={() => redirect("/Agent/AgentTransaction")}>
        <img src="/img/repot.svg" />
        <span className="sub_menu_text">Transaction</span>
      </div>
    </div>
  );
};

export default FooterMenu;
