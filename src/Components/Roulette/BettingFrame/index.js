/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import BetFrame from "../Common/BetFrame/BetFrame";
import * as rouletteGame from "../../../Actions/rouletteGame";
import { intToString } from "../../../CommonLibrary/CommonFunction";
import RouletteWheel from "../RouletteWheel";
import "../Common/BetFrames/BetFrames.scss";

const BettingFrame = (props) => {
  const [row, setRow] = useState([]);

  //Get reducers value
  const gameReducer = useSelector((state) => ({
    roulette: state.gameReducer.roulette,
    rouletteResult: state.gameReducer.rouletteResult,
    gameResultValue: state.gameReducer.gameResultValue,
  }));

  useEffect(() => {
    if (gameReducer.roulette) {
      setRow(gameReducer.roulette);
    }
  }, [gameReducer.roulette]);

  const handleClickRow = (selectedBet) => {
    props.actions.rouletteGame.rouletteBetSelection(selectedBet);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="main_layout">
        <div className="main_layout_inner">
          <div className="game_bet_one">
            {[1, 2, 3].map((rowData, i) => (
              <div key={i} className="game_bet_main">
                {row.map((data, index) => (
                  <React.Fragment key={index}>
                    {data.index === rowData && (
                      <BetFrame
                        key={index}
                        value={data}
                        handleClickRow={handleClickRow}
                        winner={gameReducer.rouletteResult}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
          <div className="game_bet">
            <div className="game_bet_two">
              {row.map(
                (data, index) =>
                  data.index === 4 && (
                    <span
                      key={index}
                      className={`bet_two_box ${
                        data.className ? data.className : ""
                      } ${data.isActive ? "bet_two_box2" : ""}`}
                      onClick={() => handleClickRow(data)}
                    >
                      {data.value}

                      {data.isActive === true &&
                      gameReducer.rouletteResult !== null &&
                      data.chip !== null &&
                      data.isConfirm === true ? (
                        <div className="select_bet select_bet2_winner">
                          {/* {data.chip} */}
                          {intToString(data.chip)}
                        </div>
                      ) : data.activeChip !== null ? (
                        <div className="select_bet select_bet2">
                          {/* {data.activeChip} */}
                          {intToString(data.activeChip)}
                        </div>
                      ) : (
                        data.chip !== null && (
                          <div className="select_bet select_bet2_confirm">
                            {/* {data.chip} */}
                            {intToString(data.chip)}
                          </div>
                        )
                      )}
                    </span>
                  )
              )}
            </div>
            <div className="game_bet_three">
              {row.map(
                (data, index) =>
                  data.index === 5 && (
                    <span
                      key={index}
                      className={`bet_three_box ${
                        data.isActive ? "bet_three_box1" : ""
                      }`}
                      onClick={() => handleClickRow(data)}
                    >
                      {data.image ? (
                        <img src={data.image} alt="" />
                      ) : (
                        data.value
                      )}

                      {data.isActive === true &&
                      gameReducer.rouletteResult !== null &&
                      data.chip !== null &&
                      data.isConfirm === true ? (
                        <div className="select_bet select_bet2_winner">
                          {/* {data.chip} */}
                          {intToString(data.chip)}
                        </div>
                      ) : data.activeChip !== null ? (
                        <div className="select_bet select_bet2">
                          {/* {data.activeChip} */}
                          {intToString(data.activeChip)}
                        </div>
                      ) : (
                        data.chip !== null && (
                          <div className="select_bet select_bet2_confirm">
                            {/* {data.chip} */}
                            {intToString(data.chip)}
                          </div>
                        )
                      )}
                    </span>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      {gameReducer.gameResultValue && (
        <div className="roulettewheel_div">
          <RouletteWheel result={gameReducer.rouletteResult} />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    rouletteGame: bindActionCreators(rouletteGame, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(BettingFrame);
