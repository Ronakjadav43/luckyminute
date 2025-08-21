import React, { useState, useEffect } from "react";
import "./TopWinners.scss";

const TopWinners = () => {
  const [scroll, setScroll] = useState(true);
  const [time] = useState(25);

  useEffect(() => {
    let interval = null;
    if (scroll) {
      interval = setInterval(() => {
        document
          .getElementsByClassName("winners_list_main")[0]
          .scrollBy(0.5, 1);
      }, time);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [scroll, time]);

  useEffect(() => {
    function stopScrolling(e) {
      setScroll(false);
    }
    function startScrolling(e) {
      setScroll(true);
    }
    document
      .getElementsByClassName("winners_list_main")[0]
      .addEventListener("pointerdown", stopScrolling);
    document
      .getElementsByClassName("winners_list_main")[0]
      .addEventListener("mousewheel", startScrolling);

    return () => {
      document
        .getElementsByClassName("winners_list_main")[0]
        .addEventListener("pointerdown", stopScrolling);
      document
        .getElementsByClassName("winners_list_main")[0]
        .addEventListener("mousewheel", startScrolling);
    };
  }, []);
  return (
    <div className="main_layout">
      <div className="main_layout_inner">
        <div className="games_winners_list">
          <div className="winners_list_inner">
            {/* <div className="players_name">
              <span className="player_text">Player</span>
            </div> */}
            <div className="players_amount">
              <span className="amount_text">Top Winners</span>
            </div>
          </div>
          <div className="winners_list_main">
            {[...Array(100)].map((e, i) => {
              return (
                <div key={i} className="winners_list_inner">
                  <div className="players_name">
                    <span className="player">john007</span>
                  </div>
                  <div className="players_amount">
                    <span className="amount">1950</span>
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

export default TopWinners;
