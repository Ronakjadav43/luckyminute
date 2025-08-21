import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <i
        className="fa-solid fa-angle-left back_btn"
        onClick={() => navigate("/")}
      ></i>
      <span className="user_name">{props.name}</span>
      <i className="fa-solid fa-circle-info game_info"></i>
    </div>
  );
};

export default Header;
