/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Card from "../PlayingCards";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";

import * as baccaratGame from "../../../Actions/baccaratGame";
import { intToString } from "../../../CommonLibrary/CommonFunction";
import "./BaccaratBetting.scss";
import ReactFlipCard from "reactjs-flip-card";

const BaccaratBetting = (props) => {
  const [row, setRow] = useState([]);
  const [minutes, setMinutes] = useState(0.5);
  const [bankerTotal, setBankerTotal] = useState(null);
  const [playerTotal, setPlayerTotal] = useState(null);
  const [playerFirstCard, setPlayerFirstCard] = useState(false);
  const [playerSecondCard, setPlayerSecondCard] = useState(false);
  const [playerThirdCard, setPlayerThirdCard] = useState(false);
  const [bankerFirstCard, setBankerFirstCard] = useState(false);
  const [bankerSecondCard, setBankerSecondCard] = useState(false);
  const [bankerThirdCard, setBankerThirdCard] = useState(false);

  const gameReducer = useSelector((state) => ({
    baccarat: state.gameReducer.baccarat,
    baccaratResult: state.gameReducer.baccaratResult,
    gameResult: state.gameReducer.gameResult,
    playerTotal: state.gameReducer.playerTotal,
    bankerTotal: state.gameReducer.bankerTotal,
    gameResultValue: state.gameReducer.gameResultValue,
  }));

  useEffect(() => {
    if (gameReducer.baccarat) {
      setRow(gameReducer.baccarat);
    }
  }, [gameReducer.baccarat]);

  useEffect(() => {
    if (gameReducer.gameResult === null) {
      setBankerFirstCard(false);
      setBankerSecondCard(false);
      setBankerThirdCard(false);
      setPlayerFirstCard(false);
      setPlayerSecondCard(false);
      setPlayerThirdCard(false);
      setBankerTotal(null);
      setPlayerTotal(null);
    }
  }, [gameReducer.gameResult]);

  useEffect(() => {
    if (gameReducer.gameResultValue && minutes > 0) {
      const timer = setInterval(() => setMinutes(minutes + 0.5), 500);
      if (minutes > 4) {
        setPlayerFirstCard(true);
        // setPlayerTotal(gameReducer.playerTotal[0].toString());
      }
      if (minutes > 4.5) {
        // setPlayerFirstCard(true);
        setPlayerTotal(gameReducer.playerTotal[0].toString());
      }
      if (minutes > 6) {
        setBankerFirstCard(true);
        // setBankerTotal(gameReducer.bankerTotal[0].toString());
      }
      if (minutes > 6.5) {
        // setBankerFirstCard(true);
        setBankerTotal(gameReducer.bankerTotal[0].toString());
      }
      if (minutes > 8) {
        setPlayerSecondCard(true);
        // setPlayerTotal(gameReducer.playerTotal[1].toString());
      }
      if (minutes > 8.5) {
        // setPlayerSecondCard(true);
        setPlayerTotal(gameReducer.playerTotal[1].toString());
      }
      if (minutes > 10) {
        setBankerSecondCard(true);
        // setBankerTotal(gameReducer.bankerTotal[1].toString());
      }
      if (minutes > 10.5) {
        // setBankerSecondCard(true);
        setBankerTotal(gameReducer.bankerTotal[1].toString());
      }
      if (minutes > 14) {
        if (
          gameReducer.playerTotal.length < 3 &&
          gameReducer.bankerTotal.length > 2
        ) {
          setBankerThirdCard(true);
        } else {
          setPlayerThirdCard(true);
        }

        // if (gameReducer.playerTotal.length > 2) {
        //   setPlayerTotal(gameReducer.playerTotal[2].toString());
        // }
      }
      if (minutes > 14.5) {
        // setPlayerThirdCard(true);
        if (gameReducer.playerTotal.length > 2) {
          setPlayerTotal(gameReducer.playerTotal[2].toString());
        } else if (
          gameReducer.playerTotal.length < 3 &&
          gameReducer.bankerTotal.length > 2
        ) {
          setBankerTotal(gameReducer.bankerTotal[2].toString());
        }
      }

      if (minutes > 18) {
        setBankerThirdCard(true);
        // if (gameReducer.bankerTotal.length > 2) {
        //   setBankerTotal(gameReducer.bankerTotal[2].toString());
        // }
      }
      if (minutes > 18.5) {
        // setBankerThirdCard(true);
        if (gameReducer.bankerTotal.length > 2) {
          setBankerTotal(gameReducer.bankerTotal[2].toString());
        }
      }
      return () => clearInterval(timer);
    } else {
      setMinutes(0.5);
    }
  }, [minutes, gameReducer.gameResultValue]);

  const returnCardDesign = (isActive, card) => {
    return (
      <ReactFlipCard
        flipTrigger="disabled"
        flipByProp={isActive}
        frontComponent={
          <div className="card">
            <img className="card" src="/img/card.png" alt="card" />
          </div>
        }
        backComponent={<Card rank={card.figure} suit={card.suit} />}
      />
    );
  };
  const handleClickRow = (selectedBet) => {
    props.actions.baccaratGame.baccaratBetSelection(selectedBet);
  };

  return (
    <div className="main_layout">
      <div className="main_layout_inner">
        <div className="baccaratbetting">
          <div className="baccaratbetting_cards">
            <div className="cards_inner">
              <span className="card_text1">
                <span>
                  闲
                  <br />
                  Player
                </span>
                <span>{playerTotal ? playerTotal : ""}</span>
              </span>
              <div style={{ display: "flex", flexGrow: "1" }}>
                {gameReducer.baccaratResult !== null && (
                  <div className="all_card">
                    {returnCardDesign(
                      playerFirstCard,
                      gameReducer.gameResult?.playerCards[0]
                    )}
                    {returnCardDesign(
                      playerSecondCard,
                      gameReducer.gameResult?.playerCards[1]
                    )}

                    {(minutes > 13 || gameReducer.gameResultValue === null) &&
                      gameReducer.gameResult?.playerCards.length > 2 &&
                      returnCardDesign(
                        playerThirdCard,
                        gameReducer.gameResult?.playerCards[2]
                      )}
                  </div>
                )}
              </div>
            </div>
            <div className="cards_inner">
              <span className="card_text">
                <span>{bankerTotal ? bankerTotal : ""}</span>
                <span>
                  庄
                  <br />
                  Banker
                </span>
              </span>
              <div style={{ display: "flex", flexGrow: "1" }}>
                {gameReducer.baccaratResult !== null && (
                  <div className="all_card">
                    {returnCardDesign(
                      bankerFirstCard,
                      gameReducer.gameResult?.bankerCards[0]
                    )}
                    {returnCardDesign(
                      bankerSecondCard,
                      gameReducer.gameResult?.bankerCards[1]
                    )}

                    {((minutes > 13 &&
                      gameReducer.gameResult?.playerCards.length < 3) ||
                      minutes > 17 ||
                      gameReducer.gameResultValue === null) &&
                      gameReducer.gameResult?.bankerCards.length > 2 &&
                      returnCardDesign(
                        bankerThirdCard,
                        gameReducer.gameResult?.bankerCards[2]
                      )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="baccaratbetting_bets2">
            {row.map(
              (data, index) =>
                data.index === 1 && (
                  <div
                    key={index}
                    className={`bets2_inner ${
                      data.isActive ? "selected-bet" : ""
                    }`}
                    onClick={() => handleClickRow(data)}
                  >
                    <span
                      className={`bets2_text ${data.color} ${data.isActive}`}
                      style={{ wordSpacing: "165px", textAlign: "center" }}
                    >
                      {data.name}
                    </span>
                    <span
                      className={`banker_win_text ${data.color} ${data.isActive}`}
                    >
                      {data.value}
                    </span>
                    {data.isActive === true &&
                    gameReducer.baccaratResult !== null &&
                    data.chip !== null &&
                    data.isConfirm === true ? (
                      <div className="select_bet select_bet2_winner">
                        {intToString(data.chip)}
                      </div>
                    ) : data.activeChip !== null ? (
                      <div className="select_bet select_bet2">
                        {intToString(data.activeChip)}
                      </div>
                    ) : (
                      data.chip !== null && (
                        <div className="select_bet select_bet2_confirm">
                          {intToString(data.chip)}
                        </div>
                      )
                    )}
                  </div>
                )
            )}
          </div>

          <div className="baccaratbetting_bets">
            {row.map(
              (data, index) =>
                data.index === 2 && (
                  <div
                    key={index}
                    className={`bets_inner ${
                      data.isActive ? "selected-bet" : ""
                    }`}
                    onClick={() => handleClickRow(data)}
                  >
                    <span
                      className={`bets_text ${data.color} ${data.isActive}`}
                      style={{ wordSpacing: "165px", textAlign: "center" }}
                    >
                      {data.name}
                    </span>
                    <span
                      className={`bets_text ${data.color} ${data.isActive}`}
                    >
                      {data.value}
                    </span>
                    {data.isActive === true &&
                    gameReducer.baccaratResult !== null &&
                    data.chip !== null &&
                    data.isConfirm === true ? (
                      <div className="select_bet select_bet2_winner">
                        {intToString(data.chip)}
                      </div>
                    ) : data.activeChip !== null ? (
                      <div className="select_bet select_bet2">
                        {intToString(data.activeChip)}
                      </div>
                    ) : (
                      data.chip !== null && (
                        <div className="select_bet select_bet2_confirm">
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
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    baccaratGame: bindActionCreators(baccaratGame, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(BaccaratBetting);
