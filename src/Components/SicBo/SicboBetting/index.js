/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as sicboGame from "../../../Actions/sicboGame";
import { intToString } from "../../../CommonLibrary/CommonFunction";
import { bindActionCreators } from "redux";
import SicboDice from "../SicboDice";
import "./SicboBetting.scss";

const SicboBetting = (props) => {
  const [row, setRow] = useState([]);

  //Get reducers value
  const gameReducer = useSelector((state) => ({
    sicbo: state.gameReducer.sicbo,
    sicboResult: state.gameReducer.sicboResult,
    gameResultValue: state.gameReducer.gameResultValue,
  }));

  useEffect(() => {
    if (gameReducer.sicbo) {
      setRow(gameReducer.sicbo);
    }
  }, [gameReducer.sicbo]);

  const handleClickRow = (selectedBet) => {
    props.actions.sicboGame.sicboBetSelection(selectedBet);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="main_layout">
        <div className="main_layout_inner">
          <div className="sicbobetting">
            <div className="sicbo_row_one">
              {row.map(
                (data, index) =>
                  data.index === 1 && (
                    <span
                      key={index}
                      className={`row_one_inner ${
                        data.isActive ? "selected-bet" : ""
                      }`}
                      onClick={() => handleClickRow(data)}
                    >
                      {data.image ? (
                        <img src={data.image} alt="dice" />
                      ) : (
                        data.value
                      )}
                      {data.isActive === true &&
                      gameReducer.sicboResult !== null &&
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

            <div className="sicbo_row_second">
              {row.map(
                (data, index) =>
                  data.index === 2 && (
                    <div
                      key={index}
                      className={`row_second_inner ${
                        data.isActive ? "selected-bet" : ""
                      }`}
                      onClick={() => handleClickRow(data)}
                    >
                      {data.image ? (
                        <img src={data.image} alt="dice" />
                      ) : (
                        data.value
                      )}
                      {data.isActive === true &&
                      gameReducer.sicboResult !== null &&
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
                    </div>
                  )
              )}
            </div>

            <div className="sicbo_row_third">
              {[3, 4].map((rowData, i) => (
                <div key={i} className="row_third_inner">
                  {row.map((data, index) => (
                    <React.Fragment key={index}>
                      {data.index === rowData && (
                        <div
                          key={index}
                          onClick={() => handleClickRow(data)}
                          className={`sicbo_bet ${
                            data.className ? data.className : ""
                          } ${data.isActive ? "selected-bet" : ""}`}
                        >
                          {data.value}
                          {data.isActive === true &&
                          gameReducer.sicboResult !== null &&
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
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>

            <div className="sicbo_row_fourth">
              {row.map(
                (data, index) =>
                  data.index === 5 && (
                    <div
                      key={index}
                      className={`row_fourth_inner ${
                        data.isActive ? "selected-bet" : ""
                      }`}
                      onClick={() => handleClickRow(data)}
                    >
                      {data.image ? (
                        <img src={data.image} alt="dice" />
                      ) : (
                        data.value
                      )}
                      {data.isActive === true &&
                      gameReducer.sicboResult !== null &&
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
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      {gameReducer.gameResultValue && (
        <div className="sicbodice_div">
          <SicboDice result={gameReducer.sicboResult} />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    sicboGame: bindActionCreators(sicboGame, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(SicboBetting);
