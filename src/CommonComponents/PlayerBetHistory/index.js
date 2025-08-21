import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./PlayerBetHistory.scss";
import * as UserAction from "../../Actions/User";
import Dropdown from "react-bootstrap/Dropdown";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MainHeader from "../MainHeader";

const PlayerBetHistory = (props) => {
  return (
    <div>
      <div className="bet_history">
        <MainHeader name="Bet History" />
        <div className="bet_history_main">
          <div className="history_header">
            <div className="history_header_inner">
              <span className="header_inner_text">Date Time</span>
              <span className="header_inner_text">Game</span>
            </div>
            <div className="history_header_inner">
              <span className="header_inner_text1">Bet Type</span>
              <span className="header_inner_text1">Bet</span>
              <span className="header_inner_text1">Payout</span>
            </div>
          </div>

          <div className="bet_history_body">
            {[...Array(100)].map((e, i) => {
              return (
                <div className="history_body">
                  <div className="history_body_inner">
                    <span className="body_inner_text">Date Time</span>
                    <span className="body_inner_text">Game</span>
                  </div>
                  <div className="history_body_inner">
                    <span className="body_inner_text1">Bet Type</span>
                    <span className="body_inner_text1">Bet</span>
                    <span className="body_inner_text1">Payout</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBetHistory;
