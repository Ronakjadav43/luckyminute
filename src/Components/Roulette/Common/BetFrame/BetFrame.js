import React from "react";
import { intToString } from "../../../../CommonLibrary/CommonFunction";
import "./BetFrame.scss";

const BetFrame = (props) => {
  const isActive = props.value.isActive === true ? "game_bet_box1" : "";

  return (
    <span
      key={props.value.value}
      onClick={() => props.handleClickRow(props.value)}
      className={`game_bet_box ${props.value.color} ${isActive}`}
    >
      {props.value.value}

      {/* {props.value.chip !== null && props.winner !== null ? ( */}
      {props.value.isActive === true &&
      props.value.chip !== null &&
      props.winner !== null && props.value.isConfirm === true ? (
        <div key={props.value.value} className="select_bet select_bet2_winner">
          {/* {props.value.chip} */}
          {intToString(props.value.chip)}
        </div>
      ) : props.value.activeChip !== null ? (
        <div key={props.value.value} className="select_bet select_bet2">
          {intToString(props.value.activeChip)}
        </div>
      ) : (
        props.value.chip !== null && (
          <div
            key={props.value.value}
            className="select_bet select_bet2_confirm"
          >
            {/* {props.value.chip} */}
            {intToString(props.value.chip)}
          </div>
        )
      )}
    </span>
  );
};

export default BetFrame;
