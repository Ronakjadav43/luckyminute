import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";

import Header from "../../../CommonComponents/Header";
import * as UserAction from "../../../Actions/User";

import "./Home.scss";
import FooterManager from "../../../CommonComponents/FooterManager";

import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const ManagerDashboard = (props) => {
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
      <Header name={"Home"} />
      <div className="agent_body">
        <div className="row_details">
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
              <span className="btn_text">Manager Balance</span>
              <span className="btn_text">{amount}</span>
            </div>
            <div className="details_box_btn">
              <span className="btn_text">Agents Balance</span>
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
              <DescriptionOutlinedIcon />
              <span className="btn_text1">Report</span>
            </div>
            <div className="details_box_btn border_1" onClick={() => redirect("Setting")}>
              <SettingsOutlinedIcon />
              <span className="btn_text1">Setting</span>
            </div>
          </div>
        </div>
      </div>
      <FooterManager />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(ManagerDashboard);
