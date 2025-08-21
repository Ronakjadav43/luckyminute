import React from "react";
import "./BettingGuide.scss";

const BettingGuide = () => {
  return (
    <div className="main_layout">
      <div className="main_layout_inner">
        <div className="bettingguide_main">
          <div className="bettingguide">
            <div className="bettingguide_header">
              <div className="bettingguide_header_inner">Bet Type</div>
              <div className="bettingguide_header_inner">Payout</div>
              <div className="bettingguide_header_inner">MinBet</div>
            </div>
            <div className="bettingguide_body">
              <div className="bettingguide_body_main">
                <span className="bettingguide_body_inner">1-9 10-18</span>
                <span className="bettingguide_body_inner">1</span>
                <span className="bettingguide_body_inner">10</span>
              </div>
              <div className="bettingguide_body_main">
                <span className="bettingguide_body_inner">Even Odd</span>
                <span className="bettingguide_body_inner">1</span>
                <span className="bettingguide_body_inner">10</span>
              </div>
              <div className="bettingguide_body_main">
                <span className="bettingguide_body_inner">Red White</span>
                <span className="bettingguide_body_inner">1</span>
                <span className="bettingguide_body_inner">10</span>
              </div>
              <div className="bettingguide_body_main">
                <span className="bettingguide_body_inner">0,1 to 18</span>
                <span className="bettingguide_body_inner">11</span>
                <span className="bettingguide_body_inner">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingGuide;
