import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import "./MainHeader.scss";
import * as UserAction from "../../Actions/User";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";

const MainHeader = (props) => {
  const navigate = useNavigate();

  const gameReducer = useSelector((state) => ({
    token: state.gameReducer.token,
  }));

  const redirect = (url) => {
    navigate(url);
  };

  const logout = () => {
    props.actions.userAction.logout();
  };

  useEffect(() => {
    if (gameReducer.token == null) {
      navigate("/Login");
    } else {
      props.actions.userAction.getUserDetails();
    }
  }, [gameReducer.token]);

  return (
    <div className="main_header">
      <i
        className="fa-solid fa-angle-left back_btn"
        onClick={() => (window.location.href = "/")}
      ></i>
      <span className="user_name">{props.name}</span>
      <Dropdown className="main_menu">
        <Dropdown.Toggle id="dropdown-basic">
          <i className="fa-solid fa-ellipsis-vertical game_info"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => redirect("/DisplayName")}>
            Display Name
          </Dropdown.Item>
          <Dropdown.Item>Agent Information</Dropdown.Item>
          <Dropdown.Item onClick={() => redirect("/TransactionRecord")}>
            Transaction
          </Dropdown.Item>
          <Dropdown.Item onClick={() => redirect("/BetHistory")}>
            Bet History
          </Dropdown.Item>
          <Dropdown.Item onClick={() => redirect("/ResetPassword")}>
            Change Password
          </Dropdown.Item>
          <Dropdown.Item onClick={() => redirect("/Languages")}>
            Language
          </Dropdown.Item>
          <Dropdown.Item onClick={() => redirect("/SoundVibrate")}>
            Sound & Vibrate
          </Dropdown.Item>
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(MainHeader);
