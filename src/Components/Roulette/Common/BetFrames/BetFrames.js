import React from "react";
import "./BetFrames.scss";

const BetFrames = (props) => {
  const className = props.confirmBetResult
    ? "select_bet2_confirm"
    : "select_bet2";
  return (
    <div className="game_bet">
      <div className="game_bet_two">
        {props.value.map(
          (data, index) =>
            data.index === 4 && (
              <span
                key={index}
                className={`bet_two_box ${
                  data.className ? data.className : ""
                } ${data.isActive ? "bet_two_box2" : ""}`}
                onClick={() => props.handleClickRow(data)}
              >
                {data.value}
                {data.chip !== null && (
                  <div className={`select_bet ${className}`}>{data.chip}</div>
                )}
              </span>
            )
        )}
      </div>
      <div className="game_bet_three">
        {props.value.map(
          (data, index) =>
            data.index === 5 && (
              <span
                key={index}
                className={`bet_three_box ${
                  data.isActive ? "bet_three_box1" : ""
                }`}
                onClick={() => props.handleClickRow(data)}
              >
                {data.image ? <img src={data.image} alt="" /> : data.value}
                {data.chip !== null && (
                  <div className={`select_bet ${className}`}>{data.chip}</div>
                )}
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default BetFrames;
