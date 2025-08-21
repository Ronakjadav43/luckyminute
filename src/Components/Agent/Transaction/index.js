/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import FooterMenu from "../../../CommonComponents/FooterMenu";
import Header from "../../../CommonComponents/Header";
import * as UserAction from "../../../Actions/User";
import "./Transaction.scss";
const moment = require("moment-timezone");
const _ = require("lodash");

const AgentTransaction = (props) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const gameReducer = useSelector((state) => ({
    userDetail: state.gameReducer.userDetail,
    creditTransactions: state.gameReducer.creditTransactions,
  }));

  useEffect(() => {
    if (gameReducer.userDetail) {
      props.actions.userAction.getUserTransactions();
      setName(gameReducer.userDetail.name);
    }
  }, [gameReducer.userDetail]);

  useEffect(() => {
    let transactions = [];
    if (gameReducer.creditTransactions) {
      transactions = gameReducer.creditTransactions.map((user) => ({
        ...user,
        created: moment(user.created).format("DD-MM-YYYY"),
      }));
    }
    if (transactions) {
      let groupDate = _.chain(transactions)
        .groupBy("created")
        .map((value, key) => ({ created: key, transactions: value }))
        .value();

      setUsers(groupDate);
    }
  }, [gameReducer.creditTransactions]);

  return (
    <div className="agent_layout">
      <Header name={"Agent Transaction"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Agent</span>
          <span className="sub_header_text">{name}</span>
        </div>

        <div className="transaction_table">
          <div className="table_header">
            <span className="table_header_text">ID</span>
            <span className="table_header_text">Account</span>
            <span className="table_header_text">Amount</span>
            <span className="table_header_text">Balance</span>
          </div>
          <div className="table_body_main">
            {users.map((singlegroup, id) => (
              <div className="table_body_inner" key={id}>
                <span className="date_text">{singlegroup.created}</span>
                <div className="table_body">
                  {singlegroup.transactions.map((singleuser, id) => (
                    <div className="table_body_list" key={id}>
                      <span
                        className="body_list"
                        style={{
                          display: "block",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {singleuser.id}
                      </span>
                      <span
                        className="body_list"
                        style={{
                          display: "block",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {singleuser.accountId}
                      </span>
                      <span className="body_list">
                        {+singleuser.creditAmount || -singleuser.debitAmount}
                      </span>
                      <span className="body_list">
                        {singleuser.closingBalance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

export default connect(null, mapDispatchToProps)(AgentTransaction);
