import React, { useState, useEffect } from "react";
import "./Baccarat Scoreboard.scss";
const BaccaratScoreboard = (props) => {
  return (
    <div className="main_layout">
      <div className="main_layout_inner">
        <div className="bacarrat">
          <div className="bacarrat_top">
            <div className="top_left">
              {[1, 2, 3, 4, 5, 6].map((rowData, i) => (
                <div key={i} className="top_left_inner">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                    (data, index) => (
                      <React.Fragment key={index}>
                        <div className="top_left_box"></div>
                      </React.Fragment>
                    )
                  )}
                </div>
              ))}
            </div>

            <div className="top_right">
              <div className="top_right_text">Predict</div>
              <div className="m_10">
              <div className="top_right_boxs">
                <div className="right_box">
                  <span className="right_box_red1">B</span>
                </div>
                <div className="right_box">
                  <span className="right_box_wheat1">P</span>
                </div>
              </div>
              <div className="top_right_boxs">
                <div className="right_box1">
                  <span className="right_box_banker1"></span>
                </div>
                <div className="right_box1">
                  <span className="right_box_win_banker"></span>
                </div>
              </div>
              <div className="top_right_boxs">
                <div className="right_box1">
                  <span className="right_box_win_player"></span>
                </div>
                <div className="right_box1">
                  <span className="right_box_player1"></span>
                </div>
              </div>

              <div className="top_right_boxs">
                <div className="right_box1">
                  <span className="right_box_player_natural"></span>
                </div>
                <div className="right_box1">
                  <span className="right_box_banker_natural"></span>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="bacarrat_center">
            <div className="bacarrat_center_top">
              <div className="center_top_inner">
                <img src="/img/banker.svg" />
                <span className="banker_text">Banker Pair</span>
                <span className="banker_text">7</span>
              </div>
              <div className="center_top_inner">
                <img src="/img/player.svg" />
                <span className="player_text">Player Pair</span>
                <span className="player_text">3</span>
              </div>
            </div>

            <div className="bacarrat_center_top">
              <div className="center_top_inner w_3">
                <img src="/img/red.svg" />
                <span className="banker_text">Banker</span>
                <span className="banker_text">21</span>
              </div>
              <div className="center_top_inner w_3">
                <img src="/img/orange.svg" />
                <span className="tie_text">Tie</span>
                <span className="tie_text">5</span>
              </div>
              <div className="center_top_inner w_3">
                <img src="/img/white.svg" />
                <span className="player_text">Player</span>
                <span className="player_text">11</span>
              </div>
            </div>
          </div>

          <div className="bacarrat_top">
            <div className="top_left">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((rowData, i) => (
                <div key={i} className="top_left_inner">
                  {[1, 2, 3, 4, 5, 6].map((data, index) => (
                    <React.Fragment key={index}>
                      <div className="top_left_box1"></div>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>

            <div className="top_right_side">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              ].map((rowData, i) => (
                <div key={i} className="top_left_inner">
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22,
                  ].map((data, index) => (
                    <React.Fragment key={index}>
                      <div className="top_left_box"></div>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaccaratScoreboard;
