/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Dice from "react-dice-roll";
import { useSelector } from "react-redux";
import { getDicePosition } from "../../../Constants/defaultValue";
import "./SicboDice.scss";

const SicboDice = (props) => {
  let total = 0;
  const [minutes, setMinutes] = useState(14);
  const [range, setRange] = useState("");
  const gameReducer = useSelector((state) => ({
    sicbo: state.gameReducer.sicbo,
    sicboResult: state.gameReducer.sicboResult,
  }));

  useEffect(() => {
    const timer = setInterval(() => setMinutes(minutes - 0.5), 500);
    return () => clearInterval(timer);
  }, [minutes]);

  useEffect(() => {
    if (gameReducer.sicboResult !== null) {
      gameReducer.sicboResult.map((result) => (total += result));
      if (total > 10) {
        setRange("Big");
      } else {
        setRange("Small");
      }
      setTimeout(() => {
        document.querySelector("#dice1 button").click();
        document.querySelector("#dice2 button").click();
        document.querySelector("#dice3 button").click();
      }, 200);
    }
  }, [gameReducer.sicboResult]);

  const t =
    gameReducer.sicboResult[0] +
    gameReducer.sicboResult[1] +
    gameReducer.sicboResult[2];

  const showDiceResult = (minutes) => {
    let result = "";
    if (minutes < 10) {
      result = <span>{`${gameReducer.sicboResult[0]}`}</span>;
    }
    if (minutes < 6) {
      result = (
        <span>
          {`${gameReducer.sicboResult[0]} + ${gameReducer.sicboResult[1]}`}
        </span>
      );
    }
    if (minutes < 3) {
      result = (
        <span>
          {`${gameReducer.sicboResult[0]} + ${gameReducer.sicboResult[1]} + ${gameReducer.sicboResult[2]}`}
        </span>
      );
    }
    return result;
  };

  return (
    <div className="main_layout">
      <div className="main_layout_inner col_center">
        {gameReducer.sicboResult !== null && (
          <div className="dice_main">
            <div className="dice_range">
              {minutes < 3 && <span>{range === "Big" ? "大" : "小"}</span>}
            </div>

            <div className="dice_div">
              <div
                id="dice1"
                className="dice1"
                style={{
                  ...getDicePosition("Dice1", gameReducer.sicboResult[0]),
                }}
              >
                <Dice
                  rollingTime="4000"
                  size="60"
                  cheatValue={gameReducer.sicboResult[0]}
                />
              </div>

              <div
                id="dice2"
                className="dice2"
                style={{
                  ...getDicePosition("Dice2", gameReducer.sicboResult[1]),
                }}
              >
                <Dice
                  rollingTime="8000"
                  size="60"
                  cheatValue={gameReducer.sicboResult[1]}
                />
              </div>

              <div
                id="dice3"
                className="dice3"
                style={{
                  ...getDicePosition("Dice3", gameReducer.sicboResult[2]),
                }}
              >
                <Dice
                  rollingTime="11000"
                  size="60"
                  cheatValue={gameReducer.sicboResult[2]}
                  sound="/GameSound/shaking-dice-25620.mp3"
                />
              </div>
            </div>

            <div className="total_number">{showDiceResult(minutes)}</div>

            <div className="total_number_inner">
              {minutes < 3 && <span>{t}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SicboDice;
