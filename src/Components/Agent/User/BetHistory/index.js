import React from "react";
import { useParams } from "react-router-dom";
import FooterMenu from "../../../../CommonComponents/FooterMenu";
import Header from "../../../../CommonComponents/Header";
import "./BetHistory.scss";

const BetHistory = (props) => {
  const { userName } = useParams();

  return (
    <div className="agent_layout">
      <Header name={"Bet History"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Player</span>
          <span className="sub_header_text">{userName}</span>
        </div>

        <div className="transaction_table">
          <div className="table_header">
            <span className="table_header_text">Game</span>
            <span className="table_header_text">Bet</span>
            <span className="table_header_text">Amount</span>
            <span className="table_header_text">Winning</span>
          </div>
          <div className="table_body_main">
            <div className="table_body_inner">
              <div className="table_body">
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
                <div className="table_body_list">
                  <span className="body_list">1234</span>
                  <span className="body_list">HP12345</span>
                  <span className="body_list">+300</span>
                  <span className="body_list">35460</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

export default BetHistory;
