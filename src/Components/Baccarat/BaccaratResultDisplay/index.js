import React from "react";
import "./BaccaratResultDisplay.scss";

const BaccaratResultDisplay = (props) => {
  return (
    <div className="baccarat_result">
      <div></div>
      {props.winner === "banker" && (
        <div className="connection_problem_inner">
          <span>庄赢</span>
          <span>Banker Win</span>
        </div>
      )}
      {props.winner === "player" && (
        <div className="connection_problem_inner player">
          <span>闲赢</span>
          <span>Player Win</span>
        </div>
      )}
      {props.winner === "tie" && (
        <div className="connection_problem_inner tie">
          <span>和</span>
          <span>Tie</span>
        </div>
      )}
    </div>
  );
};

export default BaccaratResultDisplay;
