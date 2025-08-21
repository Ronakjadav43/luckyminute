import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Header from "../../../CommonComponents/Header";
import * as UserAction from "../../../Actions/User";
import ReplayIcon from "@material-ui/icons/Replay";
import Dropdown from "react-bootstrap/Dropdown";

import "./Home.scss";
import FooterMenu from "../../../CommonComponents/FooterMenu";

const AgentDashboard = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [amount, setAmount] = useState(0);

  const gameReducer = useSelector((state) => ({
    userDetail: state.gameReducer.userDetail,
    balance: state.gameReducer.balance,
  }));

  const redirect = (url) => {
    navigate(url);
  };

  useEffect(() => {
    if (gameReducer.userDetail) {
      setName(gameReducer.userDetail.name);
      setDisplayName(gameReducer.userDetail.displayName);
    }
  }, [gameReducer.userDetail]);

  useEffect(() => {
    if (gameReducer.balance) {
      setAmount(gameReducer.balance);
    }
  }, [gameReducer.balance]);

  return (
    <div className="agent_layout agent_home">
      {/* <Header name={"Home"} /> */}
      <div className="start_header">
        <img className="back_btn" src="/img/Logo.svg" />
        <span className="user_name">{name}</span>

        <Dropdown className="main_menu">
          <Dropdown.Toggle id="dropdown-basic">
            <i className="fa-solid fa-ellipsis-vertical game_info"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => redirect("DisplayName")}>
              Report
            </Dropdown.Item>

            <Dropdown.Item onClick={() => redirect("TransactionRecord")}>
              Agent Information
            </Dropdown.Item>

            <Dropdown.Item onClick={() => redirect("ResetPassword")}>
              Language
            </Dropdown.Item>
            <Dropdown.Item>Change Password</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="agent_body">
        {/* <div className="row_details">
          <div className="row_details_inner">
            <span className="row_details_text">Display Name</span>
            <span className="row_details_text">{displayName}</span>
          </div>
          <div className="row_details_inner">
            <span className="row_details_text">User Name</span>
            <span className="row_details_text">{name}</span>
          </div>
        </div>

        <div className="game_details_box">
          <div className="game_details_box_inner">
            <div className="details_box_btn">
              <span className="btn_text">Agent Balance</span>
              <span className="btn_text">{amount}</span>
            </div>
            <div className="details_box_btn">
              <span className="btn_text">Players Balance</span>
              <span className="btn_text">???</span>
            </div>
          </div>

          <div className="game_details_box_inner">
            <div className="details_box_btn">
              <span className="btn_text">Current Game</span>
              <span className="btn_text">???</span>
            </div>
            <div className="details_box_btn">
              <span className="btn_text">Time Left</span>
              <span className="btn_text">??</span>
            </div>
          </div>
        </div>
        <div className="game_details_box mt_15">
          <div className="game_details_box_inner">
            <div className="details_box_btn border_1" onClick={() => redirect("Message")}>
              <ChatOutlinedIcon />
              <span className="btn_text1">Message</span>
            </div>
            <div className="w-50"></div>
          </div>
          <div className="game_details_box_inner">
            <div className="details_box_btn border_1" onClick={() => redirect("Report")}>
              <DescriptionOutlinedIcon/>
              <span className="btn_text1">Report</span>
            </div>
            <div className="details_box_btn border_1" onClick={() => redirect("Setting")}>
              <SettingsOutlinedIcon/>
              <span className="btn_text1">Setting</span>
            </div>
          </div>
        </div> */}

        <div className="slider_box2">
          <span className="slider_box2_header">
            Lucky <span>Minute</span> 幸运<span>1分</span>
          </span>
          <span className="Operator_Name_text">Operator_Name</span>

          <div className="user_names">
            <span>Display Name</span>
            <span>player_displayname</span>
          </div>
        </div>
        <div className="user_info">
          <div className="user_balance">
            <span className="balance_text">Balance</span>
            <span className="balance_text">{amount}</span>
          </div>
          <div className="user_info_inner">
            <div className="user_detail">
              <span className="detail_text">17/12/2022</span>
              <span className="detail_text">22:30 </span>
            </div>
            <div className="user_detail">
              <span className="detail_text">Deposited</span>
              <span className="detail_text">+2000 </span>
            </div>
          </div>
          <div className="reload_icon_icon">
            <ReplayIcon />
          </div>
        </div>
        <div className="slider_box2">
          <span className="Operator_Name_text">Message</span>
          <div className="user_names">
            <span className="wight_color">0 new messages</span>
          </div>
          <div className="messages_main">
            {[...Array(3)].map((e, i) => {
              return (
                <div className="messages">
                  <div className="messages_inner">
                    <span>Agent</span>
                    <span>21/2/23 22:12 </span>
                  </div>
                  <div className="messages_inner1">
                    <span className="message_text">
                      My new contact is 123456
                    </span>
                    <span className="bag">90</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(AgentDashboard);
