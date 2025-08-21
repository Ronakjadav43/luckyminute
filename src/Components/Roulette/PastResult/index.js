import React from "react";
import "./PastResults.scss";

const PastResult = () => {
  return (
    <div className="main_layout">
      <div className="main_layout_inner">
        <div className="game_winners_list">
          <div className="winners_list_inner header_background">
            <div className="players_name">
              <span className="player_text">Start Time</span>
            </div>
            <div className="players_amount">
              <span className="amount_text">Winning Number</span>
            </div>
            <div className="players_amount">
              <span className="amount_text">High Low</span>
            </div>
            <div className="players_amount">
              <span className="amount_text">Red White</span>
            </div>
            <div className="players_amount">
              <span className="amount_text">Even Odd</span>
            </div>
          </div>
          <div className="winners_list_main">
            {[...Array(100)].map((e, i) => {
              return (
                <div className="winners_list_inner">
                  <div className="players_name">
                    <span className="player">12/12/23 17:17</span>
                  </div>
                  <div className="players_amount">
                    <span className="amount red">12</span>
                  </div>
                  <div className="players_amount">
                    <span className="amount orange">High</span>
                  </div>
                  <div className="players_amount">
                    <span className="amount orange">Red</span>
                  </div>
                  <div className="players_amount red">
                    <span className="amount red">Odd</span>
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

export default PastResult;
