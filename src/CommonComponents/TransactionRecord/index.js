import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TransactionRecord.scss";
import * as UserAction from "../../Actions/User";
import Dropdown from "react-bootstrap/Dropdown";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MainHeader from "../MainHeader";

const TransactionRecord = (props) => {
  return (
    <div>
      <div className="transaction_record">
        <MainHeader name="Transaction Record" />
        <div className="bet_history_main">
          <div className="history_header">
            <div className="history_header_inner">
              <span className="header_inner_text">Date</span>
              <span className="header_inner_text">Time</span>
              <span className="header_inner_text">Type</span>
              <span className="header_inner_text">Amount</span>
            </div>
          </div>

          <div className="bet_history_body">
            {[...Array(100)].map((e, i) => {
              return (
                <div className="history_body">
                  <div className="history_body_inner">
                    <span className="body_inner_text">21/2/2023</span>
                    <span className="body_inner_text">22:12 </span>
                    <span className="body_inner_text">Deposited</span>
                    <span className="body_inner_text">+12345678</span>
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

export default TransactionRecord;
