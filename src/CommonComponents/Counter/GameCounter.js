/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import "./GameCounter.scss";

const GameCounter = (props) => {
  const [progressbar, setProgressbar] = useState(100);
  const confirmBetCondition =
    props.confirmBet !== undefined && props.confirmBet === true;
  const isActiveChipCondition =
    props.isChipsActive !== undefined && props.isChipsActive === true;
  const isCloseButtonVisible = confirmBetCondition | isActiveChipCondition;

  useEffect(() => {
    if (props.minutes !== null && props.minutes <= props.percentageValue) {
      setProgressbar((props.minutes * 100) / props.percentageValue);
    } else {
      setProgressbar(100);
    }
  }, [props.minutes, props.percentageValue]);

  const bettingFrame = () => {
    return (
      <React.Fragment>
        {props.confirmBet !== undefined && props.confirmBet !== true && (
          <button className={`game_time_btn ${props.countClassName}`}>
            {props.minutes}
          </button>
        )}

        {props.confirmBet !== undefined && props.confirmBet === true && (
          <button
            className="game_done_btn"
            onClick={() => props.confirmingBet()}
          >
            <i className="fa-solid fa-check"></i>
          </button>
        )}

        <div className="game_counting">
          <span className="game_counting_text">{props.message}</span>
          <ProgressBar
            completed={progressbar}
            labelColor="#e80909"
            className={`wrapper ${props.progresClassName}`}
          />
        </div>

        {!isCloseButtonVisible && (
          <button className="game_chart_btn">
            <i className="fa-solid fa-chart-simple"></i>
          </button>
        )}

        {isCloseButtonVisible == true && (
          <button
            className="game_close_btn"
            onClick={() => props.clearingBet()}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
      </React.Fragment>
    );
  };

  const topPlayersBet = () => {
    return (
      <React.Fragment>
        <button className={`game_time_btn ${props.countClassName}`}>
          {props.minutes}
        </button>

        <div className="game_counting">
          <span className="game_counting_text">{props.message}</span>
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </React.Fragment>
    );
  };

  const gameResult = () => {
    return (
      <React.Fragment>
        <button className="game_menu_btn">
          <i className="fa-solid fa-ellipsis"></i>
        </button>

        <div className="game_counting">
          {props.minutes > 2 ? (
            <span className="game_counting_text">{props.message}</span>
          ) : (
            <span className="game_counting_text">{props.result}</span>
          )}
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </React.Fragment>
    );
  };

  const highlightBets = () => {
    return (
      <React.Fragment>
        <button className={`game_time_btn ${props.countClassName}`}>
          <ChevronRightIcon onClick={props.handleNext} />
        </button>

        {props.minutes > 2 ? (
          <div className="game_counting">
            <span className="game_counting_text">{props.message}</span>
          </div>
        ) : (
          <div className="game_counting">
            <span className="game_counting_text">{props.message}</span>
          </div>
        )}

        <button className="game_chart_btn">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </React.Fragment>
    );
  };

  const topWinners = () => {
    return (
      <React.Fragment>
        <button className={`game_time_btn ${props.countClassName}`}>
          <ChevronRightIcon onClick={props.handleNext} />
        </button>

        <div className="game_counting">
          <span className="game_counting_text">{props.message}</span>
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </React.Fragment>
    );
  };

  const hightlightWinning = () => {
    return (
      <React.Fragment>
        <button className={`game_time_btn ${props.countClassName}`}>
          <ChevronRightIcon onClick={() => props.reload()} />
        </button>

        <div className="game_counting">
          <span className="game_counting_text">{props.message}</span>
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </React.Fragment>
    );
  };

  const errorPage = () => {
    return (
      <React.Fragment>
        <button className="game_menu_btn">
          <i className="fa-solid fa-ellipsis"></i>
        </button>

        <div className="game_counting">
          <span className="game_counting_text">{props.message}</span>
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-refresh" onClick={() => props.reload()}></i>
        </button>
      </React.Fragment>
    );
  };

  const loadingPage = () => {
    return (
      <React.Fragment>
        <button className={`game_time_btn ${props.countClassName}`}>
          {props.minutes}
        </button>

        <div className="game_counting">
          <span className="game_counting_text">{props.message}</span>
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </React.Fragment>
    );
  };

  const noMoreBets = () => {
    return (
      <React.Fragment>
        <button className="game_menu_btn">
          <i className="fa-solid fa-ellipsis"></i>
        </button>

        <div className="game_counting">
          <span className="game_counting_text">{props.message}</span>
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </React.Fragment>
    );
  };

  const networkError = () => {
    return (
      <React.Fragment>
        {props.minutes ? (
          <button className={`game_time_btn ${props.countClassName}`}>
            {props.minutes}
          </button>
        ) : (
          <button className="game_menu_btn">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        )}

        <div className="game_counting">
          <span className="game_counting_text">
            {props.message} <ArrowForwardIcon />
          </span>
        </div>

        <button className="game_chart_btn">
          <i className="fa-solid fa-refresh" onClick={() => props.reload()}></i>
        </button>
      </React.Fragment>
    );
  };
  const rouletteGame = (stepId) => {
    if (stepId === 1) return bettingFrame();
    if (stepId === 2) return topPlayersBet();
    if (stepId === 3) return gameResult();
    if (stepId === 4) return highlightBets();
    if (stepId === 5) return topWinners();
    if (stepId === 6) return hightlightWinning();
    if (stepId === 7) return loadingPage();
    if (stepId === 8) return errorPage();
    if (stepId === 9) return noMoreBets();
    if (stepId === 10) return networkError();
  };

  const bacarratGame = (stepId) => {
    if (stepId === 1) return bettingFrame();
    if (stepId === 2) return topPlayersBet();
    if (stepId === 3) return gameResult();
    if (stepId === 4) return highlightBets();
    if (stepId === 5) return topWinners();
    if (stepId === 6) return hightlightWinning();
    if (stepId === 7) return loadingPage();
    if (stepId === 8) return errorPage();
    if (stepId === 9) return noMoreBets();
    if (stepId === 10) return networkError();
  };

  const sicboGame = (stepId) => {
    if (stepId === 1) return bettingFrame();
    if (stepId === 2) return topPlayersBet();
    if (stepId === 3) return gameResult();
    if (stepId === 4) return highlightBets();
    if (stepId === 5) return topWinners();
    if (stepId === 6) return hightlightWinning();
    if (stepId === 7) return loadingPage();
    if (stepId === 8) return errorPage();
    if (stepId === 9) return noMoreBets();
    if (stepId === 10) return networkError();
  };

  return (
    <div className="game_counter">
      {props.gameId === 1 && rouletteGame(props.stepId)}
      {props.gameId === 2 && bacarratGame(props.stepId)}
      {props.gameId === 3 && sicboGame(props.stepId)}
    </div>
  );
};

export default GameCounter;
