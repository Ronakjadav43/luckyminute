import React, { useEffect, useState } from "react";
import Card from "../PlayingCards";
import { useSelector } from "react-redux";
import ReactFlipCard from "reactjs-flip-card";
import "./BaccaratCardDeal.scss";

const BaccaratCardDeal = () => {
  const [minutes, setMinutes] = useState(8);

  const gameReducer = useSelector((state) => ({
    baccaratResult: state.gameReducer.baccaratResult,
    gameResult: state.gameReducer.gameResult,
    playerTotal: state.gameReducer.playerTotal,
    bankerTotal: state.gameReducer.bankerTotal,
  }));

  useEffect(() => {
    const timer = setInterval(() => setMinutes(minutes - 1), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  return (
    <div className="main_layout">
      <div className="main_layout_inner">
        <div className="baccaratcarddeal">
          <div className="baccaratcarddeal_inner">
            <span className="carddeal_banker_text">Banker</span>
            <div className="baccaratcard">
              {minutes < 6 && (
                <ReactFlipCard
                  flipTrigger="disabled"
                  flipByProp={minutes < 5}
                  frontComponent={
                    <div className="cards">
                      <img className="card" src="/img/card.png" alt="card" />
                    </div>
                  }
                  backComponent={
                    <Card
                      rank={gameReducer.gameResult?.bankerCards[0].figure}
                      suit={gameReducer.gameResult?.bankerCards[0].suit}
                    />
                  }
                />
              )}

              {minutes < 5 && (
                <ReactFlipCard
                  flipTrigger="disabled"
                  flipByProp={minutes < 4}
                  frontComponent={
                    <div className="cards">
                      <img className="card" src="/img/card.png" alt="card" />
                    </div>
                  }
                  backComponent={
                    <Card
                      rank={gameReducer.gameResult?.bankerCards[1].figure}
                      suit={gameReducer.gameResult?.bankerCards[1].suit}
                    />
                  }
                />
              )}

              {minutes < 3 &&
                gameReducer.gameResult?.bankerCards.length > 2 && (
                  <ReactFlipCard
                    flipTrigger="disabled"
                    flipByProp={minutes < 2}
                    frontComponent={
                      <div className="cards">
                        <img className="card" src="/img/card.png" alt="card" />
                      </div>
                    }
                    backComponent={
                      <Card
                        rank={gameReducer.gameResult?.bankerCards[2].figure}
                        suit={gameReducer.gameResult?.bankerCards[2].suit}
                      />
                    }
                  />
                )}
              {/* ))} */}
            </div>

            <div className="game_banker_resul">
              {minutes < 1 && gameReducer.bankerTotal !== null
                ? gameReducer.bankerTotal
                : ""}
            </div>
          </div>

          <div className="baccaratcarddeal_inner">
            <span className="carddeal_player_text">Player</span>

            <div className="baccaratcard">
              {minutes < 8 && (
                <ReactFlipCard
                  flipTrigger="disabled"
                  flipByProp={minutes < 7}
                  frontComponent={
                    <div className="cards">
                      <img className="card" src="/img/card.png" alt="card" />
                    </div>
                  }
                  backComponent={
                    <Card
                      rank={gameReducer.gameResult?.playerCards[0].figure}
                      suit={gameReducer.gameResult?.playerCards[0].suit}
                    />
                  }
                />
              )}

              {minutes < 7 && (
                <ReactFlipCard
                  flipTrigger="disabled"
                  flipByProp={minutes < 6}
                  frontComponent={
                    <div className="cards">
                      <img className="card" src="/img/card.png" alt="card" />
                    </div>
                  }
                  backComponent={
                    <Card
                      rank={gameReducer.gameResult?.playerCards[1].figure}
                      suit={gameReducer.gameResult?.playerCards[1].suit}
                    />
                  }
                />
              )}

              {minutes < 4 &&
                gameReducer.gameResult?.playerCards.length > 2 && (
                  <ReactFlipCard
                    flipTrigger="disabled"
                    flipByProp={minutes < 2}
                    frontComponent={
                      <div className="cards">
                        <img className="card" src="/img/card.png" alt="card" />
                      </div>
                    }
                    backComponent={
                      <Card
                        rank={gameReducer.gameResult?.playerCards[2].figure}
                        suit={gameReducer.gameResult?.playerCards[2].suit}
                      />
                    }
                  />
                )}
            </div>

            <div className="game_player_resul">
              {minutes < 1 && gameReducer.playerTotal !== null
                ? gameReducer.playerTotal
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaccaratCardDeal;
