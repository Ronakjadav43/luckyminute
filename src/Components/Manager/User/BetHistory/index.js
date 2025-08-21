import React from "react";
import Header from "../../../../CommonComponents/Header";
import "./BetHistory.scss";

const BetHistory = (props) => {
  return (
    <div className="agent_layout">
      <Header name={"Bet History"} />
      <div className="bethistory">
        <div className="transaction_header">
          <span className="transaction_header_text">Player</span>
          <span className="transaction_header_text">hp1234567</span>
        </div>

        <div className="transaction_header_table">
          <span className="header_table_text">Game</span>
          <span className="header_table_text">Bet</span>
          <span className="header_table_text">Amount</span>
          <span className="header_table_text">Winning</span>
        </div>

        <div className="transaction_body_table">
          <div className="body_table_inner">
            <div className="transaction_lists">
              <div className="transaction_lists_inner">
                <span className="transaction_list_text">1234</span>
                <span className="transaction_list_text">HP12345</span>
                <span className="transaction_list_text">+300</span>
                <span className="transaction_list_text">35460</span>
              </div>
              <div className="transaction_lists_inner">
                <span className="transaction_list_text">1234</span>
                <span className="transaction_list_text">HP12345</span>
                <span className="transaction_list_text">+300</span>
                <span className="transaction_list_text">35460</span>
              </div>
              <div className="transaction_lists_inner">
                <span className="transaction_list_text">1234</span>
                <span className="transaction_list_text">HP12345</span>
                <span className="transaction_list_text">+300</span>
                <span className="transaction_list_text">35460</span>
              </div>
              <div className="transaction_lists_inner">
                <span className="transaction_list_text">1234</span>
                <span className="transaction_list_text">HP12345</span>
                <span className="transaction_list_text">+300</span>
                <span className="transaction_list_text">35460</span>
              </div>
              <div className="transaction_lists_inner">
                <span className="transaction_list_text">1234</span>
                <span className="transaction_list_text">HP12345</span>
                <span className="transaction_list_text">+300</span>
                <span className="transaction_list_text">35460</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
