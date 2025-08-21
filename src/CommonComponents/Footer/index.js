import React from "react";
import GameCounter from "../Counter/GameCounter";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="footr">
      <GameCounter
        message={props.message}
        isChipsActive={props.isChipsActive}
        clearingBet={props.clearingBet}
        confirmBet={props.confirmBet}
        confirmingBet={props.confirmingBet}
        minutes={props.minutes}
        percentageValue={props.percentageValue}
        countClassName={props.countClassName}
        progresClassName={props.progresClassName}
        gameId={props.gameId}
        stepId={props.stepId}
        result={props.result}
        handleNext={props.handleNext}
        reload={props.reload}
      />
    </div>
  );
};

export default Footer;
