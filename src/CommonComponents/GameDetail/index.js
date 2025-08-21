import React from "react";
import "./GameDetail.scss";

const GameDetails = (props) => {
  return (
    <div className="game_details_main">
      <div className="game_details_inner">
        <span className="game_details_text">{props.header}</span>
        <span className="game_details_value">{props.value}</span>
      </div>
    </div>
  );
};

export default GameDetails;
